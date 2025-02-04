import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { FiltersAndListCars } from "./cars/components/FiltersAndListCars";
import Film from "./films/components/Film/Film";


export default async function Home() {
  const cars = await db.bobecars.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const mockFilm = {
    title: "A New Hope",
    episode_id: 4,
  };

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="my-8 flex justify-center">
        <div className="w-full max-w-5xl">
          {/* <FiltersAndListCars cars={cars} /> */}
          {/* <ListFilms films={mockFilms} /> */}
          <Film  />
        </div>
      </div>
    </div>
  );
}
