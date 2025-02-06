'use client'
import Image from 'next/image';
import { Film } from '../Film/Film.types';
import TableFilm from '../TableFilm/TableFilm';
import { useState } from 'react';

interface DetailProps {
  film: Film;
}

const summarizeText = (text: string, maxLength: number, expanded: boolean) => {
  if (expanded || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const Detail = ({ film }: any) => {
  const [expanded, setExpanded] = useState(false); // State for text expansion
  const summary = summarizeText(film.opening_crawl, 250, expanded); // Adjust maxLength as needed

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
                <p 
                  className="text-lg md:text-xl lg:text-2xl tracking-wide leading-loose cursor-pointer" 
                  onClick={() => setExpanded(!expanded)}
                >
                  {summary}
                </p> {/* Añadido tracking-wide y leading-loose */}
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