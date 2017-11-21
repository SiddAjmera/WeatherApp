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
const axios = require('axios');

const log = console.log;

log(args.address);
