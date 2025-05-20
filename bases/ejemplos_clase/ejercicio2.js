import { alumnos } from "./alumnos.js";


// Ejercicio 2:
// Implementar una funcion que reciba un numero(n) y una lista de alumnos.
// Debe devolver los primeros n alumnos de la lista.

const calcularPromedio = (alumno) => {
    const totalNotas = alumno.notas.length;
    // const sumatoria = alumno.notas.reduce((a, b) => a + b, 0)
    let sumatoria = 0;
    for (let i = 0; i < totalNotas; i++) {
        sumatoria += alumno.notas[i]
    }
    return (sumatoria/totalNotas);
}

const compararAlumnos = (a,b) => {
    return calcularPromedio(b) - calcularPromedio(a)
}

const ordenarPorPromedio = (alumnos) => {
    return alumnos.sort( (a,b) => compararAlumnos(a,b) )
}

const primerosAlumnos = (alumnos, n) => {
    const alumnosOrdenados = ordenarPorPromedio(alumnos);
    return alumnosOrdenados.slice(0, n)
}

console.log(primerosAlumnos(alumnos, -1))