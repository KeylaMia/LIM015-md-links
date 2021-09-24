const {
  verifyPath,
  absoluteVerify,
  absoluteConvert,
  directoryVerify,
  readFile,
  FileVerify,
  extensionMd,
  readDirectory,
  joinPaths,
} = require('../src/index')
  
  //test de verificacion del pahth si  existe o no 

  describe('verifyPath', () => {
    it('debería ser una función', () => {
      expect(typeof(verifyPath)).toBe('function');
    });
    it('deberia retornar true si la ruta existe', () => {
      expect(verifyPath('prueba\\prueba.md')).toBe(true);
    });
    it('deberia retorar false si la ruta no existe', () => {
      expect(verifyPath('gitignore')).toBe(false);
    });
  });
  
  //test de verificación de ruta absoluta
  describe('absoluteVerify', () => {
    it('debería ser una función', () => {
      expect(typeof(absoluteVerify)).toBe('function');
    });
    it('deberia retornar true si la ruta es absoluta', () => {
      expect(absoluteVerify('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md')).toBe(true);
    });
    it('deberia retorar false si la ruta es relativa', () => {
      expect(absoluteVerify('README.md')).toBe(false);
    });
  });  

    //test de conversion a ruta absoluta
    describe('absoluteConvert', () => {
      it('deberia convertir una ruta relativa a una absoluta', () => {
        expect(typeof(absoluteConvert)).toBe('function');
      });
      it('deberia retornar la misma ruta absoluta', () => {
        expect(absoluteConvert('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md'))
        .toBe('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md');
      });
      it('deberia retorar la rut absoluta', () => {
        expect(absoluteConvert('README.md')).toBe('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\README.md');
      });
    }); 

    //test de funcion para ver si es directorio
    describe('directoryVerify', () => {
      it('deberia indicar si es un directorio (carpeta)', () => {
        expect(typeof(directoryVerify)).toBe('function');
      });
      it('deberia retornar true si es un directorio', () => {
        expect(directoryVerify('prueba'))
        .toBe(true);
      });
      it('deberia retorar false si no es un directorio', () => {
        expect(directoryVerify('README.md')).toBe(false);
      });
    });

    //test para buscar los archivos que hay dentro de un directorio
    describe('readDirectory', () => {
      it('deberia indicar los nombres de los archivos del directorio', () => {
        expect(typeof(readDirectory)).toBe('function');
      });
      it('deberia retornar array con los archivos que están dentro del directorio', () => {
        expect(readDirectory('prueba'))
        .toEqual(["prueba.md", "pruebita2"]);
      })
    });

    //test para ver si es un archivo
    describe('FileVerify', () => {
      it('deberia indicar si es un file', () => {
        expect(typeof(FileVerify)).toBe('function');
      });
      it('deberia retornar true si es un archivo', () => {
        expect(FileVerify('README.md'))
        .toBe(true);
      });
      it('deberia retorar false si no es un archivo', () => {
        expect(FileVerify('prueba')).toBe(false);
      });
    });

    //test para indicar la extension de un archivo
    describe('extensionMd', () => {
      it('deberia indicar la extension de un archivo', () => {
        expect(typeof(extensionMd)).toBe('function');
      });
      it('deberia retornar la extension del archivo', () => {
        expect(extensionMd('README.md'))
        .toBe('.md');
      })
    });
    
    //test para leer los archivos dentro de un file
    describe('readFile', () => {
      it('deberia retornar lo que hay dentro de un archivo', () => {
        expect(typeof(readFile)).toBe('function');
      });
      it('deberia retornar el contenido de un archivo', () => {
        expect(readFile('C:\\Users\\Keyla\\Desktop\\importante\\GitHub\\LIM015-md-links\\prueba\\prueba.md'))
        .toEqual(`[Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)`);
      })
    });
