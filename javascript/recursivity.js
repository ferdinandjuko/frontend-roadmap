/*
Une fonction récursive est une fonction qui s'appelle elle-même d'une façon ou d'une autre.
*/

//definition des nombres
let numbers = [5, 6, 0, 1, 124, 77, 978, 999, 200, 14];

//sort numbers
sortNumbers = array => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[i] < array[j]) {
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	numbers.push(numbers[0]);
	numbers.shift();
	return array;
};

//fonction qui affiche les elements d'un array en argument
showArray = array => {
	array.forEach(element => {
		console.log(element + ' ');
	});
};

//test
numbers = sortNumbers(numbers);
let lastIndex = numbers.length - 1;
let input = 77; //l'element a rechercher
showArray(numbers);

//La fonction récursive binarySearch effectue une recherche d'un element dans un array
binarySearch = (array, target, start, end) => {
	//base code
	if (start > end) {
		return false;
	}
	//search middle (index)
	let middle = Math.floor((start + end) / 2);

	//output
	if (array[middle] === target) {
		return true;
	}

	//to left
	if (target < array[middle]) {
		end = middle - 1;
		return binarySearch(array, target, start, end);
	} else {
		start = middle + 1;
		return binarySearch(array, target, start, end);
	}
};

console.log(binarySearch(numbers, input, 0, lastIndex));
