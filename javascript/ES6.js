//#####################
//######## ES6 ########
//#####################

//##### VARIABLES
//-- CONST: initialisation obligatoire et valeur constante (pour une variable & fonction)
//-- SCOPE(let,var,const): LET n'est accessible que dans le bloc de code qui lui est declarE (variable local), VAR est accessible dans tout les blocs (variable global)
//-- Le HOISTING ne marche qu'avec le VAR, c'est a dire declarer la variable apres son utilisation (n'est pas recommandE)
//-- REGLE: On utilise plus VAR, toujours utiliser CONST et si sa valeur est reassignE plus tard, on le change en LET

//##### OBJET
//-- creation d'un objet
let obj = { name: 'Rakoto' };
//-- modification d'un attibut de l'objet - note: si on defini un objet en const, les modifications de ses attributs seront toujours effectuer
obj.name = 'Rasoa';
//-- modification de l'objet - note: si on defini un objet en const, il est impossible de modifier l'objet
obj = { name: 'Randria', age: 20 };

//##### FONCTION FLECHEE
//-- fonction anonyme (qui n'a pas de nom)
arg => arg * 5;
//-- fonction classic
const myFunction = arg => arg * 5; //note: une fonction est souvent declarEe en const en ES6
myFunction(5); //25
//-- methode d'objet (fly)
const Animals = {
	type: 'Bird',
	fly: function (width, speed) {
		console.log('Voler -> hauteur: ' + width + ' ,vitesse: ' + speed);
	},
};
Animals.fly(15, 20); //Voler -> hauteur: 15 ,vitesse: 20
