//Promesas y Async/Await

// Son 2 formas de hacer lo mismo, nos sirve para manejar asincronismo.

// Que es el asincronismo?
// Es cuando una tarea tarda un tiempo en completarse, y no podemos esperar a que termine para seguir con el resto del programa.

const pokemonURL = "https://pokeapi.com/api/v2/pokemon/1";

const GetPokemon = (url) => {
    return fetch(url)
}


//Ejemplo con promesas

GetPokemon(pokemonURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log("Correctamente recibido el pokemon", data?.species?.name);
    })
    .catch((error) => {
        console.error("Error al recibir el pokemon", error);
    });

//Ejemplo con async/await
// const GetPokemonAsync = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log("Correctamente recibido el pokemon", data?.species?.name);
//     } catch (error) {
//         console.error("Error al recibir el pokemon", error);
//     }
// }
// GetPokemonAsync(pokemonURL);

