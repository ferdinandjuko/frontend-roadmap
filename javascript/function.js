/*
BANK TRANSACTION
*/

class Account {
	constructor(owner, accountType, connexion) {
		this.owner = owner;
		this.accountType = accountType;
		this.connexion = connexion;
	}

	//function|methode (+notation)
	sendWelcomeMessage = user => {
		if (this.connexion === true && this.owner === user) {
			console.log('Bienvenue ' + user + ' !');
		} else {
			console.log('Erreur de connexion !');
		}
	};
}

let my_account = new Account('Rakoto', 'Normal', true);
my_account.sendWelcomeMessage('Rakoto');

// ================================================================

/*
NAME FORMAT
*/

let firstName = 'rakotonirina';
let lastName = 'raja';

autoFormatName = (firstName, lastName) => {
	firstName = firstName.toUpperCase();
	lastName = lastName[0].toUpperCase() + lastName.substr(1);
	return firstName + ' ' + lastName;
};

console.log(autoFormatName(firstName, lastName));
