"use client";
import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { lovedItems } = useLovedCars();

  const handleContactClick = () => {
    const phoneNumber = "541136936750";
    const message = "Hola, me gustaría obtener más información.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-5xl py-5 mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Link href="/" className="flex items-center justify-center gap-x-2 mb-4 lg:mb-0">
          <Image src="/logo.svg" alt="BobeCars" width={50} height={50} />
          <span className="text-xl font-bold">BobeCars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-4 lg:gap-x-7">
          <Link href="/cars" className="text-lg">Lista de Cars</Link>
          <Link href="/dashboard" className="text-lg">Dashboard</Link>
          <button onClick={handleContactClick} className="text-lg">
            Contact
          </button>
          <Link href="/fav">
            <Heart
              strokeWidth={1}
              className={`cursor-pointer ${lovedItems.length > 0 && "fill-black"}`}
            />
          </Link>
          {/* <UserButton /> */}
        </div>
      </div>
    </div>
  );
}

/* "use client";
import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = useLovedCars();

  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="BobeCars" width={50} height={50} />
          <span className="text-xl font-bold">BobeCars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/cars">Lista de Cars</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/loved-cars">
                <Heart
                  strokeWidth={1}
                  className={`cursor-pointer ${
                    lovedItems.length > 0 && "fill-black"
                  }`}
                />
              </Link>
        </div>
      </div>
    </div>
  );
}
 */