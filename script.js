const body = document.getElementById("gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const css = document.querySelector(".h3");
const style = getComputedStyle(body).backgroundImage;
const button = document.querySelector(".button");


const backgroundGen = () => {body.style.background = `linear-gradient(to right,
													 ${color1.value}, ${color2.value})`;
							css.textContent = body.style.background;
	}

const printBackground = () => {css.textContent = style};


const randomNum = () => {
	const one = Math.floor((Math.random() * 300) + 10);
	const two = Math.floor((Math.random() * 300) + 10);
	const three = Math.floor((Math.random() * 300) + 10);
	const four = Math.floor((Math.random() * 300) + 10);
	const five = Math.floor((Math.random() * 300) + 10);
	const six = Math.floor((Math.random() * 300) + 10);
	body.style.background = `linear-gradient(to right, rgb(${one}, ${two}, ${three}), rgb(${four}, ${five}, ${six}))`;
	css.textContent = body.style.background;
}

	
body.addEventListener('input', backgroundGen);

button.addEventListener("click", randomNum);

window.onload = printBackground();

