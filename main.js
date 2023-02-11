// create a map in the "map" div, set the view to a given place and zoom
// var map = L.map('map').setView([40.717192,-74.012042], 17);
// //API Key: AIzaSyBMaLapLIs49juZUmxNr6RR3bePtFOxKg8
// /* to change the location of the map change the lat and long, here 40.717192,-74.012042.
// To change the default zoom level change 17 to another number. 0 is entire world twice over and 18 is the closest you can get
// */

// // add an OpenStreetMap tile layer
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// var map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(40,35),
//     zoom: 6,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// });


// var polygon = L.polygon([
//     [34.51022,36.76119 ],
//     [34.51029,36.76128],
//     ,
//                 [
//                     34.51049,
//                     36.76111
//                 ],
//                 [
//                     34.51039,
//                     36.76104
//                 ],
//                 [
//                     34.51022,
//                     36.76119
//                 ]
// ]).addTo(map);
// L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
// maxZoom: 20,
// subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
// }).addTo(map);
// var marker = L.marker([34, -0.09]).addTo(map);
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
// L.marker([40.717192,-74.012042]).addTo(map)
//     .bindPopup('The Borough of Manhattan Community College.')
//     .openPopup();

 // This example creates a simple polygon representing the Bermuda Triangle.
 
 function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: {lat: 36.76119, lng: 34.51022},//Center kordinatları önemli
    mapTypeId: 'terrain'
  });

  var triangleCoords = [
    {lat: 36.76119, lng: 34.51022},
    {lat: 36.76128, lng: 34.51029},
    {lat: 36.76111, lng: 34.51049},
    {lat: 36.76104, lng: 34.51039},
    {lat: 36.76119, lng: 34.51022}
  ];

  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);
}





//009900 Yeşil