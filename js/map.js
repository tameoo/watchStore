
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:  48.21136501932989, lng: 16.370717433895436 },
        zoom: 5,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });
    
    
    const image = "icons/marker.svg";
    const Marker1 = new google.maps.Marker({
    position: { lat: 48.21136501932989, lng: 16.370717433895436 },
    map,
    icon: image
    });
    
    const Marker2 = new google.maps.Marker({
    position: { lat: 53.55702172922395, lng: 9.993481051831791 },
    map,
    icon: image
    });
    
    const Marker3 = new google.maps.Marker({
    position: { lat: 50.280935657619814, lng: 19.130833838842253  },
    map,
    icon: image
    });
    
    const markers = [Marker1,Marker2,Marker3];
    const secretMessage = ['Omega boutique Vienna', 'OMEGA Boutique - Hamburg','Zestawy audio pod zabudowę - Sosnowiec'];
    for(let i = 0; i < 3; i++){
        
        attachSecretMessage(markers[i],secretMessage[i]);
    }
    
    }
    
    function attachSecretMessage(marker, secretMessage) {
        const infowindow = new google.maps.InfoWindow({
        content: secretMessage,
        });
        marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
        });
    }
    