'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FilmCardProps } from './FilmCard.types';

export function FilmCard({ film }: FilmCardProps) {
  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
      <Link href={`/films/${film.episode_id}`} className="relative w-full h-64">
        <Image
          src="/placeholder.png" // Placeholder image
          alt={film.title}
          fill
          objectFit="cover"
          className="rounded-t-lg"
        />
      </Link>
      <div className="relative p-3 flex-grow flex flex-col justify-between">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{film.title}</p>
        </div>
      </div>
    </div>
  );
}
