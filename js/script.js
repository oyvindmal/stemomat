$(document).ready( function () {
	var random = Math.floor(Math.random() * 100);
	var desicion = "";
	if((random  >= 0) && (random <= 44)) {
		desicion = "FOR";
	}
	else if((random >= 45) && (random <=90)) {
		desicion = "MOT";
	}
	else if(random >= 91) {
		desicion = "AVHOLDENDE";
	}
	$("#result").html(desicion);
});

