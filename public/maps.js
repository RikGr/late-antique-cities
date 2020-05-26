function initMap() {

let locations = [
    ['<a href="https://www.wikipedia.com/wiki/Constantinople">Constantinople</a>', 41.0052367, 28.8720967, 3],
    ['<a href="https://www.wikipedia.com/wiki/Nicopolis_ad_Istrum">Nicopolis Ad Istrum</a>', 41.595881, 23.7949809, 2],
    ['<a href="https://www.wikipedia.com/wiki/Dorostorum">Dorostorum</a>', 44.0462107, 27.1737668, 1],
  ];

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(42.00, 26.00),
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  let infowindow = new google.maps.InfoWindow();
  let marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })
    (marker, i));
  }
}