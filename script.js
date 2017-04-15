/* script.js
 * Javascript for Lighting Design math page
 * Brennan Kuo
 * Jordan Sybesma
 * For Carlhacks 2017
 */

var diameter;
var height;
var multFactor;

function main () {
	document.getElementById("diameter").onchange = function (event) {
		diameter = event.target.value;
	}
	document.getElementById("height").onchange = function (event) {
		height = event.target.value;
	}
}

onload = main;