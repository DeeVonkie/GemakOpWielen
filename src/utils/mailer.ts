import nodemailer from 'nodemailer';
import type { ContactFormData, BookingFormData } from '../types/forms';
import { getContactEmailTemplate, getBookingEmailTemplate } from './email-templates';

function createMailTransporter() {
    return nodemailer.createTransport({
        host: import.meta.env.SMTP_HOST,
        port: parseInt(import.meta.env.SMTP_PORT || '587'),
        secure: import.meta.env.SMTP_SECURE === 'true',
        auth: {
            user: import.meta.env.SMTP_USER,
            pass: import.meta.env.SMTP_PASSWORD,
        },
    });
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
    const transporter = createMailTransporter();
    const emailContent = getContactEmailTemplate(data);

    await transporter.sendMail({
        from: '"Gemak op Wielen Website" <noreply@gemakopwielen.nl>',
        to: 'info@gemakopwielen.nl',
        subject: 'Nieuw Contactformulier Bericht',
        html: emailContent,
    });
}

export async function sendBookingEmail(data: BookingFormData): Promise<void> {
    const transporter = createMailTransporter();
    const emailContent = getBookingEmailTemplate(data);

    await transporter.sendMail({
        from: '"Gemak op Wielen Website" <noreply@gemakopwielen.nl>',
        to: 'info@gemakopwielen.nl',
        subject: `Nieuwe Boekingsaanvraag - ${data.trailer}`,
        html: emailContent,
    });
}