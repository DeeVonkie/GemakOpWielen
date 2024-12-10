import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(1, 'Naam is verplicht'),
    email: z.string().email('Ongeldig e-mailadres'),
    phone: z.string().min(1, 'Telefoonnummer is verplicht'),
    message: z.string().min(1, 'Bericht is verplicht')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;