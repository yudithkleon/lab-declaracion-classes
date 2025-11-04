// Sistema de animales

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido() {
        return '';
    }
    obtenerDetalles() { 
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Sonido que emite: ${this.emitirSonido()}`;
    }
}
class Perro extends Animal {
        constructor(nombre, edad) {
            super(nombre, edad);
            
        }
        emitirSonido() {
            return 'Guau Guau';
        }
}

class Gato extends Animal {
        constructor(nombre, edad) {
            super(nombre, edad);
            
        }
        emitirSonido() {
            return 'Miau Miau';
        }
}

//------------------------ Crear instancias y mostrar detalles-----------------
const miPerro = new Perro('Max', 1);
console.log(miPerro.obtenerDetalles());

const miGato = new Gato('Tomy', 5);
console.log(miGato.obtenerDetalles());
