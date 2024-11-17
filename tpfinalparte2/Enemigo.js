class Enemigo {
  constructor(x, y, direccion) {
    this.posX = x;
    this.posY = y;
    this.miColor = color(255, 0, 0);
    this.vida = 1;
    this.direccion = direccion; 
    this.velocidad = 2; 
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

  patrullar() {
    if (this.direccion === 0) { 
      this.posX += this.velocidad;
      if (this.posX > width || this.posX < 0) {
        this.velocidad *= -1;  
      }
    } 
    else if (this.direccion === 1) {  
      this.posY += this.velocidad;
      if (this.posY > height || this.posY < 0) {
        this.velocidad *= -1; 
      }
    }
  }

  detectar(jugador) {
    let distancia = dist(this.posX, this.posY, jugador.posX, jugador.posY);
    return distancia < 30; 
  }
}
