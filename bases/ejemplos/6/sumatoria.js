
/**
 * 
 * @param {*} n, número hasta el cual se suman los números
 * @returns la suma de los números desde 1 hasta n
 */
export const sumatoria = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}