'use client'
import Image from 'next/image';
import Link from 'next/link';
import SkeletonFilm from '../SkeletonFilm/SkeletonFilm';

import { Film as FilmType } from './Film.types';
import { useFilms } from '@/hooks/useFilms';

export default function Film() {
    const { films, loading }: { films: FilmType[]; loading: boolean } = useFilms();

    if (loading) {
        return <SkeletonFilm />;
    }

    return (
        <div className="container mx-auto px-4">
            <div className="my-8 flex justify-center">
                <div className="w-full max-w-5xl">
                    <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
                        {films.map((film: FilmType) => {
                            const { episode_id, title, photo } = film;

                            return (
                                <div key={episode_id} className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
                                    <Link href={`/films/${episode_id}`} className="relative w-full h-64">
                                        <Image
                                            src={photo}
                                            alt={title}
                                            fill
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </Link>
                                    <div className="relative p-3 flex-grow flex flex-col justify-between">
                                        <div className="flex flex-col mb-3 gap-x-4 items-center">
                                            <p className="text-xl min-h-16 lg:min-h-fit text-black">{title}</p>
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