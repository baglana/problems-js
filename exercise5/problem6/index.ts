type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}

async function fetchPokemon(name: string) {
    try {
        const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
        const response = await fetch(`${baseUrl}/${name}`);

        if (!response.ok) {
            await Promise.reject(new Error("some error"));
        }

        const json: Pokemon = await response.json();

/*
        const {
            id,
            name,
            height,
            weight,
            sprites: { front_default: image},
        } = json;
*/

        return {
            id: json.id,
            name: json.name,
            height: json.height,
            weight: json.weight,
            // use from pokemon.sprites.front_default
            image: json.sprites.front_default,
        }
    } catch (err) {
        return Promise.reject(new Error("smth went wrong"));
    }
}

export default fetchPokemon;
