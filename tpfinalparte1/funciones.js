function cargarEstado(estado) {
  cargaOtraImagen(imagen[estado], { x: width / 2, y: height / 2, ancho: width, alto: height, alinea: CENTER });
}

function cargaOtraImagen(imag, medidas) {
  imageMode(medidas.alinea);
  image(imag, medidas.x, medidas.y, medidas.ancho, medidas.alto);
}

function mostrarTexto(texto, x, y) {
  push();

 
  textSize(25);
  textAlign(CENTER, CENTER);


  let lineas = [];
  let linea = ''; 
  let limiteTexto = 557; 
  
  let longitudTexto = texto.length;
  let palabra = ''; 

 
  for (let i = 0; i < longitudTexto; i++) {
    let caracter = texto[i];

    
    if (caracter === ' ') {
      
      if (textWidth(linea + palabra) <= limiteTexto) {
        linea += palabra + ' '; 
      } else {
        lineas.push(linea); 
        linea = palabra + ' '; 
      }
      palabra = ''; 
    } else {
      palabra += caracter; 
    }
  }

  
  if (palabra.length > 0) {
    if (textWidth(linea + palabra) <= limiteTexto) {
      linea += palabra; 
    } else {
      lineas.push(linea); 
      linea = palabra; 
    }
  }

  
  if (linea.length > 0) {
    lineas.push(linea);
  }

 
  let altoCuadro = lineas.length * 30 + 20; 

  // mi fondo
  fill(0, 0, 0, 150);
  rect(x - 307.5, y - altoCuadro / 2 - 15, 615, altoCuadro, 100); 
  
 //mi texto
  fill(255);
  let posicion = y - altoCuadro / 2 + 10; 
  for (let i = 0; i < lineas.length; i++) {
    text(lineas[i], x, posicion);
    posicion += 30; 
  }

  pop();
}
