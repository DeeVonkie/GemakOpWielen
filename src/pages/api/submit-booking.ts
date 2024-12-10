import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { getTrailerBySlug } from '../../data/trailers';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    
    const trailer = getTrailerBySlug(data.trailer as string);
    if (!trailer) {
      return new Response(
        JSON.stringify({ error: 'Trailer niet gevonden' }), 
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASSWORD,
      },
    });

    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          h1 { color: #16409A; margin-bottom: 20px; }
          .section { background: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 5px; }
          strong { color: #16409A; }
        </style>
      </head>
      <body>
        <h1>Nieuwe Boekingsaanvraag - ${trailer.title}</h1>
        
        <div class="section">
          <h2>Evenement Details</h2>
          <p><strong>Startdatum:</strong> ${data.startDate}</p>
          <p><strong>Einddatum:</strong> ${data.endDate}</p>
          <p><strong>Type Evenement:</strong> ${data.eventType}</p>
          <p><strong>Verwacht Aantal Gasten:</strong> ${data.expectedGuests}</p>
          <p><strong>Locatie:</strong> ${data.location}</p>
        </div>

        <div class="section">
          <h2>Extra Services</h2>
          <p><strong>Schoonmaakservice:</strong> ${data.cleaning ? 'Ja' : 'Nee'}</p>
          <p><strong>Extra Watertank:</strong> ${data.watertank ? 'Ja' : 'Nee'}</p>
          <p><strong>Stroomaggregaat:</strong> ${data.generator ? 'Ja' : 'Nee'}</p>
        </div>

        <div class="section">
          <h2>Contactgegevens</h2>
          <p><strong>Naam:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefoon:</strong> ${data.phone}</p>
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

    return new Response(
      JSON.stringify({ success: true }), 
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting booking:', error);
    return new Response(
      JSON.stringify({ error: 'Er is een fout opgetreden' }), 
      { status: 500 }
    );
  }
};