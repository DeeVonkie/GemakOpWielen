import nodemailer from 'nodemailer';
import type { ContactFormData, BookingFormData } from '../types/forms';
import { getContactEmailTemplate, getBookingEmailTemplate } from './email-templates';
import { SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_SECURE, SMTP_USER, getSecret } from "astro:env/server"

function createMailTransporter() {
    var smtpConfig = {
        host: getSecret('SMTP_HOST'),
        port: parseInt(getSecret('SMTP_PORT') || '587'),
        secure: getSecret('SMTP_SECURE') === 'true',
        auth: {
            user: getSecret('SMTP_USER'),
            pass: getSecret('SMTP_PASSWORD'),
        },
    };
    return nodemailer.createTransport(smtpConfig);
}

export const sendContactEmail = async (data: ContactFormData) => {
    const transporter = createMailTransporter();
    const emailContent = getContactEmailTemplate(data);

    const mailOptions = {
        from: '"Gemak op Wielen | Website" <noreply@gemakopwielen.nl>',
        to: 'info@gemakopwielen.nl',
        subject: `Nieuwe contactaanvraag van ${data.name}`,
        html: emailContent
    };

    await transporter.sendMail(mailOptions);
};

export const sendBookingEmail = async (data: BookingFormData) => {
    const transporter = createMailTransporter();
    const emailContent = getBookingEmailTemplate(data);

    const mailOptions = {
        from: '"Gemak op Wielen | Website" <noreply@gemakopwielen.nl>',
        to: 'info@gemakopwielen.nl',
        subject: `Nieuwe Boekingsaanvraag - ${data.trailerLabel}`,
        html: emailContent
    };

    await transporter.sendMail(mailOptions);
}