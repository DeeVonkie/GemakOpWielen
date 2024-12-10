import type { APIRoute } from 'astro';
import { contactFormSchema } from '../../utils/validation';
import { sendContactEmail } from '../../utils/mailer';
import { ZodError } from 'zod';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate the form data
    const validatedData = contactFormSchema.parse(data);

    // Send the email
    await sendContactEmail(validatedData);

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

    if (error instanceof ZodError) {
      return new Response(
          JSON.stringify({
            success: false,
            error: error.errors[0].message
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );
    }

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