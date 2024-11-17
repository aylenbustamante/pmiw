class Pantalla {
  constructor() {
    this.estado = "inicio"; 
  }

  mostrar() {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "instrucciones") {
      this.pantallaInstrucciones();
    } else if (this.estado === "creditos") {
      this.pantallaCreditos();
    } else if (this.estado === "juego") {
      juego.dibujar(); // Mostrar el juego
    } else if (this.estado === "victoria") {
      this.pantallaVictoria();
    } else if (this.estado === "derrota") {
      this.pantallaDerrota();
    }
  }

  pantallaInicio() {
    background(0);
    imageMode(CENTER);
    image(imgInicio, width / 2, height / 2 - 40);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Bienvenido al Juego", width / 2, height / 2 - 40);
    textSize(20);
    text("Presiona ENTER para empezar", width / 2, height / 2);
  }

  pantallaInstrucciones() {
    background(0);
    imageMode(CENTER);
   image(imgInstrucciones, width / 2, height / 2 - 40);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Instrucciones del juego", width / 2, height / 2 - 40);
    textSize(16);
    text("Recolecta 5 compuestos R. Muévete con las flechas.", width / 2, height / 2);
    text("Presiona ENTER para comenzar", width / 2, height / 2 + 40);

    //mi boton
    fill(100, 100, 255);
    rect(width / 2 - 75, height / 2 + 80, 150, 40, 10); 
    fill(255);
    textSize(18);
    text("Créditos", width / 2, height / 2 + 100);
  }

  pantallaCreditos() {
    background(0);
    imageMode(CENTER);
    image(imgCreditos, width / 2, height / 2 - 40);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Inspirado en el juego Pikachu Detective", width / 2, height / 2);
    textSize(16);
    text("Aylen Bustamante, 118978/1, Comision 5", width / 2, height / 2 + 50);
    text("Presiona ESC para regresar", width / 2, height / 2 + 100);
  }

  pantallaDerrota() {
    background(200, 0, 0); 
    imageMode(CENTER);
    image(imgPerdiste, width / 2, height / 2 - 40);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("¡Perdiste!", width / 2, height / 2);
    textSize(20);
    text("Presiona ESC para volver al inicio", width / 2, height / 2 + 40);
  }

  pantallaVictoria() {
    background(0, 200, 0);
    imageMode(CENTER);
    image(imgGanaste, width / 2, height / 2 - 40);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("¡Ganaste!", width / 2, height / 2);
    textSize(20);
    text("Presiona ESC para volver al inicio", width / 2, height / 2 + 40);
  }
}
