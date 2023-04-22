// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and 
// store the popular web technology names into this file.Access both file in a third file named main.js

const countries = require('./countries.js');
const webTechs = require('./web_techs.js');

console.log(countries);
console.log(webTechs);
console.log(`Hey! I am from ${countries[0]} and learning ${webTechs[0]} and ${webTechs[1]}.`)