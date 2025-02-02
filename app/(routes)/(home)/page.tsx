import { Navbar } from "@/components/Shared/Navbar";
import { FiltersAndListCars } from "./cars/components/FiltersAndListCars";
import { db } from "@/lib/db";

export default async function Home() {

  
  const cars = await db.bobecars.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="my-8 flex justify-center">
        <div className="w-full max-w-5xl">
          <FiltersAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );

}
