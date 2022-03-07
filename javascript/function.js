//Exemple de fonction qui transforme le le nom et le premier lettre du prenom en Majuscule

let firstName = 'RajA';
let lastName = 'RakOTOnirinA';

nameFormat = (firstName, lastName) => {
	firstName =
		firstName[0].toUpperCase() +
		firstName.substr(1, firstName.length).toLowerCase();
	lastName = lastName.toUpperCase();
	return lastName + ' ' + firstName;
};

console.log(nameFormat(firstName, lastName)); //RAKOTONIRINA Raja
