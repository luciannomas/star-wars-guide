import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useToast } from "@/hooks/use-toast"
import { Bobecars } from "@prisma/client";
import { toast } from "react-toastify";

interface UseLovedCarsType {
  lovedItems: Bobecars[];
  addLoveItem: (data: Bobecars) => void;
  removeLovedItem: (id: string) => void;
}


// const { toast } = useToast()
export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Bobecars) => {
        
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          /* return toast({
            title: "El coche ya existe en la lista 💔",
          }); */
          toast.error("El coche ya existe en la lista 💔");
          return;
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

       /*  toast({
          title: "Coche añadido a la lista 🚙",
        }); */
        toast.success("Coche añadido a la lista 🚙");
      },

      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        /* toast({
          title: "El coche se ha eliminado de la lista ",
        }); */
        toast.info("El coche se ha eliminado de la lista ");
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
