import { NextResponse } from 'next/server';

interface Film {
  title: string;
  opening_crawl: string;
  characters: string[];
  episode_id: number;
  director: string;
  release_date: string;
}

interface FilmResponse {
  film?: Film;
  error?: string;
}

export async function GET(request: Request, { params }: { params: { episode_id: string } }): Promise<NextResponse<FilmResponse>> {
  try {
    const { episode_id } = params;

    if (!episode_id) {
      throw new Error('Episode ID is required');
    }

    const response = await fetch(`https://swapi.dev/api/films/${episode_id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch film');
    }
    const film = await response.json();

    const filmData: Film = {
      title: film.title,
      opening_crawl: film.opening_crawl,
      characters: film.characters,
      episode_id: film.episode_id,
      director: film.director,
      release_date: film.release_date,
    };

    return NextResponse.json({ film: filmData });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
