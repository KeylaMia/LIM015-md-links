# Markdown Links

## Índice

- [1. Resumen del Proyecto](#1-resumen-del-proyecto)
- [2. Diagramas de Flujo](#2-diagramas-de-flujo)
- [3. Instalación ](#3-objetivos-de-aprendizaje)
- [3. Ejemplos ](#4-ejemplos)

---

## 1. Resumen del Proyecto

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Esta es una herramienta (librería) que usando [Node.js](https://nodejs.org/), lee y analiza archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## 2. Diagramas de Flujo

### API

![Diagrama api](./images/api.jpg)

### CLI (Command Line Interface - Interfaz de Línea de Comando)

![Diagrama cli](./images/cli.jpg)

## 2. Instalación

Por npm:

`$ npm i md-links-lim015`

Por repo de github:

`npm i --global GinaFlores/LIM015-md-links`

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 6. Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto **un ejecutable** como **una interfaz** que podamos importar con `require`
para usarlo programáticamente.




## 3. Instalación

Por npm:

`$ npm i md-links-lim015`

Por repo de github:

`npm i --global GinaFlores/LIM015-md-links`

## 4. Guía de Uso

### API

Para acceder a `mdLinks`, debemos importarla con

`const mdLinks = require('md-links-lim015')`

Esta es una promesa que recibe dos parámetros: `path` (ruta absoluta o relativa) y `option`, retornando un array de objetos por cada link encontrado con sus propiedades (href, text y file).

#### Ejemplos de uso:
```js
const mdLinks = require("md-links");
mdLinks("./some/example.md")
  .then((links) => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
mdLinks("./some/example.md", { validate: true })
  .then((links) => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);
mdLinks("./some/dir")
  .then((links) => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### CLI

En la línea de interfaz de comando (CLI), se coloca lo siguiente:

`md-links <path-to-file> [options]`

- Si pasamos la ruta sin opciones, retornará el href, text, file de cada uno de los links encontrados.

![Ruta sin opciones](./img/sin-opciones.png)

- Si pasamos la opción `--validate`, retornará el href, texto y file de los links encontrados, además del status (200, 404) y su mensaje respectivo (ok o fail).

![Ruta con opción validate](./img/opcion-validate.png)

- Si pasamos la opción `--stats`, el resultado serán el total de links encontrados y los links únicos (sin repetir).

![Ruta con opción stats](./img/opcion-stats.png)

- Si pasamos la opción (`--stats --validate`) o (`--validate --stats`) arrojará la cantidad total de links, así como de los links sin repetir y de los que estén rotos

![Ruta con opción validate y stats](./img/opcion-validate-y-stats.png)

- Si pasamos la ruta que no contiene links, la consola arrojará el mensaje siguiente:

![Ruta sin links](./img/no-hay-links.png)

- Si pasamos la ruta mal escrita, la consola arrojará el mensaje siguiente:

![Ruta no exite](./img/no-existe-la-ruta.png)

- Si pasamos la ruta bien escrita con alguna opción no válida, la consola arrojará lo siguiente:

![Mensaje de ayuda](./img/mensaje-ayuda.png)

## 5. Autora
Gina Gonzales Flores - Lim015 Laboratoria