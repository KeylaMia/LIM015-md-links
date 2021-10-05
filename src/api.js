//declarar constantes para instalar modulos de node .js
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

//rutas de prueba relativa y absoluta
const relativePath = 'README.md';
const absolutePath = 'C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md';

//para ver si la ruta existe
const verifyPath = (route) => fs.existsSync(route); 
//console.log('¿la ruta ingresada existe?', verifyPath('prueba\\prueba.md'));
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
//console.log('¿cuales son los archivos dentro del directorio?', readDirectory('prueba'));

// si es archivo
const fileVerify = (route) => fs.statSync(route).isFile();
//console.log('¿Es un archivo?',fileVerify('prueba'));

//para ver la extension .md
const extensionMd = (file) => (path.extname(file) === '.md'); 
//console.log('¿Es un archivo con extension ".md"?', extensionMd('src\index.js'));

//para retornar lo que hay dentro de un archivo 
const readFile = (file) => fs.readFileSync(file, 'utf-8');
//console.log('¿Qué hay dentro del archivo?', readFile('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md'));

//funcion para unir dos rutas
const joinPaths = (path1, path2) => path.join(path1, path2);
//console.log('La union de ambas rutas es:', joinPaths(absolutePath, relativePath));

// Función para recorrer directorio y obtener archivos .md
const getPathMd = (route) => {
  let arrayAllPath = [];
  if (directoryVerify(route)) {
      const allDirectory = readDirectory(route)
      allDirectory.forEach(element => {
          const joinRoute = path.join(route, element);
          arrayAllPath = arrayAllPath.concat(getPathMd(joinRoute));
      });
  } else if (extensionMd(route)) {
      arrayAllPath.push(route)
  }
  const arrayAllMd = arrayAllPath.filter((route) => extensionMd(route));
  return arrayAllMd;
};
//getPathMd('prueba');
//console.log(getPathMd('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\prueba'));

// Función para extraer links
const regEx = /!*\[(.+?)\]\((https?.+?)\)/gi;
const regExText = /\[[^\s]+(.+?)\]/gi;
const regExLink = /\((https?.+?)\)/gi;

//cuando validate es false 
const getLinks = (route) => {
    const fileMdContent = readFile(route).match(regEx);
    const linkArray = [];
    if(fileMdContent !== null) {
        fileMdContent.forEach((link) => {
            const linksObject = {
              href: link.match(regExLink).join().slice(1,-1),
              text: link.match(regExText).join().slice(1,-1),
              file: route,
            };
            linkArray.push(linksObject);
          }); 
    }
    return linkArray;
};
//console.log(getLinks('prueba\\prueba.md'));


const pruebaPath = getLinks('prueba\\prueba.md');
//funcion para validar los links
//fetch permite ver el status de los links
const validate = (info) => {
  const statusLink = info.map((link) => {
    return fetch(link.href)
      .then((result) => {
        const statusText = result.status ===200 ? 'Ok': 'Fail';
        const data = {
            file: link.file,
            href: link.href,
            message: statusText,
            text: (link.text.slice(0,50)), 
            status: result.status,
          };
          return data;
        })
        .catch((error) => {
          const data = {
            href: link.href,
            status: 'No Estatus',
            file: link.file,
            message: `Fail ${error.message}`,
          }; 
          return data;
        }) 
  });
  return Promise.all(statusLink)
  /*.then((res) => {
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
  */
};

validate(pruebaPath);

module.exports = { 
    verifyPath,
    absoluteVerify,
    absoluteConvert,
    directoryVerify,
    readDirectory,
    fileVerify,
    extensionMd,
    readFile, 
    joinPaths,
    getPathMd,
    getLinks,
    validate,
  }
