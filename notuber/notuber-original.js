

// Initialize and add the map
function initMap() {
    // The location of ssBoston
    const ssBoston = { lat: 42.352271, lng: -71.05524200000001 };
    // The map, centered at ssBoston
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: ssBoston,
    });

    // The marker, position for ssBoston
    const marker0 = new google.maps.Marker({
        position: ssBoston,
        map: map,
        title: "ssBoston",
        animation: google.maps.Animation.DROP,
      });

    // The marker, position for vehicle mXfkjrFw
    const marker1 = new google.maps.Marker({
      position: {lat:42.3453, lng:-71.0464},
      map: map,
      title: "Vehicle ID: mXfkjrFw",
      animation: google.maps.Animation.DROP,
      icon: "carForMaps.png"
    });

    // The marker, position for vehicle nZXB8ZHz
    const marker2 = new google.maps.Marker({
        position: {lat:42.3662, lng:-71.0621},
        map: map,
        title: "Vehicle ID: nZXB8ZHz",
        animation: google.maps.Animation.DROP,
        icon: "carForMaps.png"
    });

    // The marker, position for vehicle Tkwu74WC
    const marker3 = new google.maps.Marker({
        position: {lat:42.3603, lng:-71.0547},
        map: map,
        title: "Vehicle ID: Tkwu74WC",
        animation: google.maps.Animation.DROP,
        icon: "carForMaps.png"
    });

    // The marker, position for vehicle 5KWpnAJN
    const marker4 = new google.maps.Marker({
        position: {lat:42.3472, lng:-71.0802},
        map: map,
        title: "Vehicle ID: 5KWpnAJN",
        animation: google.maps.Animation.DROP,
        icon: "carForMaps.png"
    });

    // The marker, position for vehicle uf5ZrXYw
    const marker5 = new google.maps.Marker({
        position: {lat:42.3663, lng:-71.0544},
        map: map,
        title: "Vehicle ID: uf5ZrXYw",
        animation: google.maps.Animation.DROP,
        icon: "carForMaps.png"
    });

    // The marker, position for vehicle VMerzMH8
    const marker6 = new google.maps.Marker({
        position: {lat:42.3542, lng:-71.0704},
        map: map,
        title: "Vehicle ID: VMerzMH8",
        animation: google.maps.Animation.DROP,
        icon: "carForMaps.png"
    });
  }
  
  window.initMap = initMap;