//*** typeof -> trouver le type d'une valeur/variable
typeof '42'; //string
typeof 'rakoto'; //string
typeof 25; //number

//*** isNAN -> tester si une valeur/variable n'est pas un nombre
isNaN('hello world !'); //true
isNaN(1); //false
!isNaN(78); //true

//*** eval -> evaluer une expression/variable
let expr = 1 + 2;
eval(expr); //3
eval('1' + 2); //12