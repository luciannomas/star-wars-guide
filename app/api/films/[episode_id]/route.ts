import { NextResponse } from 'next/server';
import axios from 'axios';

interface Film {
  title: string;
  opening_crawl: string;
  episode_id: number;
  director: string;
  release_date: string;
  people: Person[]; // Array de objetos de personajes
}

interface Person {
  id: string;
  name: string;
  gender: string;
  birth_year: string;
  homeworld: string;
}

interface FilmResponse {
  film?: Film;
  error?: string;
}

// Mapeo de episode_id a id
const episodeIdToIdMap: { [key: number]: number } = {
  1: 4,
  2: 5,
  3: 6,
  4: 1,
  5: 2,
  6: 3,
};

const fetchPersonData = async (id: string): Promise<Person> => {
  const response = await axios.get(`http://localhost:3000/api/people/${id}`);
  return response.data;
};

export async function GET(request: Request, { params }: { params: { episode_id: string } }): Promise<NextResponse<FilmResponse>> {
  try {
    const { episode_id } = params;

    if (!episode_id) {
      throw new Error('Episode ID is required');
    }

    const id = episodeIdToIdMap[Number(episode_id)];
    if (!id) {
      throw new Error('Invalid Episode ID');
    }

    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch film');
    }
    const film = await response.json();

    const peopleIds = film.characters.map((characterUrl: string) => {
      const id = characterUrl.split('/').filter(Boolean).pop();
      return id;
    });

    const people: any = await Promise.all(peopleIds.map((id: string) => fetchPersonData(id)));

    const filmData: Film = {
      title: film.title,
      opening_crawl: film.opening_crawl,
      episode_id: film.episode_id,
      director: film.director,
      release_date: film.release_date,
      people, // Añadido la propiedad people con los objetos de personajes
    };

    return NextResponse.json({ film: filmData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
