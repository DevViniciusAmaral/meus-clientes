import { lastDayOfMonth } from "date-fns";
import z from "zod";

export const clientFormSchema = z.object({
  name: z
    .string({ error: "Nome é obrigatório" })
    .min(3, "Mínimo de 3 caracteres"),

  billingDate: z
    .string({ error: "Data de cobrança é obrigatório" })
    .regex(/^\d{2}\/\d{2}$/, "Formato inválido")
    .refine(
      (value) => {
        const year = new Date().getFullYear();
        const [day, month] = value.split("/").map((value) => Number(value));

        const date = new Date(year, month, day);
        const validatedDay = day > 0 && day <= lastDayOfMonth(date).getDate();
        const validatedMonth = month > 0 && month <= 12;

        return validatedDay && validatedMonth;
      },
      { error: "Data de cobrança inválida" }
    ),
  isRecurrent: z.boolean().default(false).optional(),
});

export type ClientFormData = z.infer<typeof clientFormSchema>;
