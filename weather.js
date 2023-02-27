#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved')
    } catch (e) {
        printError(e.message)
    }
}

const getForecast = async () => {
    try {
    const weather = await getWeather(process.env.CITY)
    console.log(weather);
    } catch(e) {
        if (e?.responce?.status == 404) {
            printError("Неверно указан город")
        } else if(e?.responce?.status == 401) {
            printError("Неверно указан токен")
        } else {
            printError(e.message)
        }
    }
}    

const initCLI = () => {
    const args = getArgs(process.argv);
    //console.log(process.env)
    if (args.h){
        printHelp();
    }
    if (args.s){
        //Сохраняем город
    }
    if (args.t){
        return saveToken(args.t);
    }

    getForecast();
    //Выводим погоду
}

initCLI();