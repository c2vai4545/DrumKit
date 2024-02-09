/* archivo JavaScript para index.html */
var numeroBotones = document.querySelectorAll(".drum").length; //obtengo el número de botones en la página
var audioW = new Audio("./sounds/kick-bass.mp3");
var audioA = new Audio("./sounds/tom-1.mp3")
var audioS = new Audio("./sounds/tom-2.mp3");
var audioD = new Audio("./sounds/tom-4.mp3");
var audioJ = new Audio("./sounds/snare.mp3");
var audioK = new Audio("./sounds/tom-3.mp3");
var audioL = new Audio("./sounds/crash.mp3");
// var botonW = document.querySelector(".w.drum");
// var botonA = document.querySelector(".a.drum");
// var botonS = document.querySelector(".s.drum");
// var botonD = document.querySelector(".d.drum");
// var botonJ = document.querySelector(".j.drum");
// var botonK = document.querySelector(".k.drum");
// var botonL = document.querySelector(".l.drum");

for (var i = 0;  i < numeroBotones; i++) {
    //agrego un listener en cada boton
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        
            switch (buttonInnerHTML) {
                case "w":
                    audioW.play();
                    break;
                case "a":
                    audioA.play();
                    break;
                case "s":
                    audioS.play();
                    break;
                case "d":
                    audioD.play();
                    break;
                case "j":
                    audioJ.play();
                    break;
                case "k":
                    audioK.play();
                    break;
                case "l":
                    audioL.play();
                    break;
                default:
                    console.log(buttonInnerHTML);
                    break;
            }
    });
}
