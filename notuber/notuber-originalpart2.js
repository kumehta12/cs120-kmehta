var rideID = [];
var rideLat = [];
var rideLng = [];
var myLat = null;
var myLng = null;

var shortestDistance = null;
var nearestID = null;
var nearestLat = null;
var nearestLng = null;

// Initialize and add the map
function initMap() {


    // Get your current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Center the map at user's current location
        const myCenter = {lat: position.coords.latitude, lng: position.coords.longitude};
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: myCenter,
        });

        // Drop the marker to the user's location
        const marker0 = new google.maps.Marker({
          position: myCenter,
         map: map,
         title: "Your Location",
         animation: google.maps.Animation.DROP,
        });

        // Request the rides

        var params = "username=xXoDw780&lat=" + myCenter.lat + "&lng=" + myCenter.lng;
        //console.log(params);

        // Set up the POST
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jordan-marsh.herokuapp.com/rides', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);

        // Get the rides data
        xhr.onload = function () {
          // do something to response
          //console.log(this.responseText);

          // Get information about each ride
          const json = JSON.parse(this.responseText);
          var ind = 0;
  
          //var marker;
      

          json.forEach(function(val){
            
            
            var marker = [];

            rideID[ind] = val["id"];
            rideLat[ind] = val["lat"];
            rideLng[ind] = val["lng"];

            /*
            console.log("======");
            console.log(rideID, rideLat, rideLng);
            console.log("======");
            */

            // Create the markers for each ride on the map
            
            
              marker[ind] = new google.maps.Marker({
              position: {lat:val["lat"], lng:val["lng"]},
              map: map,
              title: "Vehicle ID:" + rideID[ind],
              animation: google.maps.Animation.DROP,
              icon: "carForMaps.png"
              });

              // Add a click event listener on your marker
              marker[ind].addListener('click', function() {
              // Open the info window when the marker is clicked
              infowindow.open(map, marker[ind]);
              });
            
            

            ind += 1;

          });

          //console.log(rideID, rideLat, rideLng);

  
          for(let i=0; i<ind; i++) {
            // Create two LatLng objects representing the two points
            var point1 = new google.maps.LatLng(rideLat[i], rideLng[i]);
            var point2 = new google.maps.LatLng(myLat, myLng);

            // Compute the distance between the two points using the Geometry library
            var distance = google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
            
            // Convert the distance to miles
            var distanceInMiles = distance * 0.000621371;

            if (i == 0) {
              shortestDistance = distanceInMiles;
              nearestID = rideID[0];
              nearestLat = rideLat[0];
              nearestLng = rideLng[0];
            }

            if (distanceInMiles < shortestDistance) {
              shortestDistance = distanceInMiles;
              nearestID = rideID[i];
              nearestLat = rideLat[i];
              nearestLng = rideLng[i];
            }
            //console.log("Distance ", distance);
            //console.log("In miles " + distanceInMiles);

            // Print the distance in miles
            //console.log("Distance between my Loc and " + rideID[i] + " : " + distanceInMiles + " miles");


          }

          //console.log("Nearest ride from my Loc is " + nearestID + " : " + shortestDistance + " miles - " + nearestLat + " " + nearestLng);

          // Render a polyline from my location to the nearest ride
          const pathCoordinates = [
            { lat: myLat, lng: myLng },
            { lat: nearestLat, lng: nearestLng },
 
          ];
          const polyPath = new google.maps.Polyline({
            path: pathCoordinates,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
          });
        
          polyPath.setMap(map);


          // Info window
          // Create the content for the info window
          var infoString = '<div id="info">' +
              '<h1>My Nearest Ride</h1>' +
              '<p> The nearest ride from your location is RIDE ID: ' + nearestID + ' which is ' + Math.trunc(shortestDistance) + ' miles away at lat: ' + nearestLat + ' lng: ' + nearestLng + '</p>' + 
              '</div>';

          // Create a new info window object
          var infowindow = new google.maps.InfoWindow({
              content: infoString
          });

          // Add a click event listener on your marker
          marker0.addListener('click', function() {
          // Open the info window when the marker is clicked
          infowindow.open(map, marker0);
          });
        };

      })
    }

  }
  
  window.initMap = initMap;