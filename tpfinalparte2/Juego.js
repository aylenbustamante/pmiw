class Juego {
  constructor() {
    this.reiniciar();
    this.victoriaComprobada = false; 
  }

  reiniciar() {
    this.personaje = new Jugador(); 
    this.enemigos = [];
    this.objetos = [];
    this.crearEnemigos(); 
    this.crearObjetos(); 
    this.victoriaComprobada = false; 
  }

  crearEnemigos() {
    this.enemigos.push(new Enemigo(10, 50, 0));  
    this.enemigos.push(new Enemigo(500, 100, 1)); 
    this.enemigos.push(new Enemigo(200, 350, 0)); 
    this.enemigos.push(new Enemigo(400, 250, 1)); 
    this.enemigos.push(new Enemigo(100, 150, 0)); 
  }

  crearObjetos() {
    for (let i = 0; i < 6; i++) {
      this.objetos.push(new Objeto("compuesto R", random(width), random(height)));
    }
  }

  recogerObjetos() {
    for (let i = this.objetos.length - 1; i >= 0; i--) {
      let objeto = this.objetos[i];
      let distancia = dist(this.personaje.posX, this.personaje.posY, objeto.x, objeto.y);

      if (distancia < 20) {  
        this.objetos.splice(i, 1);  
        this.personaje.compuestosRecolectados++; 
      }
    }
  }

  dibujar() {
    background(220);
    this.personaje.dibujar();
    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
      enemigo.patrullar();
      if (enemigo.detectar(this.personaje)) {
        pantalla.estado = "derrota";
      }
    }

    for (let objeto of this.objetos) {
      objeto.mostrar();
    }

  
    this.recogerObjetos();

    
    if (this.personaje.compuestosRecolectados >= 5) {
      pantalla.estado = "victoria";
      this.victoriaComprobada = true;
    }
  }
}
