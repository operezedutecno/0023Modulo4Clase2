export class Equipo {
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