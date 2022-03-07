const myString = 'Javascript est un langage orientE objet !';
let emojis = ['😏', '😎', '😘'];
let fruits = ['🍓', '🍐', '🍇'];
let animals = ['🐔', '🐑', '🐝'];
let cars = ['ford', 'peugeot', 'ferrari', 'bmw', 'audi', 'mercedes'];
let mixtes = ['Rakoto', 24, false, [0, 8], { email: 'rakoto@gmail.com' }];

//*** acceder aux valeurs
cars[0]; //ford
cars[4][1]; //'u' -> a(u)di
mixtes[3][1]; //8
mixtes[4].email; //rakoto@gmail.com

//*** indexOf -> retourne l'index de l'element en argument
emojis.indexOf('😎'); //1
myString.indexOf('Javascript'); //0
//note: indexOf retoure -1 si l'element n'existe pas

//*** length -> longeur du tableau (compteur)
let totalFruits = fruits.length; //3
//note: <array/var>.length - 1 -> pour acceder au dernier valeur

//*** slice -> recuperer l'element d'une chaine/tableau a partir du marge de l'index en argument [marge(min,max) = index, index + 2]
emojis.slice(1, 3); //[ '😎', '😘' ]
myString.slice(0, 10); //Javascript

//*** split -> decomposer une chaine a partir d'un delimiteur en argument
myString.split(' '); //[ 'Javascript', 'est', 'un', 'langage', 'orientE', 'objet', '!' ]

//*** replace -> remplacer un element d'une chaine par un autre passE en argument
myString.replace('Javascript', 'Python'); //Python est un langage orientE objet !

//*** toLowerCase/toUpperCase -> une chaine en Minuscule/Majuscule
myString.toLowerCase(); //javascript est un langage oriente objet !
myString.toUpperCase(); //JAVASCRIPT EST UN LANGAGE ORIENTE OBJET !

//*** push -> ajout des elements a la queue
cars.push('citroen'); //['ford', 'peugeot', 'ferrari', 'bmw', 'audi', 'mercedes', 'citroen']

//*** unshift -> ajout des elements a la tete
cars.unshift('citroen'); //['citroen', 'ford', 'peugeot', 'ferrari', 'bmw', 'audi', 'mercedes']

//*** shift -> suppression des elements a la tete
fruits.shift(); //['🍐', '🍇']

//*** shift -> suppression des elements a la queue
fruits.pop(); //['🍓', '🍐']

//*** concat -> fusionner des tableaux (sans spride operateur)
emojis.concat(fruits); //[ '😏', '😎', '😘', '🍓', '🍐', '🍇' ]

//*** substr -> decouper une chaine de caractere
cars[1].substr(0, 3); //peu -> (peu)geot

//*** spride operateur (...) -> fusionner des tableaux
[...animals, ...fruits]; //[ '🐔', '🐑', '🐝', '🍓', '🍐', '🍇' ]

//*** join -> casser un tableau en chaine et le separer par une valeur passEe en argument
animals;

//*** fonction pour supprimer un element specifique dans un array
function arrayRemove(array, value) {
	return array.filter(function (element) {
		return element != value;
	});
}
animals = arrayRemove(animals, '🐑'); //[ '🐔', '🐝' ];

console.log('Veuillez utiliser console.log() pour tester le code... Merci !');
