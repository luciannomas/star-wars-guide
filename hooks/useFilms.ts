
import { useState, useEffect } from 'react';

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        const filmsWithPhotos = data.results.map((film: Film, index: number) => ({
          ...film,
          photo: `/images/star_wars_${film.episode_id}.jpg`, 
        }));
        setFilms(filmsWithPhotos);
      } catch (error) {
        console.error('Error fetching films:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return { films, loading };
};

export interface Film {
    id: number;
    title: string;
    photo: string;
    opening_crawl: string;
    characters: string[];
    episode_id: number;
    director: string;
    release_date: string;
  }