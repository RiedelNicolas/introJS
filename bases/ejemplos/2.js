// Estructuras de control.

//Los argumentos son : 

console.log(process.argv)


//Ejemplo de IF, ingresa tu edad como primer argumento

console.log("Ejemplo de if");
const edad = parseInt(process.argv[2]);

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// Ejemplo de IF-ELSE, ingresando tu edad como primer argumento

console.log("Ejemplo de if-else");

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Ejemplo de for, ingresando tu edad como primer argumento

console.log("Ejemplo de for");

for (let i = 0; i < edad; i++) {
    console.log("Hola Mundo");
}

// Ejemplo de while, ingresando tu edad como primer argumento
console.log("Ejemplo de while");

let i = 0;
while (i < edad) {
    console.log("Hola Mundo");
    i++;
}

