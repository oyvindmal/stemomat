$(document).ready( function () {
	var random = Math.floor((Math.random() * 2) + 1);
	var desicion = "";
	if(random === 1) {
		desicion = "FOR";
	}

	else {
		desicion = "MOT";
	}
	$("#result").html(desicion);
});
