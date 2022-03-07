//JSON - example 1
let user = {
	pseudo: 'Rakoto',
	age: 25,
	email: 'rakoto@gmail.com',
	stacks: ['javascript', 'React', 'MongoDB'],
	admin: true,
};

//JSON - example 2
let users = [
	{
		pseudo: 'Rasoa',
		age: 20,
		email: 'rasoa@protonmail.com',
		stacks: ['Bash', 'AWS', 'Docker'],
		admin: false,
	},
	{
		pseudo: 'Rabe',
		age: 30,
		email: 'rabe@yahoo.fr',
		stacks: ['PHP', 'Symfony', 'MySQL'],
		admin: false,
	},
	{
		pseudo: 'Randria',
		age: 27,
		email: 'randria@gmail.com',
		stacks: ['Flutter', 'Dart', 'Java'],
		admin: false,
	},
];

//output
console.log(user.pseudo); //Rakoto
console.log(user.stacks[0]); //javascript
console.log(users[1].pseudo); //Rabe
console.log(users[2].email); //randria@gmail.com

// ================================================================

//Exemple de class pour les comptes bancaires
class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}

	//solde
	showBalance = () => {
		console.log('Solde: ' + this.balance + ' ARIARY \n');
	};

	//depot
	deposit = amount => {
		console.log('Dépôt de ' + amount + ' ARIARY \n');
		this.balance += amount;
		this.showBalance();
	};

	//retrait
	withdraw = amount => {
		if (amount > this.balance) {
			console.log('Retrait refusé !');
		} else {
			console.log('Retrait de ' + amount + ' ARIARY \n');
			this.balance -= amount;
			this.showBalance();
		}
	};
}

let my_account = new BankAccount('Rakoto', 100);
my_account.showBalance(); //100 ARIARY
my_account.deposit(100); //200 ARIARY
my_account.withdraw(25); //175 ARIARY
