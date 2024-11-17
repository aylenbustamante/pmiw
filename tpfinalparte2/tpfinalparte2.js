//COMISION 5 // 118978/1 - AYLEN BUSTAMANTE
// https://youtu.be/mVePlJwpXyI
let jugador;
let escenario;
let enemigos = [];
let objetos = [];
let pantalla;
let juego;
let Sonido;
let imgObjeto, imgInicio, imgInstrucciones, imgCreditos, imgPerdiste, imgGanaste;

function setup() {
  createCanvas(640, 480);
  pantalla = new Pantalla();
  juego = new Juego();
}

function preload() {
  imgObjeto = loadImage('data/objeto.png');
  imgInicio = loadImage('data/inicio.png');
  imgInstrucciones = loadImage('data/instrucciones.png');
  imgCreditos = loadImage('data/creditos.png');
  imgPerdiste = loadImage('data/perdiste.png');
  imgGanaste = loadImage('data/ganaste.png');
  Sonido = loadSound('data/pokemusic.mp3');
}



function draw() {
  pantalla.mostrar();

  if (pantalla.estado === "juego") {
    if (!Sonido.isPlaying()) {
      Sonido.play();  
      loop(); 
    }

    juego.dibujar();

    if (keyIsDown(RIGHT_ARROW)) juego.personaje.moverDerecha();
    if (keyIsDown(LEFT_ARROW)) juego.personaje.moverIzquierda();
    if (keyIsDown(UP_ARROW)) juego.personaje.moverArriba();
    if (keyIsDown(DOWN_ARROW)) juego.personaje.moverAbajo();
  }
}

function mousePressed() {
  if (pantalla.estado === "instrucciones") {
    if (
      mouseX > width / 2 - 75 &&
      mouseX < width / 2 + 75 &&
      mouseY > height / 2 + 80 &&
      mouseY < height / 2 + 120
    ) {
      pantalla.estado = "creditos";
    }
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (pantalla.estado === "inicio") {
      pantalla.estado = "instrucciones";
    } else if (pantalla.estado === "instrucciones") {
      pantalla.estado = "juego";
    }
  } else if (keyCode === ESCAPE) {
    if (pantalla.estado === "juego" || pantalla.estado === "victoria" || pantalla.estado === "derrota") {
      pantalla.estado = "inicio";
      juego.reiniciar();
      loop(); 
      Sonido.stop();
    } else if (pantalla.estado === "creditos") {
      pantalla.estado = "inicio";
      loop(); 
      Sonido.stop(); 
    }
  }
}
