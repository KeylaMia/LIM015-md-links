const mdLinks = require('../src/index');

describe('Funcion para validar options', () => {
    it('mdLinks() debe ser una función', () => {
        expect(typeof(mdLinks.mdLinks)).toBe('function');
    });
    it('validate: false: debería devolver href, text, file', () => {
    const routeFile = 'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md';
        const validateFalse = [
            {
                href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
                text: 'Arreglos',
                file: 'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md',
            },
        ];
        expect(mdLinks.mdLinks(routeFile, { validate: false })).resolves.toEqual(validateFalse);
    });
    it('valite true: debería retornar href, text, file, status, messages', () => {
        const routeFile = 'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md';
        const validateTrue = [
            {
                href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
                text: 'Arreglos',
                file: 'C:\\Users\\Keyla\\OneDrive\\Escritorio\\importante\\GitHub\\LIM015-md-links\\prueba\\pruebita2\\prueba2.md',
                status: 200,
                message: 'Ok',
            },
        ];
        expect(mdLinks.mdLinks(routeFile, { validate: true })).resolves.toEqual(validateTrue);
    });
    it('mensaje de error si no existe ruta', () => {
        const fakeRoute = 'C:\\Users\\Laboratoria\\OneDrive\\Documentos\\Laboratoria015\\LIM015-md-links\\prueba\\cursos\\curso.js'
        const result = 'No existe la ruta, vuelve a intentarlo';
        expect(mdLinks.mdLinks(fakeRoute)).rejects.toEqual(result);
    });
});