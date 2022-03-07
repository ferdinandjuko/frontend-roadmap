const myString = 'Javascript est un langage orientE objet !';

/*
-----------------------
---- String|Number ----
-----------------------
*/

//*** typeof -> trouver le type d'une valeur/variable
typeof '42'; //string
typeof 'rakoto'; //string
typeof 25; //number

//*** isNAN -> tester si une valeur/variable n'est pas un nombre
isNaN(myString); //true
isNaN(1); //false
!isNaN(78); //true

//*** eval -> evaluer une expression/variable
let expr = 1 + 2;
eval(expr); //3
eval('1' + 2); //12

/*
-----------------------------
---- String|array (only) ----
-----------------------------
*/

//*** length -> retourne la longueur d'une chaine/tableau
let array = [0, 55, 47];
array.length; //3
myString.length; //41
//note: <array/var>.length - 1 -> pour acceder au dernier valeur

//*** indexOf -> retourne l'index de l'element en argument
array.indexOf(55); //1
myString.indexOf('Javascript'); //0
//note: indexOf retoure -1 si l'element n'existe pas

//*** slice -> recuperer l'element d'une chaine/tableau a partir du marge de l'index en argument [marge(min,max) = index, index + 2]
array.slice(1, 3); //[ 55, 47 ]
myString.slice(0, 10); //Javascript

//*** split -> decomposer une chaine a partir d'une valeur en argument
myString.split(' '); //[ 'Javascript', 'est', 'un', 'langage', 'orientE', 'objet', '!' ]

//*** replace -> remplacer un element d'une chaine par un autre passE en argument
myString.replace('Javascript', 'Python'); //Python est un langage orientE objet !

//*** toLowerCase/toUpperCase -> une chaine en Minuscule/Majuscule
myString.toLowerCase(); //javascript est un langage oriente objet !
myString.toUpperCase(); //JAVASCRIPT EST UN LANGAGE ORIENTE OBJET !

/*
------------------------
---- Numbers (only) ----
------------------------
*/

let myString2 = '3 chats';

//***parseInt|parseFloat -> conversion d'une chaine en nombre | extraire une chiffre dans une chaine
parseInt('77.2'); //77
parseInt(myString2); //3 (a condition que le nombre est au debut de la chaine)
parseFloat('77.2'); //77.2

//***math.round -> arrondissement automatique
Math.round(13.8); //14
Math.round(13.4); //13

//***math.floor -> arrondir au plus bas (floor = sol)
Math.floor(13.5); //13
Math.floor(13.9); //13

//***math.ceil -> arrondir au plus haut (ceil = ciel)
Math.ceil(13.5); //14
Math.ceil(13.1); //14

//***math.pow -> puissance d'un nombre (entier, puissance)
Math.pow(2, 3); //2 puissance 3 = 8

//***math.sqrt -> racine carree d'un nombre
Math.sqrt(16); //racine carre de 16 = 4

//*** fonctions pour generer un nombre aleatoire entre 2 intervales
randInt = (min, max) => {
	return Math.round(Math.random() * max + min);
};
randFloat = (min, max, after) => {
	let randCore = Math.random() * max + min;
	return randCore.toFixed(after);
};

/*
----------------------
---- Array (only) ----
----------------------
*/

let emojis = ['😏', '😎', '😘'];
let fruits = ['🍓', '🍐', '🍇'];
let animals = ['🐔', '🐑', '🐝'];
let cars = ['ford', 'peugeot', 'ferrari', 'bmw', 'audi', 'mercedes'];
let mixtes = ['Rakoto', 24, false, [0, 8], { adresse: 'Tana' }];

//*** acceder aux valeurs
cars[0]; //ford
cars[4][1]; //'u' -> a(u)di
mixtes[3][1]; //8
mixtes[4].adresse; //Tana

//*** length -> longeur du tableau (compteur)
let totalFruits = fruits.length; //3

//*** push -> ajout des elements a la queue
cars.push('citroen'); //['ford', 'peugeot', 'ferrari', 'bmw', 'audi', 'mercedes', 'citroen']

//*** unshift -> ajout des elements a la tete
cars.unshift('citroen'); //['citroen', 'ford', 'peugeot', 'ferrari', 'bmw', 'audi', 'mercedes']

//*** shift -> suppression des elements a la tete
fruits.shift(); //['🍐', '🍇']

//*** shift -> suppression des elements a la queue
fruits.pop(); //['🍓', '🍐']

//*** concat -> fusionner des tableaux (sans spride operateur)
emoji.concat(fruits); //[ '😏', '😎', '😘', '🍓', '🍐', '🍇' ]

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
animals = arrayRemove(animals, '🐑');
console.log(animals); //[ '🐔', '🐝' ];
