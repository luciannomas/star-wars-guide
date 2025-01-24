"use client";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Bobecars } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Wrench } from "lucide-react";
import Image from "next/image";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";

export function ListLovedCars() {
  const { lovedItems, removeLovedItem } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2>Aún no dispones de coches que te gustan</h2>
      ) : (
        <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-4">
          {lovedItems.map((car: Bobecars) => {
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
                      <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                      {type}
                    </p>
                    <p className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                      {transmission}
                    </p>
                    <p className="flex items-center">
                      <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                      {engine}
                    </p>
                    <p className="flex items-center">
                      <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                      <span className="text-sm">{(km ?? 0).toLocaleString()} km</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className="mt-2 cursor-pointer fill-black"
                      onClick={() => removeLovedItem(car.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}