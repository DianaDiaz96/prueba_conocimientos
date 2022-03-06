var cuadro = document.getElementById("recuadro");
var lienzo = cuadro.getContext("2d");

function Dibujar()
{
    lienzo.beginPath();
    lienzo.strokeStyle = "grey";
    lienzo.moveTo(0, 0);
    lienzo.lineTo(250, 250);
    lienzo.stroke();
    lienzo.closePath();
}