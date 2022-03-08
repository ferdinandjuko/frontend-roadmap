/*
------ TYPAGE ------
*/
//on ne peut pas attribuer une autre type de valeur dans les variables (ex: var_number = "Hello" ou var_string = 15)
let var_number: number; //enier
let var_string: string; //chaine
let var_boolean: boolean; //boolean
let var_array1: string[];

//note: si vous definiser var_number = 10, typescript va faire un auto typage de var_number: number (idem pour var_string, var_boolean, ...)

//on peut egalement attribuer un type mixte a une variable en utilisant '|'
let mixte: number | string;

//typage et definition
let var_array2: (string | boolean)[] = ['Rakoto', true];
var_array2.unshift(false);
var_array2.push('Rasoa');
console.log(var_array2); //[ false, 'Rakoto', true, 'Rasoa' ]
 