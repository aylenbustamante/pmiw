class Objeto {
  constructor(tipo, x, y) {
    this.tipo = tipo;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(148, 0, 211); 
    image(imgObjeto, this.x, this.y, 20, 20);
  }
}
