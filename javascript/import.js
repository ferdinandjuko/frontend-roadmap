/*
Fichier qui sert a tester les exportations provenant de module.js
*/

//importer la fonction presentation(name) et la variable stack de module.js
import { presentation } from './module.js';
import { stack } from './module.js';
console.log(presentation('Rakoto') + ' ' + stack);
