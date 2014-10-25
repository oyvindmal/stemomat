$(document).ready(function () {
   
    var random = Math.floor(Math.random() * 100);
    var desicion = "";
    var color = "";
    var divclass = "";
    
    if((random  >= 0) && (random <= 39)) {
    desicion = "FOR";
    color = "green";
    divclass = "";
    }
    else if((random >= 40) && (random <=79)) {
    desicion = "MOT";
    color = "red";
    divclass = "";
    }
    else if((random >= 80) && (random <=95)) {
    desicion = "AVHOLDENDE";
    color = "yellow";
    divclass = "";
    }
    else {
    desicion = "IKKE, men gir ordstyrer Inge en klem";
    color = "hotpink";
    divclass = "font-effect-neon";
    }
    $("#result").html(desicion).css( "color", color ).attr("class", divclass);

    $.getJSON("/js/data.json", function (data) {
        console.log(data);
    })
});
