import type { APIRoute } from 'astro';
import { sendBookingEmail } from '../../utils/email';
import { getTrailerBySlug } from '../../data/trailers';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const trailer = getTrailerBySlug(data.trailer);

    if (!trailer) {
      return new Response(JSON.stringify({ error: 'Trailer niet gevonden' }), {
        status: 400,
      });
    }

    await sendBookingEmail(data, trailer);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error submitting booking:', error);
    return new Response(JSON.stringify({ error: 'Er is een fout opgetreden' }), {
      status: 500,
    });
  }
};