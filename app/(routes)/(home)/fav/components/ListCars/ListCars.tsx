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
      <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="relative w-full h-64">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="relative p-3 flex-grow flex flex-col justify-between">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  <p>{price}<strong> US$</strong></p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-4">
                  <p className="flex items-center">
                    <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                    {type}
                  </p>
                  <p className="flex items-center">
                    <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                    {transmission}
                  </p>
                  <p className="flex items-center">
                    <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                    {engine}
                  </p>
                  <p className="flex items-center">
                    <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                    <span className="text-sm">{km.toLocaleString()} km</span>
                  </p>
                </div>
                
                  <div className="flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className={`mt-2 cursor-pointer ${
                        likedCar && "fill-black"
                      }`}
                      onClick={
                        likedCar
                          ? () => removeLovedItem(car.id)
                          : () => addLoveItem(car)
                      }
                    />
                  </div>
                
                  <div className="w-full mt-2 text-center">
                    <Link href="/sign-in">
                      {/* <Button variant="outline" className="w-full">
                        Inicia sesión para reservar
                      </Button> */}
                      <Button variant="outline" className="w-full mt-3"  
                        onClick={handleReserveVehicle}>
                        Reservar vehículo 
                      </Button>
                    </Link>
                  </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

