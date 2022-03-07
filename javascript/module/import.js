/*
Fichier qui sert a tester les exportations provenant de module.js

note: si il y a une type d'erreur d'importation: "cannot use import statement outside a module", ajouter la ligne -> "type": "module", (dans package.json) pour regler ce probleme
*/

//importer la fonction presentation(name) et la variable stack de module.js
import { presentation } from './module.js';
import { stack } from './module.js';
console.log(presentation('Rakoto') + ' ' + stack); //Bonjour, je m'appelle Rakoto et je suis developpeur Javascript

