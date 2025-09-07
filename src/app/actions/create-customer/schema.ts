import z from "zod";

export const createCustomerSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string().optional(),
});

export type CreateCustomerData = z.infer<typeof createCustomerSchema>;
