'use client';
import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { useFilmDetail } from '@/hooks/useFilmDetail';
import { Navbar } from '@/components/Shared/Navbar';
import Detail from '../components/Detail/Detail';

const FilmDescription = () => {
  const { episode_id } = useParams();
  const { film, loading } = useFilmDetail(Number(episode_id));
  console.log('Film2:', film);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Detail film={film} />
    </div>
  );
};

const FilmDescriptionPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilmDescription />
    </Suspense>
  );
};

export default FilmDescriptionPage;