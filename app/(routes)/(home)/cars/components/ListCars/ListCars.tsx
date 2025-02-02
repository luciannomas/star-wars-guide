"use client";

import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Bobecars } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { ListCarsProps } from "./ListCars.types";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) {
    return <SkeletonCars />;
  }

  const handleReserveVehicle = () => {
    const phoneNumber = "541136936750";
    const message = `Hola, me gustaría reservar el vehículo ${name}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {cars.length === 0 && (
        <p>No se han encontrado vehículos con estos filtros</p>
      )}
      <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car: Bobecars) => {
          const {
            price,
            photo,
            name,
            type,
            transmission,
            engine,
            km,
            id,
          } = car;
          const likedCar = lovedItems.some((item) => item.id === car.id);

          return (
            <div key={id} className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg h-full flex flex-col">
              <Link href={`/cars`} className="relative w-full h-64">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </Link>
              <div className="relative p-3 flex-grow flex flex-col justify-between">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  {/* <p>{price}<strong> US$</strong></p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
