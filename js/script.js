$(document).ready(function () {
    var random = Math.floor(Math.random() * 100);
    var desicion = "";
    var color = "";
    if((random  >= 0) && (random <= 39)) {
    desicion = "FOR";
    color = "green";
    }
    else if((random >= 40) && (random <=79)) {
    desicion = "MOT";
    color = "red";
    }
    else if((random >= 80) && (random <=95)) {
    desicion = "AVHOLDENDE";
    color = "yellow";
    }
    else {
    desicion = "IKKE, men gir ordstyrer Inge en klem";
    color = "hotpink";
    }
    $("#result").html(desicion).css( "color", color ); 

    $.getJSON("/js/data.json", function (data) {
        console.log(data);
    })


});

