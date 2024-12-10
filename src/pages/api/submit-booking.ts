import type { APIRoute } from 'astro';
import { bookingFormSchema } from '../../utils/validation';
import { sendBookingEmail } from '../../utils/mailer';
import { ZodError } from 'zod';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate the form data
    const validatedData = bookingFormSchema.parse({
      ...data,
      expectedGuests: parseInt(data.expectedGuests)
    });

    // Send the email
    await sendBookingEmail(validatedData);

    return new Response(
        JSON.stringify({
          success: true,
          message: 'Boeking succesvol verzonden'
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
    }

    return new Response(
        JSON.stringify({
          success: false,
          error: 'Er is een fout opgetreden bij het versturen van de boeking'
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