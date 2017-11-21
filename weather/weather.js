const request = require('request');

const log = console.log;
const apiKey = require('./config');

let getWeather = (location, cb) => {
    debugger;
    request(`https://api.darksky.net/forecast/${apiKey.apiKey}/${location.lat},${location.lng}`, (err, res, body) => {
        /* let responseBody = JSON.parse(body);
        let address = responseBody.results[0];
        let location = address.geometry.location;
        if(err) cb(`Error fetching data from Google Maps API: ${err}`);
        else if(responseBody.status === 'ZERO_RESULTS') cb(`Couldn't find that address`);
        else if(responseBody.status === 'OK') {
            log(`Got the Latitude as ${location.lat} and the Longitude as ${location.lng} for Address: ${address.formatted_address}`);
            cb(null, location);
        } */
        if(err) cb(`Error fetching data from DarkSky Forecast API: ${err}`);
        else if(res.statusCode === 404) cb(`Unable to getch Forecast`);
        else if(res.statusCode === 200) cb(null, JSON.parse(body));
    });
}

module.exports = {
    getWeather
};