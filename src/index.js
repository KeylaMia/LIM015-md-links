const api = require('../src/api.js');// Función mdLink validate options
const { pathError } = require('./optionsCli.js');

const mdLinks  = (route, option = {}) =>
    new Promise ((resolve, reject) => {
        if(!api.verifyPath(route)) {
            reject(pathError);
        } else  {
            const arrayAllObject = api.getLinks(route);
            if (!(option.validate)) {
                resolve(arrayAllObject);
            }else {
                const linkStatus = api.validate(arrayAllObject);
                resolve(linkStatus)
            }
        }
    });

/*const pruebaResultado = mdLinks('C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md', { validate: true });
pruebaResultado
.then((res) => console.log(res))
.catch((error) => console.log(error));
*/
module.exports= {
mdLinks
}