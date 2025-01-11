"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddCar } from "../FormAddCar";

export function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
      <Button variant="outline" onClick={() => setOpenDialog(true)}>
        Add new car
        <PlusCircle className="ml-2" />
      </Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
        <DialogTitle>Add a new car</DialogTitle>
        <DialogDescription>
        <FormAddCar setOpenDialog={setOpenDialog} />
        </DialogDescription>
      </DialogHeader>
      </DialogContent>
    </Dialog>

    /* TODO: OLD VERSION COMPONENET
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Add new car
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            {/* <FormAddCar setOpenDialog={setOpenDialog} /> }
            FormAddCar  
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
     */
  );
}
