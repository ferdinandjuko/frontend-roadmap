class BankAccount {
	constructor(owner, balance) {
		this.owner   = owner;
		this.balance = balance;
	}

	showBalance() {
		console.log('Solde: ' + this.balance + ' EUR');
	}

	deposit(amount) {
		console.log('Dépôt de ' + amount + ' EUR');
		this.balance += amount;
		this.showBalance();
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log('Retrait refusé !');
		} else {
			console.log('Retrait de ' + amount + ' EUR');
			this.balance -= amount;
			this.showBalance();
		}
	}
}

let my_account = new BankAccount('Rakoto', 100);
my_account.showBalance(); //100 EUR
my_account.deposit(100); //200 EUR
my_account.withdraw(25); //175 EUR

