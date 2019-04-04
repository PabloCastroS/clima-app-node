const axios = require ('axios');

const getClima = async (lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ebe6b5f9aed18b63f1ca07d9ec17bb4f&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}

