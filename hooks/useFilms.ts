import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('/api/films');
        const filmsWithPhotos = response.data.films.map((film: Film, index: number) => ({
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