/* Definition d'un tableau */
let color = []; //tableau vide
let car = ['ford', 'peugeot', 'ferrari', 'bmw', 'audi']; //tableau avec des elements

/* Acceder a leurs valeurs */
console.log(car[0]);
console.log(car[2]);

/* Comptage d'element */
let totalCar = car.length;
console.log('total car: ' + totalCar);

/* manipulation (ajout, suppression, division) */
//PUSH
color.push('blue', 'red', 'yellow', 'purple'); //ajout des elements
console.log(color[2]); //yellow

//UNSHIFT
car.unshift('bugatti'); //ajout comme premier element du tableau car
console.log(car[0]); //bugatti

//SHIFT
color.shift(); //supprimer le premier element du tableau

//POP
color.pop('purple'); //supprimer le dernier element du tableau
console.log(color[color.length - 1]); //yellow

//SUBSTR
fruit = 'banana';
console.log(fruit.substr(0, 3)); //ban
console.log(fruit[0]); //b
console.log(fruit.length); //6

/* BONUS */
//random [0;X-1] => syntax: Math.random()*X
console.log(Math.floor(Math.random() * 5)); //[0;4]
