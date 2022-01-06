/** SELECTORS **/
/** LISTENER **/
/** CLICK **/
/** INNERHTML **/
/** INJECT class | style **/

//cible box + buttons
const box = document.querySelector('.box');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const rep = document.getElementById('rep');

// console.log(box, btn1, btn2, rep);

//note: il est preferable d'utiliser la methode getElementById pour cibler un ID au lieu de querySelector (legere diff en terme de performance)

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

//selection multiple
const boxes = document.querySelectorAll('.box--mini');
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

boxes.forEach(box => {
	//gen color
	let colorRandom = colorList[Math.floor(Math.random() * 8)];
	//pour chaque box, fait ceci ... (on a 3 iterations)
	box.addEventListener('click', () => {
		box.style.backgroundColor = colorRandom;
	});
});

//=====================================================
/** LOAD **/

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
			<p> Page entierement chargEe !</p>
		</div>
	`;

	console.log('page loaded !');
});
