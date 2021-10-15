#!/usr/bin/env node
//declarando las variables con las que trabajaremos el cli
const {mdLinks} = require('./index');
const chalk = require('chalk');
const {brokenLinks, linksStats, pathError, errorLinks, messageHelp} = require('./optionsCli.js')

//declarando la opcion que ingresará el usuario
const optionArgument = process.argv.slice(2);

//declarando la ruta que ingresará el usuario
const path = process.argv[2];

//includes me devuelve true or false 
const validate = optionArgument.includes("--validate");
const stats = optionArgument.includes("--stats");

//funcion del CLI
if (optionArgument.length === 1) {
  mdLinks(path, {validate:false})
  .then(res => console.log(res))
  .catch((rej) => {
      if (rej === 'No existe la ruta, vuelve a intentarlo') {
          console.log(chalk.magentaBright(pathError));
      } else {
          console.log(chalk.cyanBright(errorLinks));
      }
  })
} else {
  if (validate && stats || stats && validate) {
      mdLinks(path, {validate:true})
      .then(res => {
          console.table(chalk.greenBright(linksStats(res)))
          console.table(chalk.redBright(brokenLinks(res)))
      })
      .catch(() => console.log(chalk.cyanBright(errorLinks)))
  } else if (validate) {
      mdLinks(path, {validate:true})
      .then(res => console.log(res))
      .catch(()=> console.log(chalk.cyanBright(errorLinks)))
  } else if (stats) {
      mdLinks(path, {validate:true})
      .then(res => console.table(chalk.greenBright(statsLinks(res))))
      .catch(()=> console.log(chalk.cyanBright(errorLinks)))
  } else {
      mdLinks(path, {validate:true})
      .then( console.log(chalk.cyanBright(messageHelp)))
      .catch(()=>console.log(chalk.cyanBright(errorLinks)));
  }
}