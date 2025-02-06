'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useFilmDetail } from '@/hooks/useFilmDetail';
import { Navbar } from '@/components/Shared/Navbar';
import Detail from '../components/Detail/Detail';
import SkeletonDetail from '../components/SkeletonDetail/SkeletonDetail';
import { Footer } from '@/components/Shared/Footer';


const FilmDescription = () => {
  const { episode_id } = useParams();
  const { film, loading } = useFilmDetail(Number(episode_id));
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading || showSkeleton) {
    return <SkeletonDetail />;
  }

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Detail film={film} />
    </div>
  );
};

const FilmDescriptionPage = () => {
  return (
    <>
      <Navbar />
      <FilmDescription />
      <Footer />
    </>
  );
};

export default FilmDescriptionPage;