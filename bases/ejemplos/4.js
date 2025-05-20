// Metodos y operadores de acuerdo a los tipos
// Estos son un montooon => https://www.w3schools.com/js/

//Strings : 
const nombre = "Juan";
const apellido = "Pérez";
const nombreCompleto = nombre + " " + apellido;
console.log("nombreCompleto", nombreCompleto);
console.log("El nombre completo de juan tiene", nombreCompleto.length, "letras");

// Para saber si una cadena de texto contiene otra cadena de texto
console.log("nombreCompleto.includes('Juan')", nombreCompleto.includes("Juan"));

// Orden alfabético
console.log("Juan > Pedro", "Juan" > "Pedro");

// Arreglos
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("array", array);


const soloPares = array.filter((elemento) => elemento % 2 === 0);
console.log("solo_pares", soloPares);


const cantidadDePares = array.filter((elemento) => elemento % 2 === 0).length;
console.log("cantidad_de_pares", cantidadDePares);


const arrayMultiplicadoPorDos = array.map((elemento) => elemento * 2);
console.log("array_multiplicado_por_dos", arrayMultiplicadoPorDos);