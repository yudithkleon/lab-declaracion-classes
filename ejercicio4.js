//sistema de figuras geométricas
class Figura {
    constructor(color) {
        this.color = color;
    }   
    area() {
        return 0;
    }
    obtenerDetalles() {
        return `Color: ${this.color}, Área: ${this.area()}`;
    }
}

class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }   
    obtenerDetalles() {
        return `Color: ${this.color}, Área del Rectángulo: ${this.area()}`;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }   
    obtenerDetalles() {
        return `Color: ${this.color}, Área del Círculo: ${this.area().toFixed(2)}`;
    }
}
//------------------------ Crear instancias y mostrar detalles-----------------
const miRectangulo = new Rectangulo('Rojo', 5, 10);
console.log(miRectangulo.obtenerDetalles());


const miCirculo = new Circulo('Azul', 8);
console.log(miCirculo.obtenerDetalles());