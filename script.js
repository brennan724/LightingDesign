/* script.js
 * Javascript for Lighting Design math page
 * Brennan Kuo
 * Jordan Sybesma
 * For Carlhacks 2017
 */

var diameter;
var height;
var multFactor;
var lightFactors = {
					"ETC-S4-E-5deg": 0.12,
					"ETC-S4-E-10deg": 0.18,
					"ETC-S4-E-14deg": 0.26,
					"ETC-S4-E-19deg": 0.32,
					"ETC-S4-E-26deg": 0.46,
					"ETC-S4-E-36deg": 0.65,
					"ETC-S4-E-50deg": 0.93,
					"ETC-S4-E-70deg": 1.40,
					"ETC-S4-E-90deg": 1.88,
					"ETC-S4-PARs-VNSP": 0.26,
					"ETC-S4-PARs-NSP": 0.33,
					"ETC-S4-PARs-MFL": [0.37, 0.61],
					"ETC-S4-PARs-WFL": [0.53, 0.95],
					"ETC-S4-PARs-VWFL": 1.10,
					"ETC-S4-PARs-PARNel": [0.46, 0.87],
					"Altman-Axial-4.5x6.5": 1.03,
					"Altman-Axial-6x9": 0.68,
					"Altman-Axial-6x12": 0.48,
					"Altman-Axial-6x16": 0.34,
					"Altman-Axial-6x22": 0.18,
					"Altman-Fresnels-#65Q6": [0.28, 1.40],
					"Altman-Fresnels-#75_8": [0.32, 0.91],
					"Altman-PAR64-1000w-VNSP": [0.17, 0.43],
					"Altman-PAR64-1000w-NSP": [0.25, 0.46],
					"Altman-PAR64-1000w-MFL": [0.37, 0.81],
					"Altman-PAR64-1000w-WFL": [0.83, 1.43],
					"ETC-D40-Lustr": 0.301
					}

function main () {
	// document.getElementById("diameter").onchange = function (event) {
	document.getElementById("diameter").onchange = function (event) {
		diameter = event.target.value;
		updateHeight ();
	}
	document.getElementById("height").onchange = function (event) {
		height = event.target.value;
		updateDiameter ();
	}
	document.getElementById("lights").onchange = function (event) {
		 console.log (event.target.value);
	}
}

onload = main;