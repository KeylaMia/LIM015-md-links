const chalk = require("chalk");

//funciones para contar los links rotos, únicos y cantidad de links 
const linksStats = (array)=>{
  const allLinks = array.length; 
  const uniqueLinks = new Set(array.map(link => link.href));
  const allStats = `Total  : ${allLinks}\nUnique : ${uniqueLinks.size}`;
  return allStats;
}; 

const brokenLinks =(array)=>{
    //const messageLink = array.map( link => link.message)
    const brokenLink= array.filter( link => link.message ==='Fail');
    const errLinks = `Broken : ${brokenLink.length}`;
    return errLinks;
};

//mensaje de ayuda
const messageHelp = `
                                  »»————-　♡　————-««

${chalk.bold('Recuerda que debes ingresar el siguiente comando:')} ${chalk.bold.magenta('md-links <ruta> <comando>')}
                                 ──────▄▀▄─────▄▀▄
                                 ─────▄█░░▀▀▀▀▀░░█▄
                                 ─▄▄──█░░░░░░░░░░░█──▄▄
                                 █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
${chalk.yellow('1) --validate')}
Al ingresar esta opción te indicaremos el href, title, file, status y message de cada link.
${chalk.yellow('2) --stats')}
Al ingresar esta opción te indicaremos el número de links totales y único. 
${chalk.yellow('3) --validate --stats')}
Al ingresar esta opción te indicaremos el número de links totales, únicos y rotos.

                                  »»————-　♡　————-««
`;

const errorLinks = `
          ───▄▄─▄████▄▐▄▄▄▌
          ──▐──████▀███▄█▄▌
          ▐─▌──█▀▌──▐▀▌▀█▀
          ─▀───▌─▌──▐─▌
          ─────█─█──▐▌█
█▄░█ █▀█   █░█ ▄▀█ █▄█   █░░ █ █▄░█ █▄▀ █▀
█░▀█ █▄█   █▀█ █▀█ ░█░   █▄▄ █ █░▀█ █░█ ▄█
`
const pathError= `
                    ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
                    ───█▒▒░░░░░░░░░▒▒█───
                    ────█░░█░░░░░█░░█────
                    ─▄▄──█░░░▀█▀░░░█──▄▄─
                    █░░█─▀▄░░░░░░░▄▀─█░░█
█░░ ▄▀█   █▀█ █░█ ▀█▀ ▄▀█   █▄░█ █▀█   █▀▀ █▀   █░█ ▄▀█ █░░ █ █▀▄ ▄▀█
█▄▄ █▀█   █▀▄ █▄█ ░█░ █▀█   █░▀█ █▄█   ██▄ ▄█   ▀▄▀ █▀█ █▄▄ █ █▄▀ █▀█
`;

//console.log(messageHelp, error, pathError);

module.exports = { 
    messageHelp,
    errorLinks,
    pathError,
    linksStats, 
    brokenLinks,
  }
