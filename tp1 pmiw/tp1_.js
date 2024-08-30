//link https://youtu.be/DDns4GTpNxs
//Aylen bustamante legajo 118978/1
//comision 5
let Pantalla = 1;
let imagen1;

function preload(){
  imagen1 = loadImage('data/imagen1.jpg');
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
}

function draw() {
  background(124, 140, 144);
  Cuadro(Pantalla);
}

function mousePressed() {
  cambioDePantalla();
}

function cambioDePantalla(){
  Pantalla++;
  if (Pantalla > 3){
    Pantalla = 3;
  }
}

function keyPressed(){
  if (key === 'r' || key === 'R'){
    reiniciar();
  }
}

function Cuadro(pantalla) {
  image(imagen1, 0, 0, 400, 400);

  let rojo = 0;
  let verde = 0;
  let azul = 0;
  
  if (pantalla === 1) {
    for(let c = 400; c >= 20; c -= 20){
      for(let i = 0; i < 10; i++) {
        if ((c / 20) % 2 === 0){
          rojo = map(c, 400, 20, 50, 254);
          verde = map(c, 400, 20, 37, 189);
          azul = map(c, 400, 20, 0, 40);
          fill(rojo, verde, azul);
          rect(600, 199, c, c);
        } else {
          rojo = map(c, 400, 20, 135, 70);
          verde = map(c, 420, 20, 141, 59);
          azul = map(c, 430, 20, 163, 50);
          fill(rojo, verde, azul);
          rect(600, 191, c, c);
        }
      }
    }
  } else if (pantalla === 2) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        if ((c / 20) % 2 === 0) {
          rojo = map(c, 400, 20, 125, 117);
          verde = map(c, 400, 20, 140, 107);
          azul = map(c, 400, 20, 144, 234);
          fill(rojo, verde, azul);
          rect(600, 199, c, c);
        } else {
          let posX = 600;
          let posY = 192;
          push();
          translate(posX, posY);
          rotate(map(mouseX, 400, 20, 1, PI));
          rojo = map(c, 400, 20, 65, 255);
          verde = map(c, 400, 20, 60, 98);
          azul = map(c, 400, 20, 70, 229);
          fill(rojo, verde, azul);
          rect(0, 0, c, c);
          pop();
        }
      }
    }
  } else if (pantalla === 3) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        if ((c / 20) % 2 === 0) {
          rojo = random(100, 255);
          verde = map(c, 420, 20, 140, 99);
          azul = random(100, 255);
          fill(rojo, verde, azul);
          rect(600, 199, c, c);
        } else {
          rojo = map(c, 420, 20, 0, 240);
          verde = map(c, 420, 20, 0, 122);
          azul = map(c, 420, 20, 0, 166);
          fill(rojo, verde, azul);
          rect(600, 191, c, c);
        }
      }
    }
  }
}

function reiniciar() {
  Pantalla = 1;
}
