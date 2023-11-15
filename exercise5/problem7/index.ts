type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}

async function fetchPokemons(pokemons: string[]) {
    try {
        const results = await Promise.all(
            pokemons.map(pokemon => fetchPokemon(pokemon))
        );

/*
        for (const pokemon of pokemons) {
            const promise = fetchPokemon(pokemon);
            resultsPromise.push(promise);
        }

        const results = [];

        for (const promise of resultsPromise) {
            const result = await promise;
            results.push(result);
        }
*/

        return results;
    } catch (err) {
        return Promise.reject(new Error("smth went wrong"));
    }
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

export default fetchPokemons;
