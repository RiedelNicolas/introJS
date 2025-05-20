import { alumnos } from "./alumnos.js";

const alumnoAprobado = (alumno) => {
    const totalNotas = alumno.notas.length;
    // const sumatoria = alumno.notas.reduce((a, b) => a + b, 0)
    let sumatoria = 0;
    for (let i = 0; i < totalNotas; i++) {
        sumatoria += alumno.notas[i]
    }
    return (sumatoria/totalNotas) >= 4
}

// Devolver los alumnos aprobados (>=4)
const aprobados = (alumnos) => {
    return alumnos.filter( (x) => alumnoAprobado(x))
}

console.log("Los alumnos aprobados son:")
console.log(aprobados(alumnos))