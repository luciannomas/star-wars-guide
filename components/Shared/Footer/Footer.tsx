import { FaJediOrder, FaEmpire } from 'react-icons/fa'; // Importing the Star Wars icon from react-icons

export function Footer() {
  return (
    <footer className="bg-black text-yellow-500 py-4 flex justify-center items-center">
      <FaJediOrder className="w-6 h-6 mr-2" />
      <span>Derechos Reservados</span>
    </footer>
  );
}