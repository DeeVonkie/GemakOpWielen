import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(1, 'Naam is verplicht'),
    email: z.string().email('Ongeldig e-mailadres'),
    phone: z.string().min(1, 'Telefoonnummer is verplicht'),
    message: z.string().min(1, 'Bericht is verplicht')
});

export const bookingFormSchema = z.object({
    trailer: z.string().min(1, 'Selecteer een trailer'),
    startDate: z.string().min(1, 'Startdatum is verplicht'),
    endDate: z.string().min(1, 'Einddatum is verplicht'),
    eventType: z.string().min(1, 'Type evenement is verplicht'),
    expectedGuests: z.number().min(1, 'Aantal gasten is verplicht'),
    location: z.string().min(1, 'Locatie is verplicht'),
    cleaning: z.boolean(),
    watertank: z.boolean(),
    generator: z.boolean(),
    firstName: z.string().min(1, 'Voornaam is verplicht'),
    lastName: z.string().min(1, 'Achternaam is verplicht'),
    email: z.string().email('Ongeldig e-mailadres'),
    phone: z.string().min(1, 'Telefoonnummer is verplicht'),
    comments: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;