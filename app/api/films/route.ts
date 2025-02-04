import { NextResponse } from 'next/server';

interface Film {
  title: string;
  opening_crawl: string;
  characters: string[];
  episode_id: number;
  director: string;
  release_date: string;
}

interface FilmsResponse {
  films?: Film[];
  error?: string;
}

export async function GET(): Promise<NextResponse<FilmsResponse>> {
  try {
    const response = await fetch('https://swapi.dev/api/films');
    if (!response.ok) {
      throw new Error('Failed to fetch films');
    }
    const data = await response.json();

    const films: Film[] = data.results.map((film: any) => ({
      title: film.title,
      opening_crawl: film.opening_crawl,
      characters: film.characters,
      episode_id: film.episode_id,
      director: film.director,
      release_date: film.release_date,
    }));

    return NextResponse.json({ films });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
