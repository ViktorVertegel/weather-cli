import axios from 'axios';
import http from 'http'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';


    const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
    throw new Error("Не задан ключ API, задайте его через команду -t")
        };
    console.log(token)    

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'}
        });
        console.log(data);
    
        return data;

};

export { getWeather };