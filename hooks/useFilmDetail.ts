import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Film {
  title: string;
  opening_crawl: string;
  characters: string[];
  episode_id: number;
  director: string;
  release_date: string;
  people: {
    name: string;
    gender: string;
    birth_year: string;
    homeworld: string;
  }[];
}

export const useFilmDetail = (episode_id: number) => {
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(`/api/films/${episode_id}`);
        setFilm(response.data.film);
      } catch (error) {
        console.error('Error fetching film:', error);
      } finally {
        setLoading(false);
      }
    };

    if (episode_id) {
      fetchFilm();
    }
  }, [episode_id]);

  return { film, loading };
};
