import { SkeletonCars } from "@/components/Shared/SkeletonCars";
import { CardCar } from "./CardCar";
import { ListCarsProps } from "./ListCars.types";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const a = false;
  if (!cars) {
      return <SkeletonCars />;
    }

  return (
    <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-4"> {/* grid grid-cols-2 gap-6 my-4 lg:grid-cols-4  */} {/* Version de dos columans en mobile */}
      {cars.map((car) => (
        <CardCar car={car} key={car.id} />
      ))}
    </div>
  );
}
