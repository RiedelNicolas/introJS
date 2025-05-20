// Mutables
var nombre = "Juan";
console.log("nombre",nombre);
nombre = "Pedro";
console.log("Ahora Juan se llama ", nombre);

// Constantes

const PI = 3.14;
console.log("PI", PI);
//PI = 3.1416; // Esto no se puede hacer, ya que PI es una constante, va a fallar


// Arreglos
const array = [1,2,3,4,5,6,7,8,9,10];
console.log("array" , array);
console.log("array[0]", array[0]);

// Objetos
const objeto = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Bragado",
};
console.log("objeto",objeto);

console.log("objeto.nombre", objeto.nombre);
console.log("objeto[nombre]", objeto["nombre"]);


// Podemos componer objetos con arrays

const alumno = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    ciudad: "Bragado",
    materias: ["Matemáticas", "Física", "Química"],
};
console.log("alumno", alumno);

// Y al mismo tiempo, podemos hacer un arreglo de objetos

const alumno2 = {
    nombre: "Pedro",
    apellido: "Gómez",
    edad: 25,
    ciudad: "Buenos Aires",
    materias: ["Matemáticas", "Física", "Química"],
};

const materia = [alumno, alumno2]

console.log("materia", materia);