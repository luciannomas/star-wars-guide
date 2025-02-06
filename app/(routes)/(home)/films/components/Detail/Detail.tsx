'use client'
import Image from 'next/image';
import { Film } from '../Film/Film.types';
import TableFilm from '../TableFilm/TableFilm';

import { useEffect } from 'react';
import usePeopleData from '@/hooks/usePeopleData';

interface DetailProps {
  film: Film;
}

const summarizeText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const Detail = ({ film }: any) => {
  const summary = summarizeText(film.opening_crawl, 250); // Adjust maxLength as needed

  /* const { people, loading } = usePeopleData(film.people.map((url: string) => url.split('/').filter(Boolean).pop())); // Use the hook

  useEffect(() => {
    //console.log("People data:", people); // Console log the response
  }, [people]); */

  return (
    <>
      <div className="my-8 flex justify-center bg-black"> {/* Changed to bg-black */}
        <div className="w-full max-w-5xl">
          <div className="relative p-1 bg-black rounded-lg shadow-md hover:shadow-lg h-full flex flex-col"> {/* Changed to bg-black */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={`/images/star_wars_${film.episode_id}.jpg`}
                alt={film.title}
                fill
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="relative p-3 flex-grow flex flex-col justify-between text-yellow-500">
              <div className="flex flex-col mb-3 gap-x-4 items-center">
                <p className="text-lg md:text-xl lg:text-2xl tracking-wide leading-loose">{summary}</p> {/* Añadido tracking-wide y leading-loose */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 flex justify-center bg-black">
        <div className="w-full max-w-4xl">
          <TableFilm people={film.people} /> {/* Pass the data returned from the hook */}
        </div>
      </div>
    </>
  );
};

export default Detail;