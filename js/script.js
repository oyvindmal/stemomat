$(document).ready(function () {
    var random = Math.floor(Math.random() * 100);
    var desicion = "";
    var color = "";
    var class = "";
    if((random  >= 0) && (random <= 39)) {
    desicion = "FOR";
    color = "green";
    class = "";
    }
    else if((random >= 40) && (random <=79)) {
    desicion = "MOT";
    color = "red";
    class = "";
    }
    else if((random >= 80) && (random <=95)) {
    desicion = "AVHOLDENDE";
    color = "yellow";
    class = "";
    }
    else {
    desicion = "IKKE, men gir ordstyrer Inge en klem";
    color = "hotpink";
    class = "font-effect-neon"
    }
    $("#result").html(desicion).css( "color", color ).attr("class", class);

    $.getJSON("/js/data.json", function (data) {
        console.log(data);
    })
});
