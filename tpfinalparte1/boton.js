function botonRectangular(texto, x, y, ancho, alto) {
  if (superficie(mouseX, mouseY, x, y, ancho, alto)) {
    fill(173, 216, 230);
  } else {
    fill(255);
  }
  rect(x, y, ancho, alto);
  fill(0);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function superficie(mx, my, x, y, ancho, alto) {
  return mx > x && mx < x + ancho && my > y && my < y + alto;
}


function BotonPantalla() {
  botones = [];
  if (estado === 0) {
    botones.push(["Iniciar", width / 2 - 100, height / 2 + 40]);
  } else if (estado === 1 || estado === 2 || estado === 4 || estado === 5 || estado === 6 || 
             estado === 8 || estado === 9 || estado === 10 || estado === 13 || estado === 14 || 
             estado === 15 || estado === 17 || estado === 18 || estado === 19 || estado === 21 || 
             estado === 22 || estado === 23 || estado === 24) {
    botones.push(["Siguiente", width / 2 - 100, height - 50]);
  } else if (estado === 3 || estado === 7 || estado === 11 || estado === 16) {
    botones.push(["Sí", width / 3 - 100, height - 50]);
    botones.push(["No", 2 * width / 3 - 100, height - 50]);
  } else if (estado === 12 || estado === 20 || estado === 25 || estado === 26) {
    botones.push(["Reiniciar", 30, height - 50]);
    botones.push(["Creditos", 430, height - 50]);
  }
}
