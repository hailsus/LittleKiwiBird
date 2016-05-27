// var locations = [];
marker = {latLong: null, personName: "", until: "", since: "", LookingFor:null};

function createMarker(userlatLong, name, hereuntil, heresince, islookingfor){
	return{
		latLong: userlatLong,
		personName: name,
		until: hereuntil,
		since: heresince,
		LookingFor: islookingfor
	};
}

function makeLatLong(latitude, longitude){
	return{
		lat: latitude,
		lng: longitude
	}
}

var markers = [
	createMarker(makeLatLong(48.8545364, 2.3510909), "", "", "", null),
	createMarker(makeLatLong(-41.1124929, 173.0094875), "hails", "", "", null),
	createMarker(makeLatLong(-41.2929887, 174.7792662),"Enspiral Headquarters", "", 100, null)
];