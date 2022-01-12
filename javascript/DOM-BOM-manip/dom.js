//DOM = Document Object Model - interaction au niveau document HTML (<html> ... </html>)

/** SELECTORS **/
/** LISTENER **/
/** CLICK **/
/** INNERHTML **/
/** INJECT class | style **/
//TODO: all verified

// //cible box + buttons
const box = document.querySelector('.box');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const rep = document.getElementById('rep');

// note: il est preferable d'utiliser la methode getElementById pour cibler un ID au lieu de querySelector (legere diff en terme de performance)

/*
supposons que btn-1 est la bonne reponse et btn-2 la mauvaise reponse
*/
btn1.addEventListener('click', () => {
	box.classList.add('box--true'); //injecter la class box--true pour la box
	rep.style.fontSize = '15px'; //modifier le style (fontsize) de rep
	rep.innerHTML = "Bravo, C'est la bonne reponse !"; //generer un paragraph
});

btn2.addEventListener('click', () => {
	box.classList.add('box--false');
	rep.style.fontSize = '15px';
	rep.innerHTML = 'Oups, mauvaise reponse !';
});

//=====================================================
/**  MOUSE **/
//TODO: all verified

const cursor = document.getElementById('cursor');

//le parametre e (event) permet de tracer l'evenement (trace les donnees de l'evenement)
window.addEventListener('mousemove', e => {
	//permet de suivre automatiquement le pointeur
	cursor.style.left = e.pageX + 'px';
	cursor.style.top = e.pageY + 'px';
});

box.addEventListener('mouseenter', () => {
	//quand on entre dans l'element
	box.classList.add('box--hover');
});

box.addEventListener('mouseout', () => {
	//quand on sort de l'element
	box.classList.remove('box--hover');
});

window.addEventListener('click', () => {
	//permet d'agrandir le curseur lors d'un click
	cursor.style.transform = 'scale(2) translate(-25%, -25%)';
});

//=====================================================
/** KEYPRESS **/
/** AUDIO **/
//TODO: all verified

const keyBox = document.querySelector('.key-box');
const keyPress = document.getElementById('key-press');

const toNumber = string => {
	return +string; //cast string to number
};

const ring = key => {
	//convert key entry
	let entry = toNumber(key);
	//instance audio
	const audio = new Audio();
	audio.src = './src/ring.ogg';
	//jouer l'audio si l'entrer est un nombre pair
	if (entry % 2 === 0) {
		audio.play();
	}
};

document.addEventListener('keypress', e => {
	//quand on appuye sur une touche
	keyPress.textContent = e.key; //generer dynamiquement la touche appuyEe dans keyPress
	keyPress.style.color = 'aquamarine';

	ring(e.key);
});

//=====================================================
/** SCROLL **/
//TODO: all verified

const nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
	//afficher|masquer le navbar lors du scroll
	if (window.scrollY >= 140) {
		nav.style.top = 0;
	} else {
		nav.style.top = '-100px';
	}
});

//=====================================================
/** INPUT **/
/** FORM validation **/
/** prevent default **/
//TODO: all verified

const inputText = document.getElementById('pseudo');
const inputOption = document.getElementById('option');
const form = document.querySelector('form');
const output = document.getElementById('output');
let pseudo = '';
let option = 'default';
let checkList = [];

//text
inputText.addEventListener('input', e => {
	pseudo = e.target.value;
});

//option
inputOption.addEventListener('input', e => {
	option = e.target.value;
});

//form validation
form.addEventListener('submit', e => {
	e.preventDefault(); //annuler le comportement par defaut de 'submit' event (recharger la page pour chaque validation)
	//verifier les 3 cases (A, B et C)
	if (!check1.checked && !check2.checked && !check3.checked) {
		alert('Veuillez cochez au moins une case !');
	} else {
		//clean checkList
		checkList = [];
		if (check1.checked) {
			checkList.push('A');
		}
		if (check2.checked) {
			checkList.push('B');
		}
		if (check3.checked) {
			checkList.push('C');
		}
		console.log('valided !');
		//output + inject style
		/*
		innerHTML => inject html tag
		textContent => inject text brut
		*/
		output.innerHTML = `
			<p>Pseudo : ${pseudo}</p>
			<p>Checklist : ${checkList}</p>
			<p>Option : ${option}</p>
		`;
		output.classList.add('output--info');
	}
});

//=====================================================
/** FOREACH **/
//TODO: all verified

//selection multiple
const boxesColored = document.querySelectorAll('.box--colored');
const colorList = [
	'orangered',
	'lightcoral',
	'lightseagreen',
	'orchid',
	'mediumpurple',
	'burlywood',
	'khaki',
	'lime',
];

boxesColored.forEach(box => {
	//gen color
	let colorRandom = colorList[Math.floor(Math.random() * 8)];
	//pour chaque box, fait ceci ... (on a 3 iterations)
	box.addEventListener('click', () => {
		box.style.backgroundColor = colorRandom;
	});
});

//=====================================================
/** LOAD **/
//TODO: all verified

const sectionGen = document.getElementById('generated');

window.addEventListener('load', () => {
	//presets network throttling to 'Slow 3G' to see effect
	//ce type d'evenement declanche le callback lorsque la page est entierement chargEe

	sectionGen.innerHTML = `
		<div class='box'>
			<div class="box--info">
			<span>~ FEATURES ~</span>
		<p>load</p>
			</div>
			<p> Page entierement chargEe ! (ce message n'etait pas affichE si la page est en chargement)</p>
		</div>
	`;

	console.log('page loaded !');
});

//=====================================================
/** BUBBLING **/
/* bonus: counter function */
//TODO: all verified

const priorityBox = document.getElementById('priority-box');
const priorityValue = document.getElementById('priority-value');

//DESCRIPTION: lorsque l'evenement est en mode bubbling (true), sa prioritE est plus elevE que les autres evenements en mode bubbling (false)
//note: echanger la valeur (true<>false) afin de tester leur effet

priorityBox.addEventListener(
	'click',
	() => {
		priorityValue.innerText = 'bubbling false'; //afficher en dernier
	},
	false,
);

priorityBox.addEventListener(
	'click',
	() => {
		priorityValue.innerText = 'bubbling true'; //afficher en premier
	},
	true,
);

//=====================================================
/** PROPAGATION **/
//TODO: all verified

const propag = document.getElementById('propag');
const pValue = document.querySelector('#propag p');

document.getElementById('propag-section').addEventListener('click', () => {
	alert('OUPS ! je suis propagE !');
});

propag.addEventListener('click', e => {
	e.stopPropagation(); //focus sur l'evenement de propag seulement (essayez d'effacer cette ligne et cliquez sur l'element propag pour voir le changement)
	alert('YES ! propagation stopE');
	pValue.innerText = 'Cliquez en dehors de moi et voir ce qui se passe !';
});

/* 
NOTE: il existe une autre methode permetant de supprimer l'evenement qui s'appel "removeEventListener()"
*/

//=====================================================
/** PARENTNODE **/
/** CREATE **/
/** INSERT (BEFORE) **/
/** REMOVE **/
//TODO: dynamiser la valeur de chaque box lors du suppression/ajout

let removeBtn = document.querySelectorAll('#appendArea button'); //boutton suppression box
const addBtn = document.getElementById('addBtn'); //boutton ajout box
const appendArea = document.getElementById('appendArea'); //zone d'ajout/suppression des box
let boxValue = 8; //valeur d'un nouveau box (dynamique)

//-------------- delBox (begin) --------------------
//TODO: verified
//suppresion de chaque box par remove()

/*
Explication: On a creer une fonction pour la suppression de chaque box car a chaque ajout d'un nouveau box, on doit mettre a jour le "NodeList" ciblE par la variable "removeBtn" - la valeur lue dans cette variable va etre parcourue par la boucle forEach et l'ecouteur d'evenement va effectuer la suppression en identifiant le noeud parent (parentNode) du boutton clickE (btn.parentNode)
*/
function delBox() {
	removeBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			let parentBox = btn.parentNode;
			parentBox.remove();
		});
	});
}

delBox(); //l'appelle de la fonction est necessaire pour les box deja presents sinon on ne peut pas les supprimEs...
//-------------- delBox (end) --------------------

//-------------- addBox (begin) --------------------
//TODO: verified
function addBox() {
	//fonction qui creer un box
	let newBox = document.createElement('div'); //generateur de box
	newBox.className = 'box--classic box--space'; //ajouter une class pour chaque nouveau box - afin que ce dernier prend le meme caracteristique que les autres
	newBox.innerHTML = `
	<button>x</button>
	<p>${boxValue++}</p>
	`; //on injecte le boutton de suppression et sa valeur dynamique incrementE
	appendArea.insertBefore(newBox, addBtn); //ajouter la nouvelle element "newBox" avant l'element "addBtn"
}

addBtn.addEventListener('click', () => {
	addBox();
	removeBtn = document.querySelectorAll('#appendArea button'); //MAJ de removeBtn pour chaque ajout de box
	delBox(); //transmettre la nouvelle valeur de removeBtn pour la suppression
});
//-------------- addBox (end) --------------------

//=====================================================
/** SETPROPERTY **/

const setpropBox = document.querySelector("#setprop .box--classic");

setpropBox.addEventListener('mousemove', (e) => {
	setpropBox.style.setProperty("--setTop", e.layerY + "px");
	setpropBox.style.setProperty("--setLeft", e.layerX + "px");
});