import type { APIRoute } from 'astro';
import { bookingFormSchema } from '../../utils/validation';
import { sendBookingEmail } from '../../utils/mailer';
import { ZodError } from 'zod';

export async function POST({ request }) {
  try {
    const rawBody = await request.text();
    if (!rawBody) {
        throw new Error('Request body is empty');
    }

    const data = JSON.parse(rawBody);

    // Validate the form data
    const validatedData = bookingFormSchema.parse(data);

    // Send the email
    await sendBookingEmail(validatedData);

    return new Response(
        JSON.stringify({
          success: true,
          message: 'Boekingsaanvraag succesvol verzonden'
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );
  } catch (error) {
    console.error('Error submitting booking:', error);

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
    } else {

      return new Response(
          JSON.stringify({
            success: false,
            error: 'Er is een netwerkfout opgetreden, neem contact op via info@gemakopwielen.nl'
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );
    }
  }
};