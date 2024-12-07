import nodemailer from 'nodemailer';
import type { Trailer } from '../data/trailers';

interface BookingData {
  trailer: string;
  startDate: string;
  endDate: string;
  eventType: string;
  expectedGuests: number;
  location: string;
  cleaning: boolean;
  watertank: boolean;
  generator: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments?: string;
}

export async function sendBookingEmail(data: BookingData, trailer: Trailer) {
  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: parseInt(import.meta.env.SMTP_PORT || '587'),
    secure: import.meta.env.SMTP_SECURE === 'true',
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASSWORD,
    },
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('nl-NL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const extraServices = [
    data.cleaning && 'Schoonmaakservice',
    data.watertank && 'Extra Watertank',
    data.generator && 'Stroomaggregaat',
  ].filter(Boolean).join(', ');

  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        h1 { color: #16409A; margin-bottom: 20px; }
        h2 { color: #16409A; margin-top: 30px; margin-bottom: 15px; }
        ul { list-style: none; padding-left: 0; }
        li { margin-bottom: 10px; }
        strong { color: #16409A; }
        .section { background: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 5px; }
        .price { font-size: 1.2em; color: #16409A; }
      </style>
    </head>
    <body>
      <h1>Nieuwe Boekingsaanvraag - ${trailer.title}</h1>
      
      <div class="section">
        <h2>Evenement Details</h2>
        <ul>
          <li><strong>Startdatum:</strong> ${formatDate(data.startDate)}</li>
          <li><strong>Einddatum:</strong> ${formatDate(data.endDate)}</li>
          <li><strong>Type Evenement:</strong> ${data.eventType}</li>
          <li><strong>Verwacht Aantal Gasten:</strong> ${data.expectedGuests}</li>
          <li><strong>Locatie:</strong> ${data.location}</li>
        </ul>
      </div>

      <div class="section">
        <h2>Trailer Informatie</h2>
        <ul>
          <li><strong>Model:</strong> ${trailer.title}</li>
          <li><strong>Toiletten:</strong> ${trailer.specifications.toilets}</li>
          <li><strong>Wastafels:</strong> ${trailer.specifications.sinks}</li>
          <li><strong>Prijs per dag:</strong> <span class="price">${formatPrice(trailer.pricing.day)}</span></li>
          <li><strong>Prijs per weekend:</strong> <span class="price">${formatPrice(trailer.pricing.weekend)}</span></li>
          <li><strong>Prijs per week:</strong> <span class="price">${formatPrice(trailer.pricing.week)}</span></li>
        </ul>
      </div>

      <div class="section">
        <h2>Extra Services</h2>
        <p>${extraServices || 'Geen extra services geselecteerd'}</p>
      </div>

      <div class="section">
        <h2>Contactgegevens</h2>
        <ul>
          <li><strong>Naam:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Telefoon:</strong> ${data.phone}</li>
        </ul>
      </div>

      ${data.comments ? `
      <div class="section">
        <h2>Opmerkingen</h2>
        <p>${data.comments}</p>
      </div>
      ` : ''}
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: '"Gemak op Wielen Website" <noreply@gemakopwielen.nl>',
    to: 'info@gemakopwielen.nl',
    subject: `Nieuwe Boekingsaanvraag - ${trailer.title}`,
    html: emailContent,
  });
}