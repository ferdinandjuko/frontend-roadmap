/*
------ TYPAGE ------
*/
//on ne peut pas attribuer une autre type de valeur dans les variables (ex: var_number = "Hello" ou var_string = 15)
var var_number; //enier
var var_string; //chaine
var var_boolean; //boolean
var var_array1;
//note: si vous definiser var_number = 10, typescript va faire un auto typage de var_number: number (idem pour var_string, var_boolean, ...)
//on peut egalement attribuer un type mixte a une variable en utilisant UNION '|'
var mixte;
//typage et definition
var var_array2 = ['Rakoto', true];
var_array2.unshift(false);
var_array2.push('Rasoa');
console.log(var_array2); //[ false, 'Rakoto', true, 'Rasoa' ]
