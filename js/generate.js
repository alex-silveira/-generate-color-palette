$(function () {
	
	let letters = ['a','b',"c","d","e","f"];
	let numbers = [0,1,2,3,4,5,6,7,8,9];
	let randomLetters;
	let randomNumbers;
	let hx = [];
	let colors =  [];

	$("body").keyup(function(e) {
		// Check key press 37 = left, 38 = top, 39 = right, 40 = bottom
		if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
			// Generate colors key up
			generatePalettes();
		}
	});
	
	function generateColors(palette){
		//12 colors
		for(let i = 0; i <= 12; i++) {
			//hexadecimal color code
			for (let j = 0; j <= 3; j++) {
			//Generate random hexadecimal letters
			randomLetters = Math.floor(Math.random() * letters.length);
			//Generate random hexadecimal numbers
			randomNumbers = Math.floor(Math.random() * numbers.length).toString();

			if(palette == "palette01"){
			//Add Hexadecimal color code in array hx palette 1
			hx[j] = numbers[randomNumbers] + letters[randomLetters];
			}
			if(palette == "palette02"){
			//Add Hexadecimal color code in array hx palette 2
			hx[j] = letters[randomLetters] + numbers[randomNumbers];
			}
			//Add colors in array colors
			colors[i] =  "#" + hx[0] + hx[1] + hx[2];
			}
		}
		// Generate different colors in the collumns
		for(let i = 0; i < colors.length; i++) {
			$("#"+palette+" .col-sm:nth-child("+i+")").css("background-color", colors[i]);
			$("#"+palette+" .col-sm:nth-child("+i+")").text(colors[i]);
		}
	}
	
	function generatePalettes(){
		//Generate palette 1
		generateColors("palette01");
		//Generate palette 2
		generateColors("palette02");
	}
	//Generate load page
	generatePalettes();

});