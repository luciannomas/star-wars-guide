"use client";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="max-w-5xl py-5 mx-auto px-1">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Link href="/" className="flex items-center justify-start gap-x-1 mb-4 lg:mb-0">
          <Image src="/star_wars.svg" alt="Star Wars" width={50} height={50} />
          <span className="text-xl font-bold">Star Wars guide</span>
        </Link>

        <div className="flex items-center justify-center gap-x-2 lg:gap-x-4">
          <Link href="/cars" className="text-lg">Movie List</Link>
        </div>
      </div>
    </div>
  );
}