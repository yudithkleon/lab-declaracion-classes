//  Sistema  básico de vehiculos
// crear una clases

class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    obtenerDetalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Ahora creo la clase coche que hereda de vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
        super(marca, modelo, año);
        this.puertas = puertas;
    }
    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Puertas: ${this.puertas}`;
    }
}

// Ahora creo la clase Moto  que hereda de vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    obtenerDetalles() {
        return `${super.obtenerDetalles()}, cilindrada: ${this.cilindrada}`;
    }
}

//------------------------ Crear instancias y mostrar detalles-----------------

const miCoche = new Coche('Toyota', 'Corolla', 2020, 4);
console.log(miCoche.obtenerDetalles());

const miMoto = new Moto('Honda', 'CPT2562', 2019, 500);
console.log(miMoto.obtenerDetalles());
