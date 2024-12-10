import type { APIRoute } from 'astro';
import { sendContactEmail } from '../../utils/mailer';
import type { ContactFormData } from '../../types/forms';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json() as ContactFormData;

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return new Response(
          JSON.stringify({
            success: false,
            error: 'Alle velden zijn verplicht'
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
          JSON.stringify({
            success: false,
            error: 'Ongeldig e-mailadres'
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );
    }

    await sendContactEmail(data);

    return new Response(
        JSON.stringify({
          success: true,
          message: 'Bericht succesvol verzonden'
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return new Response(
        JSON.stringify({
          success: false,
          error: 'Er is een fout opgetreden bij het versturen van het bericht'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );
  }
};