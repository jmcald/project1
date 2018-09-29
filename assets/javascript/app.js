var ryan= [];
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam1jYWxkMCIsImEiOiJjam1sOXltbmowMDUwM3FrNHpzZHN0cXdsIn0.muI4K4RBCzUpH3Qbp_7uFA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
L.marker([51.505, -0.09]).addTo(mymap);


var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&input=" + searchTerm "&key=AIzaSyCfYHoTgzB2ZdWyhCujzuQoK32-0PmV_KA"

var searchTerm = "Yellowstone"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });