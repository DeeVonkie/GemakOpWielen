import type { ContactFormData, BookingFormData } from '../types/forms';

export function getContactEmailTemplate(data: ContactFormData): string {
    return `
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
}

export function getBookingEmailTemplate(data: BookingFormData): string {
    const extraServices = [
        data.cleaning && 'Schoonmaakservice',
        data.watertank && 'Extra Watertank',
        data.generator && 'Stroomaggregaat',
    ].filter(Boolean).join(', ');

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        h1 { color: #16409A; margin-bottom: 20px; }
        h2 { color: #16409A; margin-top: 30px; margin-bottom: 15px; }
        .section { background: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 5px; }
        strong { color: #16409A; }
      </style>
    </head>
    <body>
      <h1>Nieuwe Boekingsaanvraag</h1>
      
      <div class="section">
        <h2>Evenement Details</h2>
        <p><strong>Trailer:</strong> ${data.trailer}</p>
        <p><strong>Startdatum:</strong> ${data.startDate}</p>
        <p><strong>Einddatum:</strong> ${data.endDate}</p>
        <p><strong>Type Evenement:</strong> ${data.eventType}</p>
        <p><strong>Verwacht Aantal Gasten:</strong> ${data.expectedGuests}</p>
        <p><strong>Locatie:</strong> ${data.location}</p>
      </div>

      <div class="section">
        <h2>Extra Services</h2>
        <p>${extraServices || 'Geen extra services geselecteerd'}</p>
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
}