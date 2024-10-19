let imagen = [];
let Textos = [];
let sound;
let estado;
let botones = {};

function preload() {
  for (let i = 0; i < 25; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
  }
  sound = loadSound("data/sound.mp3");
  Textos = loadStrings("data/pikachu.txt");
  console.log(Textos.length)
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 25; i++) {
    imagen[i].resize(640, 480);
  }
  estado = 0;

  botones = {
    inicio: { x: 240, y: 370, ancho: 100, alto: 40, texto: "inicio" },
    siguiente: { x: 240, y: 370, ancho: 100, alto: 40, texto: "siguiente" },
    reiniciar: { x: 480, y: height - 100, ancho: 100, alto: 50, texto: "reiniciar"},
    si: { x: 50, y: height - 100, ancho: 100, alto: 50, texto: "Sí" },
    no: { x: 480, y: height - 100, ancho: 100, alto: 50, texto: "No" }
};
}

function draw() {
  background(200);

  cargarEstado(estado);

 
  fill(0, 0, 255); 
  textSize(20); 
  textAlign(LEFT); 
  text("Estás en estado: " + estado, 10, 30); 
  
  if (estado < Textos.length && Textos[estado]) { 
    mostrarTexto(Textos[estado], width / 2, 120);
 }
}

function cargarEstado(estado) {
  cargaOtraImagen(imagen[estado], { x: width / 2, y: height / 2, ancho: 640, alto: 480, alinea: CENTER });

  
  if (estado === 0) {
    dibujarBoton(botones.inicio);
  }
  
  if (estado === 1 || estado === 2 || estado == 4 ||estado === 5 || estado === 8 || estado === 9 || estado === 10 || estado === 13 || estado === 14 || estado === 15) {
    dibujarBoton(botones.siguiente);
  } 
 
  if (estado === 3 || estado === 7 || estado === 11 || estado === 16) {
    dibujarBoton(botones.si);
    dibujarBoton(botones.no);
  }

if (estado === 3) {
  dibujarBoton(botones.si);
}
  if (estado === 6) {
    dibujarBoton(botones.no);
  }
  
  if (estado === 12) {
    dibujarBoton(botones.reiniciar);
     }
}

function mousePressed() {
 
   if (detectarBoton(botones.siguiente) && (estado === 0)) {
      estado += 1; 
   }
  else if (detectarBoton(botones.siguiente) && (estado === 1 || estado === 2 || estado === 4 || estado === 5 || estado === 8 || estado === 9 || estado === 10 || estado === 13 || estado === 14 || estado === 15 || estado === 16)) {
    estado += 1; 
  } 
  
  
  else if (detectarBoton(botones.si)) { 
  if (estado === 3) { 
    estado = 4;
  } else if (estado === 7) {
    estado = 8; 
  } else if (estado === 11) {
    estado = 13;
  } else if (estado === 16) {
    estado = 17;
  } 
  }
 

 
  else if (detectarBoton(botones.no)) {
    if (estado === 3) {
      estado = 6; 
    } else if (estado === 6) {
      estado = 7;
    } else if (estado === 7) {
      estado = 11;
    } else if (estado === 11) {
      estado = 12; //final 1 
    }
  }


else if(detectarBoton(botones.reiniciar)) {
  if (estado === 12) {
    estado = 1;
  }
 }


  if (!sound.isPlaying()) {
    sound.play(); 
  }
}

function cargaOtraImagen(imag, medidas) {
  imageMode(medidas.alinea);
  image(imag, medidas.x, medidas.y, medidas.ancho, medidas.alto);
}

function mostrarTexto(texto, x, y) {
  fill(0, 0, 0, 150);
  let anchoCuadro = 615;
  let altoCuadro = 200;
  rect(x - anchoCuadro / 2, y - altoCuadro / 2 - 15, anchoCuadro, altoCuadro, 100);

  fill(255);
  textSize(25);
  textAlign(CENTER);
  let limiteTexto = 580;
  let a = width / 2 - 300;
  let b = 30;
  text(texto, a, b, limiteTexto);
}


function dibujarBoton(boton) {
  
  if (detectarBoton(boton)) {
    fill(0, 255, 255); 
  } else {
    fill(0, 0, 255);
  }
  

  rect(boton.x, boton.y, boton.ancho, boton.alto, boton.alto / 4);
  

 fill(255); 
  textSize(18); 
  text(boton.texto, boton.x + boton.ancho / 2, boton.y + boton.alto / 2);
}
function detectarBoton(boton) {
  return mouseX > boton.x && mouseX < boton.x + boton.ancho &&
         mouseY > boton.y && mouseY < boton.y + boton.alto;
}
