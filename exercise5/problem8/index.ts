type CharacterWithMovies = {
    name: string;
    films: string[];
}

type Film = {
    title: string;
}


async function fetchCharacterWithMovies(id: number) {
  try {
      const baseUrl = 'https://swapi.dev/api/';
      const response = await fetch(`${baseUrl}/people/${id}/`);

      if (!response.ok) {
          await Promise.reject(new Error("some error"));
      }

      const json: CharacterWithMovies = await response.json();

      const filmUrls = json.films;

      const films = await Promise.all(
          filmUrls.map(filmUrl => fetchFilm(filmUrl))
      );

      return {
          name: json.name,
          films: films,
      }
  } catch (err) {
      return Promise.reject(new Error("smth went wrong"));
  }
}

async function fetchFilm(url: string) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            await Promise.reject(new Error("some error"));
        }

        const json: Film = await response.json();

        return json.title;
    } catch (err) {
        return Promise.reject(new Error("smth went wrong"));
    }
}

export default fetchCharacterWithMovies;
