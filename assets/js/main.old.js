// Clase Equipo EcmaScript5
// function Equipo(serial, marca, modelo) {
//     this.serial = serial
//     this.marca = marca
//     this.modelo = modelo
// }


// Clase Equipo EcmaScript6
class Equipo {
    constructor(serial, marca, modelo){
        this.serial = serial
        this.marca = marca
        this.modelo = modelo
        console.log("Equipo ha sido instanciado");
    }

    mostrarDatosEquipo(){
        console.log(`Este equipo tiene el serial ${this.serial}, marca ${this.marca}, el modelo ${this.modelo}`);
    }
}


class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo, idioma) {
        super(serial, marca, modelo)
        this.tipo = tipo
        this.idioma = idioma
    }
}


class Disco extends Equipo {
    constructor(serial, marca, modelo, tipo_disco, capacidad) {
        super(serial, marca, modelo)
        this.tipo_disco = tipo_disco
        this.capacidad = capacidad
    }

    mostrarDatosEquipo() {
        console.log(`El disco es de tipo ${this.tipo_disco} y su capacidad es ${this.capacidad}`);
    }
}

// const equipo1 = new Equipo("123","Lenovo","LT001")
// console.log(equipo1);
// equipo1.mostrarDatosEquipo()


// const equipo2 = new Equipo("654","Compaq","CP999")
// equipo2.mostrarDatosEquipo()

const teclado1 = new Teclado("998877", "Genius", "GEN009", "Inalambrico", "Español")
teclado1.mostrarDatosEquipo();


const disco1 = new Disco("56585","Seagate","SGT005","SSD","1TB");
console.log(disco1);
disco1.mostrarDatosEquipo();



/******************************* Ejemplo Generadores *****************************************/
function* mostrarInformacion() {

    yield console.log("Primer Mensaje");
    console.log("Mensaje intermedio"); 
    yield console.log("Segundo Mensaje");
    yield console.log("Tercer Mensaje");
}

const generador = mostrarInformacion()

setTimeout(() => {
    generador.next()
}, 2000);

setTimeout(() => {
    generador.next()
}, 5000);

setTimeout(() => {
    generador.next()
}, 10000);

/******************************* Fin Ejemplo Generadores *****************************************/