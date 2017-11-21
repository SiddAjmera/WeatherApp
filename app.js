const args = require('yargs')
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch the Weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const log = console.log;
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

log(args.address);
geocode.geocodeAddress(args.address, (err, location) => {
    if(err) log(`Got an error: ${err}`)
    else {
        log(`Fetching weather for ${JSON.stringify(location)}`);
        weather.getWeather(location, (err, weatherForecast) => {
            if(err) log(`Got an error while fetching the weather data: ${err}`);
            else log(`Got the weather forecast as ${JSON.stringify(weatherForecast.currently, null, 2)}`);
        });
    }
});