let imagen = [];

let estado;

function preload() {
  for (let i = 0; i < 9; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 9; i++) {
    imagen[i].resize(640, 480);
  }
  estado = "inicio";
}

function draw() {
  background(200);

  if (estado === "inicio") {
      cargaOtraImagen(imagen[0], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, 50, 100, 50);
    
    fill(255); 
    textSize(20); 
    textAlign(CENTER); 
    text("En la futurista Ryme City,\ndonde humanos y Pokémon conviven,\nTim Goodman llega decidido a descubrir\nla verdad sobre la desaparición de su padre, Harry", width / 2, 120);

  } else if (estado === "primera") {
    cargaOtraImagen(imagen[1], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, 50, 100, 50);
    dibujarBoton(50, height - 100, 100, 50);
  } else if (estado === "segunda") {
    cargaOtraImagen(imagen[2], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, 50, 100, 50);
    dibujarBoton(50, height - 100, 100, 50);
  } else if (estado === "tercera") { 

  
    cargaOtraImagen(imagen[3], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, 50, 100, 50);
    dibujarBoton(50, height - 100, 100, 50);
  }

  fill(255, 0, 0);
  textSize(25);
  text(estado, 50, 450);
}

function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "primera"; 
    }
  } else if (estado === "primera") {
    if (detectarBoton(50, 50, 100, 50)) {
      estado = "segunda";
    }
    if (detectarBoton(50, height - 100, 100, 50)) {
      estado = "tercera";
    }
  }
}

function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(px, py, pan, pal, pal / 4);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function cargaImagen(imag, index, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag[index], x, y, ancho, alto);
}

function cargaOtraImagen(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
