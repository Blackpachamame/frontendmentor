import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "Email Address is required" })
    .email({ message: "Please enter a valid email address" }),
  messageArea: z.string().min(1, { message: "This field is required" }),
  queryType: z.enum(["General Enquiry", "Support Request"], {
    required_error: "Please select a query type",
  }),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "To submit this form, please consent to being contacted",
    }),
  }),
});

export type FormValues = z.infer<typeof contactFormSchema>;
