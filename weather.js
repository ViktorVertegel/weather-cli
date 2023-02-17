#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

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

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args)
    if (args.h){
        printHelp();
    }
    if (args.s){
        //Сохраняем город
    }
    if (args.t){
        return saveToken(args.t);
    }
    //Выводим погоду
}

initCLI();