import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  km: z.string().min(2).max(50),
  transmission: z.string().min(2).max(50),
  photo: z.string().min(2).max(100),
  engine: z.string().min(2).max(50),
  type: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  isPublish: z.boolean(),
});
