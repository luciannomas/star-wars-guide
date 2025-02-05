import { NextResponse } from 'next/server';

interface Film {
  title: string;
  opening_crawl: string;
  characters: string[];
  episode_id: number;
  director: string;
  release_date: string;
  people: string[]; // Array de IDs de personajes
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

    const people = film.characters.map((characterUrl: string) => {
      const id = characterUrl.split('/').filter(Boolean).pop();
      return id;
    });

    const filmData: Film = {
      title: film.title,
      opening_crawl: film.opening_crawl,
      characters: film.characters,
      episode_id: film.episode_id,
      director: film.director,
      release_date: film.release_date,
      people, // Añadido la propiedad people con los IDs
    };

    return NextResponse.json({ film: filmData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
