const request = require('request');

const log = console.log;

let geocodeAddress = (address, cb) => {
    request(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`, (err, res, body) => {
        let responseBody = JSON.parse(body);
        let address = responseBody.results[0];
        let location = address.geometry.location;
        if(err) cb(`Error fetching data from Google Maps API: ${err}`);
        else if(responseBody.status === 'ZERO_RESULTS') cb(`Couldn't find that address`);
        else if(responseBody.status === 'OK') {
            log(`Got the Latitude as ${location.lat} and the Longitude as ${location.lng} for Address: ${address.formatted_address}`);
            cb(null, location);
        }
    });
}

module.exports = {
    geocodeAddress
};