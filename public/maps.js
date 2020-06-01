


function initMap() {
let locations = [
    ['<a href="https://www.wikipedia.com/wiki/Constantinople" target="_blank">Constantinople</a>', 41.0052367, 28.8720967, 3,
    '<img src="https://i1.wp.com/www.mikepole.com/wp-content/uploads/2016/10/Front-105635.jpg" >'],
   
    ['<a href="https://www.wikipedia.com/wiki/Nicopolis_ad_Istrum" target="_blank">Nicopolis Ad Istrum</a>', 41.595881, 23.7949809, 2,
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nicopolis_ad_Istrum_013.jpg/800px-Nicopolis_ad_Istrum_013.jpg" >'],

    ['<a href="https://www.wikipedia.com/wiki/Dorostorum" target="_blank">Dorostorum</a>', 44.0462107, 27.1737668, 1,
    '<img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Silistra_River_Danube.jpg" >'  ],
  ];

 let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(42.00, 26.00),
    /* mapTypeId: google.maps.MapTypeId.HYBRID */
    });

  let infowindow = new google.maps.InfoWindow();
  let marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function createInfoWindow (marker, i) {
      return function() {
        infowindow.setContent(locations[i][0] + locations[i][4]);
        infowindow.open(map, marker);
      }
    })
    (marker, i));
  } 
}  

