//Siustema de productos electrónicos
class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
    darDescripcion(){
        return `Nombre: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`;
    }
}

class Telefono extends Producto {
    constructor(nombre, marca, precio, almacenamiento, ram) {
        super(nombre, marca, precio);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    darDescripcion() {
        return `${super.darDescripcion()}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`;   
    }
    }
class Laptop extends Producto {
    constructor(nombre, marca, precio, procesador, pulgadas) {
        super(nombre, marca, precio);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    darDescripcion() {
        return `${super.darDescripcion()}, Procesador: ${this.procesador}, Tamaño: ${this.pulgadas} pulgadas`;   
    }
}

//------------------------ Crear instancias y mostrar detalles-----------------
const miTelefono = new Telefono('VNE-LX3', 'Honor', 800000, 128, 4);
console.log(miTelefono.darDescripcion());

const miLaptop = new Laptop('Levono ', 'Levono', 2000000, 'intel core 17', 15);
console.log(miLaptop.darDescripcion());
