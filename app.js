
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

var colors = require('colors');
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc:'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const getInfo = async (direccion) => {

    try {
        //OBTENER LUGAR
        const coords = await lugar.getLugarLatLng(direccion)
        //OBTENER CLIMA
        const temperatura = await clima.getClima(coords.lat, coords.lng)
        return `El clima de ${coords.direccion.cyan} es de: ${temperatura}°.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
    
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)