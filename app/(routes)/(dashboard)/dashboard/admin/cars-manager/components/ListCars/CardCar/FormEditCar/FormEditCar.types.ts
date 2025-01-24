import { Bobecars } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type FormEditCarProps = {
  carData: Bobecars;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
