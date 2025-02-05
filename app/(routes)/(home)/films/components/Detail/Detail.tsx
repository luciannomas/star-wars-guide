import Image from 'next/image';
import { Film } from '../Film/Film.types';


interface DetailProps {
  film: Film;
}

const Detail = ({ film }: any) => {

    console.log("film",film);
  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
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
             {/*  <p className="text-3xl md:text-4xl lg:text-5xl min-h-16 lg:min-h-fit font-bold mb-0 text-center">{film.title}</p> */}
              <p className="text-lg md:text-xl lg:text-2xl">{film.opening_crawl}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;