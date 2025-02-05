'use client'
import Image from 'next/image';
import Link from 'next/link';

import { useFilms } from '@/hooks/useFilms';
import SkeletonFilm from './components/SkeletonFilm/SkeletonFilm';

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

export default function Film() {
    const { films, loading }: { films: Film[]; loading: boolean } = useFilms();

    if (loading) {
        return <SkeletonFilm />;
    }

    return (
        <div className="container mx-auto px-4">
            <div className="my-8 flex justify-center">
                <div className="w-full max-w-5xl">
                    <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
                        {films.map((film: Film) => {
                            const { episode_id, title, photo } = film;

                            return (
                                <div key={episode_id} className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
                                    <Link href={`/films/${episode_id}`} className="relative w-full h-64">
                                        <Image
                                            src={photo}
                                            alt={title}
                                            fill        // Para que la imagen ocupe todo el espacio disponible
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </Link>
                                    <div className="relative p-3 flex-grow flex flex-col justify-between">
                                        <div className="flex flex-col mb-3 gap-x-4 items-center">
                                        <p className="text-3xl md:text-4xl lg:text-2xl min-h-16 lg:min-h-fit text-gold font-bold mb-0 text-center text-shadow-black">{title}</p> {/* text-3xl en móviles, text-4xl en pantallas medianas, text-5xl en pantallas grandes, color dorado y fuente más ancha */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}