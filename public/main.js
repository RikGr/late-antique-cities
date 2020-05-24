// Initialize and add the map
function initMap() {
    // The locations
    var balkan = {lat: 41.0052367, lng: 28.8720967};
    // The map, centered at Balkan
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: balkan});
    // The marker, positioned at Balkan
    var marker = new google.maps.Marker({position: balkan, map: map});
  }