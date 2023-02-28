import chalk from 'chalk';

const printError = (error) => {
    console.log(chalk.bgRed("ERROR") + ' ' + error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen("SUCCESS") + ' ' + message)
}

const printHelp = () => {
    console.log(
        `${chalk.bgCyan(' HELP ')}
Без параметров - вывод погоды
-s [City] выбор города
-t [token] выбор токена          
        `
    )
}

const printWeather = (responce, icon) => {
    console.log(
        `${chalk.bgYellow(' WEATHER ')} Погода в городе ${responce.name}
${icon} ${responce.weather[0].description}
Температура: ${responce.main.temp}, ощущается как ${responce.main.feels_like}
`
    )
}

export { printError, printSuccess, printHelp, printWeather};