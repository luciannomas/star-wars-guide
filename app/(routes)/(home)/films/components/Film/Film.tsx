import Image from 'next/image';
import Link from 'next/link';

const mockFilms = [
    {
      id: 1,
      title: "A New Hope",
      photo: "/images/car-1.jpg",
      opening_crawl: "It is a period of civil war...",
      characters: ["https://swapi.dev/api/people/1/"],
      episode_id: 4,
      director: "George Lucas",
      release_date: "1977-05-25",
    },
    {
      id: 2,
      title: "The Empire Strikes Back",
      photo: "/images/car-2.jpg",
      opening_crawl: "It is a dark time for the Rebellion...",
      characters: ["https://swapi.dev/api/people/2/"],
      episode_id: 5,
      director: "Irvin Kershner",
      release_date: "1980-05-17",
    },
    {
      id: 3,
      title: "Return of the Jedi",
      photo: "/images/car-3.jpg",
      opening_crawl: "Luke Skywalker has returned to his home planet of Tatooine...",
      characters: ["https://swapi.dev/api/people/3/"],
      episode_id: 6,
      director: "Richard Marquand",
      release_date: "1983-05-25",
    },
    {
      id: 4,
      title: "The Phantom Menace",
      photo: "/images/car-4.jpg",
      opening_crawl: "Turmoil has engulfed the Galactic Republic...",
      characters: ["https://swapi.dev/api/people/4/"],
      episode_id: 1,
      director: "George Lucas",
      release_date: "1999-05-19",
    },
    {
      id: 5,
      title: "Attack of the Clones",
      photo: "/images/car-5.jpg",
      opening_crawl: "There is unrest in the Galactic Senate...",
      characters: ["https://swapi.dev/api/people/5/"],
      episode_id: 2,
      director: "George Lucas",
      release_date: "2002-05-16",
    },
    {
      id: 6,
      title: "Revenge of the Sith",
      photo: "/images/car-6.jpg",
      opening_crawl: "War! The Republic is crumbling under attacks by the ruthless Sith Lord...",
      characters: ["https://swapi.dev/api/people/6/"],
      episode_id: 3,
      director: "George Lucas",
      release_date: "2005-05-19",
    },
  ];

export default function Film() {
  return (
    <div className="container mx-auto px-4">
      <div className="my-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockFilms.map((film) => {
              const { id, photo, title } = film;

              return (
                <div key={id} className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
                  <Link href={`/films/${id}`} className="relative w-full h-64">
                    <Image
                      src={photo}
                      alt={title}
                      fill
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </Link>
                  <div className="relative p-3 flex-grow flex flex-col justify-between">
                    <div className="flex flex-col mb-3 gap-x-4">
                      <p className="text-xl min-h-16 lg:min-h-fit">{title}</p>
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