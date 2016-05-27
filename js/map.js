//initialise
// var map = L.map('map').locate({setView: true, maxZoom: 16});
var map = L.map('map', {
  center: [0.2929887, 174.7792662],
  zoom: 1
});
var geocoding = new L.Control.GeoSearch({
  provider: new L.GeoSearch.Provider.OpenStreetMap()
});
geocoding.addTo(map);

var userMarker = null;
var locationMarker = null;
var userCircle = null;
var locationLatLong = "";
var locationAddress = "";

//set for geolocation
map.locate({setView: true, maxZoom: 16});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(map);

var GenericIcon = L.Icon.extend({
    options: {
        shadowUrl: './img/marker-shadow.png',
        iconSize:     [25, 41],
        shadowSize:   [50, 64],
        iconAnchor:   [12, 42],
        shadowAnchor: [16, 64],
        popupAnchor:  [2, -32]
    }
});

var blueIcon = new GenericIcon({iconUrl: './img/marker-icon.png'}),
    orangeIcon = new GenericIcon({iconUrl: './img/marker-iconOrange.png'});

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    locationMarker = new L.marker(e.latlng, {icon: blueIcon}).on('click', highlightLocationMarker);
    map.addLayer(locationMarker, {draggable:true});
    locationMarker.bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
    console.log(e.latlng);
    
    //store the location
    var location = e.latlng.lat + ", " + e.latlng.lng;
    //getAddressOfLatLong(e.latlng);
}

function highlightLocationMarker(e){
   //remove user marker
   if(!(userMarker == null)){
      removeCurrentMarker();
   }
   //highlight location
   locationMarker.setIcon(orangeIcon);
   displayEnspiralites();
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    console.log(e.message);
    //not using https, just display those saved locations
    displayEnspiralites();
}

map.on('locationerror', onLocationError);

function removeCurrentMarker(){
   map.removeLayer(userMarker);
   map.removeLayer(userCircle);
}
function displayEnspiralites(){
  for (var i = 0; i < markers.length; i++){
    var text = markers[i].personName;
    if (text == "Enspiral Headquarters"){
      // TODO: make Black popup marker
      locationMarker = new L.marker(markers[i].latLong, {icon: orangeIcon}).on('click', highlightLocationMarker);
    }
    else{
      locationMarker = new L.marker(markers[i].latLong, {icon: blueIcon}).on('click', highlightLocationMarker);
    }
    map.addLayer(locationMarker, {draggable:false});
    if (text != ""){
      locationMarker.bindPopup(text).openPopup();
    }
    L.circle(markers[i].latLong, getCircleSize(markers[i].since)).addTo(map);
    console.log(markers[i].latlng);
  }
}

function getCircleSize(duration){
  console.log(duration);
  if(duration > 52){
    return 500;
  }
  return duration;
}

function addMarkerAtPosition(position, text){
    var radius = 50;
    userMarker = new L.marker(position, {icon: orangeIcon})
    map.addLayer(userMarker, {draggable:true});
    userMarker.bindPopup(text).openPopup();
    
    userCircle = new L.circle(position, radius)
    map.addLayer(userCircle);
    
    //deselect location marker
    locationMarker.setIcon(blueIcon);
}

//store the location
function getAddressOfLatLong(latLongVal){
    console.log(latLongVal.toString());
    //set address to the value of address
    var address = "";
    return address;
}

function onMouseClick(e){
   displayPoint(e.latlng);
}
function displayPoint(loc){
   console.log("***Lat, Lon : " + loc.latlng.lat + ", " + loc.latlng.lng);
   if(!(userMarker == null)){
      removeCurrentMarker();
   }
   //get location - geocode geosearch
   var location = loc.latlng.lat + ", " + loc.latlng.lng;
   geocoding.geosearch(location);
   //-37.7960486, 175.2929679
   //locationLatLng = location;
   addMarkerAtPosition(loc.latlng, "Getting Location...");
}

map.on('click', displayPoint);
