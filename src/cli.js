#!/usr/bin/env node
//declarando las variables con las que trabajaremos el cli
const {mdLinks} = require('./index');
const chalk = require('chalk');
const {brokenLinks, linksStats, pathError, errorLinks, messageHelp} = require('./optionsCli.js')

//declarando la opcion que ingresará el usuario
const optionArgument = process.argv.slice(2);

//funcion del CLI sin poner ningun comando, solo al poner la ruta
if (optionArgument.length === 1) {
  mdLinks(optionArgument[0], { validate: false })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

//funcion del Cli poniendo 
if (optionArgument.length === 2) {
  switch (optionArgument[1]) {
  case '--validate':
    mdLinks(optionArgument[0], { validate: true })
      .then(res => console.log(res))
      .catch(err => console.log(err, errorLinks));
    break;
  
  case '--stats':
    mdLinks(optionArgument[0], { validate: true })
      .then(res => console.table(chalk.greenBright(linksStats(res))))
      .catch(err => console.log(err, errorLinks));
    break;

  default: console.log((chalk.cyanBright(messageHelp)));
  }
}

if (optionArgument.length === 3) {
  mdLinks(optionArgument[0], { validate: true })
    .then(res =>{
      console.table(chalk.greenBright(linksStats(res)));
      console.table(chalk.red(brokenLinks(res)))})
    .catch(err => console.log(err, errorLinks));
}
