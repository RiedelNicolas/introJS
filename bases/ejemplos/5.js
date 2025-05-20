// Tenemos 2 formas de definir funciones:

// // 1. Declarando la funcion
function suma(a, b) {
    return a + b;
}
console.log("suma(2,3)", suma(2, 3));

// // 2. Usando una funcion "flecha" (arrow function)

const suma2 = (a, b) => {
    return a + b;
}
console.log("suma2(2,3)", suma2(2, 3));


// Adentro de una funcion, podemos hacer todo lo que queramos!
// Pero tengamos en cuenta que tienen su propio scope (dentro del scope de la aplicacion)

let nombre = "Juan";
function saludar() {
    let nombre_bis = "Pedro";
    console.log("Hola " + nombre);
    console.log("Hola " + nombre_bis);
}
saludar();

//Mutables: let y var => Tiene un background historico.
 // Originalmente solo existia var
 // Luego llegaron let y const.

//No-mutables: const => No hay sorpresas.

// Usamos let y const.


const procedimiento = () => {
    console.log("hola")
}

let retorno = procedimiento
console.log("valor de retorno", retorno())