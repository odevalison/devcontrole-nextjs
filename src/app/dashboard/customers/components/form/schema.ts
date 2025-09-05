import { z } from "zod";

export const newCustomerFormSchema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  phone: z
    .string()
    .nonempty("O campo telefone é obrigatório")
    .refine(
      (fieldValue) =>
        /^(?:\(\d{2}\)\s?)9\d{8}$/.test(fieldValue) ||
        /^\d{2}\s?9\d{8}$/.test(fieldValue),
      { error: "Informe um telefone válido" },
    )
    .transform((field) => field.replace(/[^\w]/g, "")),
  email: z
    .email("Informe um e-mail válido")
    .nonempty("O campo e-mail é obrigatório"),
  address: z.string().optional(),
});

export type NewCustomerFormData = z.infer<typeof newCustomerFormSchema>;
