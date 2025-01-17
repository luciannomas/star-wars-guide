"use client";
import { Button } from "@/components/ui/button";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";
import { DialogTitle } from "@radix-ui/react-dialog";

export function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    // old version
    // <Dialog open={openDialog}>
    //   <DialogTrigger asChild>
    //     <Button variant="outline" onClick={() => setOpenDialog(true)}>
    //       Edit
    //       <Pencil className="w-4 h-4 ml-2" />
    //     </Button>
    //   </DialogTrigger>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogDescription>
    //         {/* <FormEditCar setOpenDialog={setOpenDialog} carData={carData} /> */}
    //         /FormEditCar
    //       </DialogDescription>
    //     </DialogHeader>
    //   </DialogContent>
    // </Dialog>

    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
      <Button variant="outline" onClick={() => setOpenDialog(true)}>
        Edit
        <Pencil className="w-4 h-4 ml-2" />
      </Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogDescription>
        <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
        </DialogDescription>
      </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
