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
    }
}


class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo, idioma) {
        super(serial, marca,modelo)
        this.tipo = tipo
        this.idioma = idioma
    }
}

const equipo1 = new Equipo("888555","Microsoft","MT001")
console.log(equipo1);


const teclado1 = new Teclado("998877", "Genius", "GEN009", "Inalambrico", "Español")
console.log(teclado1);