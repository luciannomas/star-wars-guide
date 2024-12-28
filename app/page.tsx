'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-in");
  };

  return (
    <div>
      <p>aqui portada web</p>
      <Button onClick={handleSignInClick}>boton de prueba</Button>
    </div>
  );
}
