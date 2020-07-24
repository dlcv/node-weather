const axios = require('axios');

const getPlaceLatLong = async(address) => {

    const encodedAddress = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedAddress}?json=1`,
        timeout: 100000,
    });

    const resp = await instance.get();

    if (resp.data.lenght === 0)
        throw new Error(`No hay resultados para ${encodedAddress}`);

    const data = resp.data;
    const name = data.standard.city;
    const latitude = data.latt;
    const longitude = data.longt;

    return {
        name,
        latitude,
        longitude
    }
}

module.exports = {
    getPlaceLatLong
}