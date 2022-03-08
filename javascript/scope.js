{
	//---PARENT1
	var global = 'everywhere !'; //cette variable est accessible partout (global)

	{
		//--ENFANT1
		let local = 'alone !';
		console.log(global); //success
		console.log(local); //success
	}

	console.log(global); //success
	console.log(local); //erreur
}

{
	//---PARENT2
	let local = 'alone !'; //ceci est accessible dans enfant2 puisqu'elle est dans parent2
	console.log(global); //sucess
	{
		//--ENFANT2
		console.log(global); //sucess
		console.log(local); //sucess
	}
}
