import { z } from "zod";

// Esquema para campos de texto
export const textFieldsSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email Address is required" }),
  message: z.string().min(1, { message: "This field is required" }),
});

// Esquema para campos de tipo checkbox o radio
export const optionsSchema = z.object({
  queryType: z.enum(["General Enquiry", "Support Request"], {
    required_error: "Please select a query type",
  }),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "To submit this form, please consent to being contacted",
    }),
  }),
});

// Esquema combinado para validaciones completas
export const contactFormSchema = textFieldsSchema.merge(optionsSchema);

// Tipos separados para diferentes propósitos
export type TextFields = z.infer<typeof textFieldsSchema>;
export type OptionsFields = z.infer<typeof optionsSchema>;
export type FormValues = z.infer<typeof contactFormSchema>;
