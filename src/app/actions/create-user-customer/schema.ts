import z from "zod";

export const createUserCustomerSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string().optional(),
});

export type CreateUserCustomerData = z.infer<typeof createUserCustomerSchema>;
