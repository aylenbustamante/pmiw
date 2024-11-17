class Jugador {
  constructor() {
    this.posX = width / 2;
    this.posY = height / 2;
    this.miColor = color(255, 225, 0);
    this.vida = 3;
    this.compuestosRecolectados = 0;
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

  
  moverDerecha() {
    this.posX = this.posX + 3;
  }

  moverIzquierda() {
    this.posX = this.posX - 3;
  }

  moverArriba() {
    this.posY = this.posY - 3;
  }

  moverAbajo() {
    this.posY = this.posY + 3;
  }


  teclaPresionada() {
    if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW) {
      this.moverAbajo();
    }
  }

 
  recolectar(objeto) {
    let distancia = dist(this.posX, this.posY, objeto.x, objeto.y);
    if (distancia < 20) {
      this.compuestosRecolectados++;
      return true;
    }
    return false;
  }
}
