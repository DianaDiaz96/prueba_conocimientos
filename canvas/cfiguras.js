var lienzo = document.getElementById("cuadro").getContext("2d");


function draw(cline, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = cline;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};
