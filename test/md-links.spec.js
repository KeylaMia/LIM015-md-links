const api= require('../src/api.js');
const {
  fetch,
} = require('../mock/mocks_test.js');


  //test de verificacion del pahth si  existe o no 
  describe('verifyPath', () => {
    it('debería ser una función', () => {
      expect(typeof(api.verifyPath)).toBe('function');
    });
    it('deberia retornar true si la ruta existe', () => {
      expect(api.verifyPath('prueba\\prueba.md')).toBe(true);
    });
    it('deberia retorar false si la ruta no existe', () => {
      expect(api.verifyPath('gitignore')).toBe(false);
    });
  });
  
  //test de verificación de ruta absoluta
  describe('absoluteVerify', () => {
    it('debería ser una función', () => {
      expect(typeof(api.absoluteVerify)).toBe('function');
    });
    it('deberia retornar true si la ruta es absoluta', () => {
      expect(api.absoluteVerify('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md')).toBe(true);
    });
    it('deberia retorar false si la ruta es relativa', () => {
      expect(api.absoluteVerify('README.md')).toBe(false);
    });
  });  

    //test de conversion a ruta absoluta
    describe('absoluteConvert', () => {
      it('deberia convertir una ruta relativa a una absoluta', () => {
        expect(typeof(api.absoluteConvert)).toBe('function');
      });
      it('deberia retornar la misma ruta absoluta', () => {
        expect(api.absoluteConvert('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md'))
        .toBe('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md');
      });
      it('deberia retorar la rut absoluta', () => {
        expect(api.absoluteConvert('README.md')).toBe('C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\README.md');
      });
    }); 

    //test de funcion para ver si es directorio
    describe('directoryVerify', () => {
      it('deberia indicar si es un directorio (carpeta)', () => {
        expect(typeof(api.directoryVerify)).toBe('function');
      });
      it('deberia retornar true si es un directorio', () => {
        expect(api.directoryVerify('prueba'))
        .toBe(true);
      });
      it('deberia retorar false si no es un directorio', () => {
        expect(api.directoryVerify('README.md')).toBe(false);
      });
    });

    //test para buscar los archivos que hay dentro de un directorio
    describe('readDirectory', () => {
      it('deberia indicar los nombres de los archivos del directorio', () => {
        expect(typeof(api.readDirectory)).toBe('function');
      });
      it('deberia retornar array con los archivos que están dentro del directorio', () => {
        expect(api.readDirectory('prueba'))
        .toEqual([ 'prueba.js', 'prueba.md', 'pruebita2' ]);
      })
    });

    //test para ver si es un archivo
    describe('fileVerify', () => {
      it('deberia indicar si es un file', () => {
        expect(typeof(api.fileVerify)).toBe('function');
      });
      it('deberia retornar true si es un archivo', () => {
        expect(api.fileVerify('README.md'))
        .toBe(true);
      });
      it('deberia retorar false si no es un archivo', () => {
        expect(api.fileVerify('prueba')).toBe(false);
      });
    });

    //test para indicar la extension de un archivo
    describe('extensionMd', () => {
      it('deberia indicar la extension de un archivo', () => {
        expect(typeof(api.extensionMd)).toBe('function');
      });
      it('deberia retornar la extension del archivo', () => {
        expect(api.extensionMd('README.md'))
        .toBe(true);
      })
    });
    
    //test para leer los archivos dentro de un file
    describe('readFile', () => {
      it('deberia retornar lo que hay dentro de un archivo', () => {
        expect(typeof(api.readFile)).toBe('function');
      });
      it('deberia retornar el contenido de un archivo', () => {
        expect(api.readFile('C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md'))
        .toEqual('[Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)');
      })
    });

    //test de funcion recursiva para obtener los links
    describe('Función para recorrer directorio', () => {
      it('getPathMd() debe ser una función', () => {
        expect(typeof(api.getPathMd)).toBe('function');
      });
      it('debería retornar todos los archivos', () => {
        expect(api.getPathMd('C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba')).toEqual(
          [
            'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md',
            'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md',
          ]);
      });
      it('debería retornar archivos .md', () => {
        expect(api.getPathMd('C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md')).toEqual(['C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md']);
      });
    });

    //test de la funcion para obtener links de archivo md
    describe('Funcion para obtener enlace de un archivo', () => {
      it('getLinks() debe ser una función', () => {
        expect(typeof(api.getLinks)).toBe('function');
      });
      it('debería devolver un array de objetos con tres propiedades: href, text y file', () => {
        const pathFile = 'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md';
        const result = [
          {
            href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
            text: 'Arreglos',
            file: 'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md'
          }
        ];
        expect(api.getLinks(pathFile)).toEqual(result);
      });
    });

    //test del fetch, debo declarar variables para que se pueda testear y que me valide los datos 
    const linkvalidateVerify= [
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
        text: 'Array - MDN',
        file: 'C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md',
      },
    ];

    const linkInvalidateVerify= [
      {
        href: 'https://facebook',
        text: 'Facebook',
        file: 'C:\\Users\\Laboratoria\\OneDrive\\Documentos\\Laboratoria015\\LIM015-md-links\\prueba\\prueba.md',
      },
    ];
