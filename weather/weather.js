const axios = require('axios');

const getWeather = async(latitude, longitude) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherToken}&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getWeather
}