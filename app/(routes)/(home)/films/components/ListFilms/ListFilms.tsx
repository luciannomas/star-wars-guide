'use client';
import { useEffect, useState } from 'react';
import { FilmCard } from '../FilmCard';

interface Film {
  title: string;
  episode_id: number;
  // ...other properties
}

interface ListFilmsProps {
  films: Film[];
}

export function ListFilms(props: ListFilmsProps) {
  const { films } = props;
  const [filteredFilms, setFilteredFilms] = useState<Film[]>(films);
  const [filters, setFilters] = useState({
    title: "",
  });

  useEffect(() => {
    let filtered = films;

    if (filters.title) {
      filtered = filtered.filter((film) =>
        film.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    setFilteredFilms(filtered);
  }, [filters, films]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      title: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Select a movie</h2>
      {/* Add filter input here if needed */}
      <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFilms.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </div>
    </div>
  );
}
