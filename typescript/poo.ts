/*
INTERFACE (pour l'objet user) - exemple
=> Une interface TypeScript permet de définir la signature (ou le contrat) d'une classe où même une fonction (Modele & Structure de typage).
*/
interface Users {
	id: number;
	name: string;
	email: string;
	access: boolean;
}

/*
OBJET - exemple
*/
const user1: Users = {
	id: 1,
	name: 'Rakoto',
	email: 'rakoto@gmail.com',
	access: true,
};

/*
CLASS - exemple
*/
class Cars {
	matricule: number;
	model: string;
	color: string;
	key?: boolean; //'?' signifie que ce champ est optionnel lors de l'instanciation

	constructor(matricule: number, model: string, color: string, key?: boolean) {
		this.matricule = matricule;
		this.model = model;
		this.color = color;
		this.key = key;
	}
}

/*
FONCTION - exemple 1
	note: (...): string -> return string type - elle peut egalement retourner 'void'
*/
const welcome = (name: string): string => {
	//le parametre name est obligatoire (sans ?)
	return 'Welcome ' + name + '\n';
};

console.log(welcome('Rakoto')); //Welcome Rakoto

/*
FONCTION - exemple 2
*/
const inscription = (
	pseudo: string,
	password: string | number,
	email: string,
	newsletter?: boolean,
): string => {
	//return string type
	if (pseudo && password) {
		console.log(welcome(pseudo));
		if (email != '' && newsletter) {
			return 'Les newsletters seront envoyEs dans votre adresse mail ' + email;
		}
	} else {
		return 'Veuillez completer les champs (pseudo & password)';
	}
	return 'sucess !';
};

console.log(inscription('Rakoto123', 451354, 'rakoto@hotmail.fr', true)); //Les newsletters seront envoyEs dans votre adresse mail rakoto@hotmail.fr

/*
ENUM & TUPPLE
*/

enum account { //<= ENUM: enumeration des valeurs - ceci permet de transformer un entier en une valeur plus comprehensible
	ADMIN, //vaut 0
	PREMIUM, //vaut 1
	CLASSIC, //vaut 2
}

interface Clients {
	name: string;
	attributes: [number, boolean | string]; //<= TUPPLE: typage des valeurs possible pour un array
	account: number;
}

const client1: Clients = {
	name: 'Rasoa',
	attributes: [88, true],
	account: account.CLASSIC,
};

console.log(client1.account); //2
