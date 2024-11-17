//COMISION 5 // 118978/1 - AYLEN BUSTAMANTE

let imagen = [];
let Textos = [];
let botones = []; 
let sound;
let estado;



function preload() {
  for (let i = 0; i < 27; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
  }
  sound = loadSound("data/sound.mp3");
  Textos = loadStrings("data/pikachu.txt");
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 27; i++) {
    imagen[i].resize(width, height);
  }

  estado = 0;
}

function draw() {
  background(200);
  cargarEstado(estado);

  fill(0, 0, 255);
  textSize(20);
  
  BotonPantalla();

  if (estado < Textos.length && Textos[estado]) {
    mostrarTexto(Textos[estado], width / 2, 120);
  }
  
   for (let boton of botones) {
    botonRectangular(boton[0], boton[1], boton[2], 200, 60);
  }
}



function mousePressed() {
  for (let boton of botones) {
    if (superficie(mouseX, mouseY, boton[1], boton[2], 200, 60)) {
      if (boton[0] === "Iniciar") {
        estado = 1;
      } else if (boton[0] === "Siguiente") {
        estado++;
      } else if (boton[0] === "Sí") {
        if (estado === 3) estado = 4;
        else if (estado === 7) estado = 8;
        else if (estado === 11) estado = 13;
        else if (estado === 16) estado = 17;
      } else if (boton[0] === "No") {
        if (estado === 3) estado = 6;
        else if (estado === 6) estado = 7;
        else if (estado === 7) estado = 11;
        else if (estado === 11) estado = 12;
        else if (estado === 16) estado = 21;
      } else if (boton[0] === "Creditos") {
        estado = 26;
      } else if (boton[0] === "Reiniciar") {
        estado = 0;
      }
      
      if (!sound.isPlaying()) sound.play();
      break;
    }
  }
}
