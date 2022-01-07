//BOM = Browser Object Model - interaction au niveau navigateur (fenetre, location, frames, history, XMLHttprequest)

//Screen (size)
const innerHW = document.getElementById('innerHW');

window.addEventListener('resize', () => {
	let height = window.innerHeight;
	let width = window.innerWidth;
	innerHW.innerHTML = `
    <h4> ${width}x${height} </h4>
  `;
});

//Screen (scroll)
const scrollXY = document.getElementById('scrollXY');

window.addEventListener('scroll', () => {
	let scrollY = window.scrollY;
	let scrollX = window.screenX;
	scrollXY.innerHTML = `
  <h4> scrollY:<br>${scrollY} scrollY:<br>${scrollX} </h4>
  `;
});

//Popup (open, close, confirm, alert, prompt)
/*
NOTE: une partie de script de la section popup (window.close, window.confirm, window.alert, window.prompt) se trouve dans "./popup.html"
*/

const popupBtn = document.getElementById('popup');

popupBtn.addEventListener('click', () => {
	/*
  synopsis: 
    arg1: lien a ouvrir 
    arg2: nom de la nouvelle fenetre
    arg3: height|width de la nouvelle fenetre
  */

	window.open(
		'./popup.html',
		'Formulaire - popup',
		'height=500px, width=500px',
	);
});
