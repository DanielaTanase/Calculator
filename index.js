let calculation = '';
let screen = document.querySelector('.js-display');

function calculate(value) {
	calculation += value;
	console.log(calculation);
	displayingScreen();
}

function equal() {
	calculation = eval(calculation);
	console.log(calculation);
	displayingScreen()
}

function displayingScreen() {
	screen.innerHTML = calculation;
}

function clearScreen() {
	calculation = '';
	screen.innerHTML = 0 + calculation;
	console.log(calculation);
}
