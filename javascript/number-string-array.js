const myString = 'Javascript est un langage orientE objet !';

/*
-----------------------
---- String|Number ----
-----------------------
*/

//*** typeof -> trouver le type d'une valeur/variable
console.log(typeof '42'); //string
console.log(typeof 'rakoto'); //string
console.log(typeof 25); //number

//*** isNAN -> tester si une valeur/variable n'est pas un nombre
console.log(isNaN(myString)); //true
console.log(isNaN(1)); //false
console.log(!isNaN(78)); //true

//*** eval -> evaluer une expression/variable
let expr = 1 + 2;
console.log(eval(expr)); //3
console.log(eval('1' + 2)); //12

/*
-----------------------------
---- String|array (only) ----
-----------------------------
*/

//*** length -> retourne la longueur d'une chaine/tableau
let array = [0, 55, 47];
console.log(array.length); //3
console.log(myString.length); //41
//note: <array/var>.length - 1 -> pour acceder au dernier valeur

//*** indexOf -> retourne l'index de l'element en argument
console.log(array.indexOf(55)); //1
console.log(myString.indexOf('Javascript')); //0
//note: indexOf retoure -1 si l'element n'existe pas

//*** slice -> recuperer l'element d'une chaine/tableau a partir du marge de l'index en argument [marge(min,max) = index, index + 2]
console.log(array.slice(1, 3)); //[ 55, 47 ]
console.log(myString.slice(0, 10)); //Javascript

//*** split -> decomposer une chaine a partir d'une valeur en argument
console.log(myString.split(' ')); //[ 'Javascript', 'est', 'un', 'langage', 'orientE', 'objet', '!' ]

//*** replace -> remplacer un element d'une chaine par un autre passE en argument
console.log(myString.replace('Javascript', 'Python')); //Python est un langage orientE objet !

//*** toLowerCase/toUpperCase -> une chaine en Minuscule/Majuscule
console.log(myString.toLowerCase()); //javascript est un langage oriente objet !
console.log(myString.toUpperCase()); //JAVASCRIPT EST UN LANGAGE ORIENTE OBJET !

/*
------------------------
---- Numbers (only) ----
------------------------
*/

let myString2 = '3 chats';

//***parseInt|parseFloat -> conversion d'une chaine en nombre | extraire une chiffre dans une chaine
console.log(parseInt('77.2')); //77
console.log(parseInt(myString2)); //3 (a condition que le nombre est au debut de la chaine)
console.log(parseFloat('77.2')); //77.2

//***math.round -> arrondissement automatique
console.log(Math.round(13.8)); //14
console.log(Math.round(13.4)); //13

//***math.floor -> arrondir au plus bas (floor = sol)
console.log(Math.floor(13.5)); //13
console.log(Math.floor(13.9)); //13

//***math.ceil -> arrondir au plus haut (ceil = ciel)
console.log(Math.ceil(13.5)); //14
console.log(Math.ceil(13.1)); //14

//***math.pow -> puissance d'un nombre (entier, puissance)
console.log(Math.pow(2, 3)); //2 puissance 3 = 8

//***math.sqrt -> racine carree d'un nombre
console.log(Math.sqrt(16)); //racine carre de 16 = 4

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

//*** concat -> fusionner des tableaux (sans spride operateur)
console.log(emoji.concat(fruits)); //[ '😏', '😎', '😘', '🍓', '🍐', '🍇' ]

//*** spride operateur (...) -> fusionner des tableaux
console.log([...animals, ...fruits]); //[ '🐔', '🐑', '🐝', '🍓', '🍐', '🍇' ]

//*** join -> casser un tableau en chaine et le separer par une valeur passEe en argument
console.log(animals);