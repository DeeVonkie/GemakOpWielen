import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, 'Vul een geldige naam in.'),
    email: z.string().email('Vul een geldig e-mailadres in.'),
    phone: z.string().min(8, 'Vul een geldig telefoonnummer in.'),
    message: z.string().min(1, 'Vul een bericht in.')
});

export const bookingFormSchema = z.object({
    trailer: z.string().min(1, 'Selecteer een gewenste trailer.'),
    trailerLabel: z.string().optional(),
    startDate: z.string().min(1, 'Vul een startdatum in.'),
    endDate: z.string().min(1, 'Vul een einddatum in.'),
    startTime: z.string().min(1, 'Vul een starttijd in.'),
    endTime: z.string().min(1, 'Vul een eindtijd in.'),
    eventType: z.string().min(1, 'Selecteer een type evenement.'),
    eventTypeLabel: z.string().optional(),
    expectedGuests: z.string().min(1, 'Vul het aantal verwachte gasten in.'),
    location: z.string().min(2, 'Vul een locatie in.'),
    cleaning: z.boolean(),
    watertank: z.boolean(),
    generator: z.boolean(),
    firstName: z.string().min(2, 'Vul uw voornaam in.'),
    lastName: z.string().min(2, 'Vul uw achternaam in.'),
    email: z.string().email('Vul een geldig e-mailadres in.'),
    phone: z.string().min(8, 'Vul een telefoonnummer in.'),
    comments: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;