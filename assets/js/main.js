import Teclado from "./clases/Teclado.js";
import { Disco, MemoriaSD } from "./clases/Disco.js";
import { Equipo } from "./clases/Equipo.js";

console.log(MemoriaSD);

const equipo1 = new Equipo("123","Lenovo","LT001")
// console.log(equipo1);
// equipo1.mostrarDatosEquipo()


// const equipo2 = new Equipo("654","Compaq","CP999")
// equipo2.mostrarDatosEquipo()

const teclado1 = new Teclado("998877", "Genius", "GEN009", "Inalambrico", "Español")
teclado1.mostrarDatosEquipo();


const disco1 = new Disco("56585","Seagate","SGT005","SSD","1TB");
console.log(disco1);
disco1.mostrarDatosEquipo();

