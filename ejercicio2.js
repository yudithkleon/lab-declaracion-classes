// Sistema de empleados
class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
        
    }
    
    calcularSalario() {
        return this.salarioBase;
    }
    obtenerDetalles() {
return `Nombre: ${this.nombre}, Edad: ${this.edad}, Salario Total: ${this.calcularSalario()}`;    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificación) {
        super(nombre, edad, salarioBase);
        this.bonificación = bonificación;
    }   
    calcularSalario() {
        return this.salarioBase + this.bonificación;
    }
        obtenerDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Salario Base + Bonificación: ${this.calcularSalario()} `;
    }
}
class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
      
    }
    calcularSalario() {
        return this.salarioBase;
    }
        obtenerDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Salario Base: ${this.calcularSalario()} `;
    }
}

//------------------------ Crear instancias y mostrar detalles-----------------
const gerente = new Gerente('Victoria', 40, 5000000, 2000000);
console.log(gerente.obtenerDetalles());

const desarrollador = new Desarrollador('Yudith Leon', 38, 4000000, 'JavaScript');
console.log(desarrollador.obtenerDetalles());
