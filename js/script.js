$(document).ready( function () {
	var random = Math.floor(Math.random() * 100);
	var desicion = "";
	if((random  >= 0) && (random <= 39)) {
		desicion = "FOR";
	}
	else if((random >= 40) && (random <=79)) {
		desicion = "MOT";
	}
	else if((random >= 80) && (random <=95)) {
		desicion = "AVHOLDENDE";
	}
	else {
		desicion = "IKKE, men gir ordstyrer Inge en klem";
	}
	$("#result").html(desicion);
});

