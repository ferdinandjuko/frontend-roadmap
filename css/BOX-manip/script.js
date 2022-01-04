//nav animation scroll
const nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
	if (window.scrollY >= 120) {
		nav.style.marginTop = '0px';
	} else {
		nav.style.marginTop = '-100px';
	}
});

//general var|function
const sleep = ms => {
	const date = Date.now();
	let currentDate = null;

	do {
		currentDate = Date.now();
	} while (currentDate - date < ms);
};

const marginSpace = '20px';

//box1
const box1 = document.getElementById('box1');
const btn1Box1 = document.getElementById('box1--btn1');
const btn0Box1 = document.getElementById('box1--btn0');
btn0Box1.addEventListener('click', () => {
	box1.classList.remove('box1');
	console.log('box1--btn0[clicked]');
});
btn1Box1.addEventListener('click', () => {
	box1.classList.add('box1');
	console.log('box1--btn1[clicked]');
});

//box2
const box2 = document.getElementById('box2');
const btn1Box2 = document.getElementById('box2--btn1');
const btn0Box2 = document.getElementById('box2--btn0');
btn0Box2.addEventListener('click', () => {
	box2.classList.remove('box2');
	box2.style.marginBottom = '460px';
	console.log('box2--btn0[clicked]');
});
btn1Box2.addEventListener('click', () => {
	box2.classList.add('box2');
	box2.style.marginBottom = marginSpace;
	console.log('box2--btn1[clicked]');
});

//box3
const box3 = document.getElementById('box3');
const btn1Box3 = document.getElementById('box3--btn1');
const btn0Box3 = document.getElementById('box3--btn0');
btn0Box3.addEventListener('click', () => {
	box3.classList.remove('box3');
	console.log('box3--btn0[clicked]');
});
btn1Box3.addEventListener('click', () => {
	box3.classList.add('box3');
	console.log('box3--btn1[clicked]');
});

//box4
const box4 = document.getElementById('box4');
const btn1Box4 = document.getElementById('box4--btn1');
const btn0Box4 = document.getElementById('box4--btn0');
btn0Box4.addEventListener('click', () => {
	box4.style.marginTop = '20px';
	box4.classList.remove('box4');
	console.log('box4--btn0[clicked]');
});
btn1Box4.addEventListener('click', () => {
	box4.classList.add('box4');
	console.log('box4--btn1[clicked]');
});

//box5
const box5p = document.querySelector('.box5 p');
const btn1Box5 = document.getElementById('box5--btn1');
const btn0Box5 = document.getElementById('box5--btn0');
btn0Box5.addEventListener('click', () => {
	box5p.style.visibility = 'visible';
	console.log('box5--btn0[clicked]');
});
btn1Box5.addEventListener('click', () => {
	box5p.style.visibility = 'hidden';
	console.log('box5--btn1[clicked]');
});

//globing0
const globing0 = document.querySelectorAll(
	'.box7, .box8, .box9, .box10, .box11',
);
const btn1globing0 = document.getElementById('globing0--btn1');
const btn0globing0 = document.getElementById('globing0--btn0');
let countBox0 = 7;

globing0.forEach(box => {
	btn0globing0.addEventListener('click', () => {
		box.classList.remove('box' + countBox0);
		box.style.position = 'relative';
		box.style.top = '75%';
		countBox0++;
		if (countBox0 === 12) {
			countBox0 = 7;
		}
		console.log('globing0--btn0[clicked]');
	});
});

globing0.forEach(box => {
	btn1globing0.addEventListener('click', () => {
		box.classList.add('box' + countBox0);
		countBox0++;
		if (countBox0 === 12) {
			countBox0 = 7;
		}
		console.log('globing0--btn1[clicked]');
	});
});

//globing1
const globing1 = document.querySelectorAll('.box12, .box13, .box14');
const btn1globing1 = document.getElementById('globing1--btn1');
const btn0globing1 = document.getElementById('globing1--btn0');
let countBox1 = 12;

globing1.forEach(box => {
	btn0globing1.addEventListener('click', () => {
		box.classList.remove('box' + countBox1);
		btn1globing1.style.top = '56.7%';
		btn0globing1.style.top = '56.7%';
		countBox1++;
		if (countBox1 === 15) {
			countBox1 = 12;
		}
		console.log('globing1--btn0[clicked]');
	});
});

globing1.forEach(box => {
	btn1globing1.addEventListener('click', () => {
		box.classList.add('box' + countBox1);
		btn1globing1.style.top = '83%';
		btn0globing1.style.top = '83%';
		countBox1++;
		if (countBox1 === 15) {
			countBox1 = 12;
		}
		console.log('globing1--btn1[clicked]');
	});
});