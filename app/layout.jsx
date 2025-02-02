
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from 'react-toastify';

const outfit = Outfit({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    
    <>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader />
          {children}
          <Toaster />
          <ToastContainer />
        </body>
      </html>
    </>
  );
}
