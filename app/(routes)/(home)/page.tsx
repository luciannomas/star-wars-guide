import { Navbar } from "@/components/Shared/Navbar";
import Film from "./films/components/Film/Film";

export default async function Home() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="-mt-3 md:-mt-4 flex justify-center"> 
        <div className="w-full max-w-5xl">
          <Film />
        </div>
      </div>
    </div>
  );
}
