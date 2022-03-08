{
	//---PARENT1
	var global = 'everywhere !'; //cette variable est accessible partout (global)

	{
		//--CHILD1
		let local = 'alone !';
		console.log(global); //done
		console.log(local); //done
	}

	console.log(global); //done
	console.log(local); //error
}

{
	//---PARENT2
	let local = 'alone !'; //ceci est accessible dans enfant2 puisqu'elle est dans parent2
	console.log(global); //done
	{
		//--CHILD2
		console.log(global); //done
		console.log(local); //done
	}
}
