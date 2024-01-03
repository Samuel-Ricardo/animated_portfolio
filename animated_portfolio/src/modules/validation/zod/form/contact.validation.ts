import { z } from "zod";

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof CONTACT_FORM_SCHEMA>;
