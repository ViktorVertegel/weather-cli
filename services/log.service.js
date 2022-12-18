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

export { printError, printSuccess, printHelp};