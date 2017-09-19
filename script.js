// Get the location.
navigator.geolocation.getCurrentPosition(function(position) {
    // Get the positioning coordinates.
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Do something interesting...
    document.getElementById('cooridnates').innerText = lat + ', '+ lon;
});