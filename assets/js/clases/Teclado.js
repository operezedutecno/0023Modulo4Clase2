import { Equipo } from "./Equipo.js"

class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo, idioma) {
        super(serial, marca, modelo)
        this.tipo = tipo
        this.idioma = idioma
    }
}

export default Teclado