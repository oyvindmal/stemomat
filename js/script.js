$(document).keypress(function () {
    doMagic();

});

$("#btnStart").click(function () {
  doMagic();
})

function doMagic()
{
  var random = Math.floor(Math.random() * 100);
  var desicion = "";
  var color = "";
  var divclass = "";

  if((random  >= 0) && (random <= 39)) {
  desicion = "FOR";
  color = "green";
  divclass = "animated flash";
  }
  else if((random >= 40) && (random <=79)) {
  desicion = "MOT";
  color = "red";
  divclass = "animated shake";
  }
  else if((random >= 80) && (random <=95)) {
  desicion = "AVHOLDENDE";
  color = "yellow";
  divclass = "";
  }
  else {
  desicion = "IKKE, men gir ordstyrer Inge en klem";
  color = "hotpink";
  divclass = "font-effect-neon animated flip";
  }
  $("#result").html(desicion).css( "color", color ).attr("class", divclass);


}
