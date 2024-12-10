import type { APIRoute } from 'astro';
import { sendContactEmail } from '../../utils/mailer';
import type { ContactFormData } from '../../types/forms';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json() as ContactFormData;

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return new Response(
          JSON.stringify({ error: 'Alle velden zijn verplicht' }),
          { status: 400 }
      );
    }

    await sendContactEmail(data);

    return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return new Response(
        JSON.stringify({ error: 'Er is een fout opgetreden' }),
        { status: 500 }
    );
  }
};