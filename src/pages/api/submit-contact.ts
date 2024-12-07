import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

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
        <h1>Nieuw Contactformulier Bericht</h1>
        
        <div class="section">
          <p><strong>Naam:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefoon:</strong> ${data.phone}</p>
        </div>

        <div class="section">
          <h2>Bericht:</h2>
          <p>${data.message}</p>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: '"Gemak op Wielen Website" <noreply@gemakopwielen.nl>',
      to: 'info@gemakopwielen.nl',
      subject: 'Nieuw Contactformulier Bericht',
      html: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return new Response(JSON.stringify({ error: 'Er is een fout opgetreden' }), {
      status: 500,
    });
  }
};