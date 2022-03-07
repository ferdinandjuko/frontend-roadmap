let myString = '3 chats';

//***parseInt|parseFloat -> conversion d'une chaine en nombre | extraire une chiffre dans une chaine
parseInt('77.2'); //77
parseInt(myString); //3 (a condition que le nombre est au debut de la chaine)
parseFloat('77.2'); //77.2

//***math.round -> arrondissement normal
Math.round(13.8); //14
Math.round(13.4); //13

//***math.floor -> arrondir inferieur (floor = sol)
Math.floor(13.5); //13
Math.floor(13.9); //13

//***math.ceil -> arrondir superieur (ceil = ciel)
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
