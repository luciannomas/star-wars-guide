import { Navbar } from "@/components/Shared/Navbar";
import { FirtsBlock } from "./components/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";
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
      <FirtsBlock />
      <SliderBrands />
      <div className="my-8 grid grid-cols-1 gap-6">
        <FiltersAndListCars cars={cars}/>
      </div>
    {/*   <Features /> */}
      <OurFleet />
      <DriveToday />
    </div>
  );
}
