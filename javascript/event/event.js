/*
			   ##################################
			   #### addEventListener (debut) ####
			   ##################################
         Cette fonction nous permet d'écouter tous types d'événements
            SYNTAX: addEventListener(<event>, <callback>)
              <event> -> le type d'evenement
              <callback> -> la fonction a appeler des que l'evenement est executE.
			   */

//=========== onclick + preventDefault ===========
const elt = document.getElementById('my-link');
elt.addEventListener('click', function (event) {
	elt.innerHTML = "C'est cliquE !";
	event.preventDefault(); // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
	event.stopPropagation(); // Vous pouvez ainsi empêcher que d'autres éléments reçoivent l'événement.
});

//=========== battle evenement ===========
const parent = document.getElementById('parent');
const parentCount = document.getElementById('parent-count');
const child = document.getElementById('child');
const childCount = document.getElementById('child-count');
let parentValue = 0;
let childValue = 0;

// console.log(parent, parentCount);
// console.log(child, childCount);

parent.addEventListener('click', function () {
	parentCount.innerHTML = ++parentValue;
});

child.addEventListener('click', function (event) {
	event.stopPropagation();
	childCount.innerHTML = ++childValue;
});

//=========== event target value ===========
/*
      note: 
        - input (event type): fonctionne comme change déclenché dès que le contenu du champ est modifié
      */

const nameElt = document.getElementById('name');
const resultName = document.getElementById('res-name');
// console.log(resultName);
nameElt.addEventListener('input', function (event) {
	let result = (innerText = event.target.value);
	console.log(result);
});

/*
			   ################################
			   #### addEventListener (end) ####
			   ################################
			   */
