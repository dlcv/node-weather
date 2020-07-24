const colors = require('colors');
const place = require('./places/places');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// place.getPlaceLatLong(argv.address)
//     .then(console.log);

// weather.getWeather(40.68908, -73.95861)
//     .then(console.log())
//     .catch(console.log());

const getInfo = async(address) => {
    try {
        const city = await place.getPlaceLatLong(address);
        console.log(`== Datos de ${city.name} ==`).green;
        console.log(`Latitud: ${city.latitude}`);
        console.log(`Longitud: ${city.longitude}`);
        const temp = await weather.getWeather(city.latitude, city.longitude);
        return `El clima de ${city.name} es de ${temp}`;
    } catch (error) {
        console.log(`No se pudo obtener el clima de ${address}`);
    }
}

getInfo(argv.address)
    .then(console.log)
    .catch(console.log);