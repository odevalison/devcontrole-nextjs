import z from "zod";

export const deleteCustomerSchema = z.object({
  customerId: z.string(),
});

export type DeleteCustomerSchema = z.infer<typeof deleteCustomerSchema>;
