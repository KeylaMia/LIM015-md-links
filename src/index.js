//declarar constantes para instalar modulos de node .js
const path = require('path');
const fs = require('fs');

//rutas de prueba relativa y absoluta
const relativePath = 'README.md';
const absolutePath = 'C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md';

//para ver si la ruta existe
const verifyPath = (route) => fs.existsSync(route); 
console.log('¿la ruta ingresada existe?', verifyPath('prueba\\prueba.md'));
//console.log('¿la ruta ingresada existe?', verifyPath(absolutePath));

//para ver si es una ruta absoluta
const absoluteVerify = (route) => path.isAbsolute(route);
//console.log('¿la ruta ingresada es absoluta?',absoluteVerify(relativePath));

//para convertir a ruta absoluta
const absoluteConvert= (route) => path.resolve(route);
//console.log('la ruta absoluta es: ',absoluteConvert(relativePath));

//ver si no es archivo (es un directorio)
const directoryVerify = (route) => fs.statSync(route).isDirectory();
//console.log('¿Es un directorio?', directoryVerify(absolutePath));
//console.log('¿Es un directorio?', directoryVerify('prueba'));

//para leer los archivos dentro de una carpeta o directorio
const readDirectory = (route) => fs.readdirSync(route); 
console.log('¿cuales son los archivos dentro del directorio?', readDirectory('prueba'));

// si es archivo
const FileVerify = (route) => fs.statSync(route).isFile();
//console.log('¿Es un archivo?',FileVerify('prueba'));

//para ver la extension 
const extensionMd = (file) => (path.extname(file) === '.md'); 
console.log('¿Es un archivo con extension ".md"?', extensionMd('src\index.js'));

//para retornar lo que hay dentro de un archivo 
const readFile = (file) => fs.readFileSync(file, 'utf-8');
console.log('¿Qué hay dentro del archivo?', readFile('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md'));

//funcion para unir dos rutas
const joinPaths = (path1, path2) => path.join(path1, path2);
console.log('La union de ambas rutas es:', joinPaths(absolutePath, relativePath));

module.exports = {
    verifyPath,
    absoluteVerify,
    absoluteConvert,
    directoryVerify,
    readDirectory,
    FileVerify,
    extensionMd,
    readFile, 
    joinPaths,
  }
