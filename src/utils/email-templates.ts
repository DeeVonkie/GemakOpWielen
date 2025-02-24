import type { ContactFormData, BookingFormData } from '../types/forms';

export function getContactEmailTemplate(data: ContactFormData): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 40px;}
        h1 { color: #16409A; margin-bottom: 20px; }
        h2 { color: #16409A; margin-bottom: 15px; }
        .section { background: #f8f9fa; padding: 25px; margin-bottom: 20px; border-radius: 10px; }
        strong { color: #16409A; }
        .button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #16409A;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #0d2a6d;
        }
      </style>
    </head>
    <body>
      <h1><strong>Nieuwe contactaanvraag via de website</strong> </h1>
      <p>Er is een nieuw contactformulier ingediend via de website van Gemak op Wielen. Reageer via de onderstaande knop.</p>
      
      <div class="section">
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefoon:</strong> ${data.phone}</p>
      </div>

      <div class="section">
        <h2>Bericht:</h2>
        <p>${data.message}</p>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}" class="button">Reageer op dit bericht</a>
      </div>
    </body>
    </html>
  `;
}

export function getBookingEmailTemplate(data: BookingFormData): string {
    const extraServices = [
        data.cleaning && 'Schoonmaakservice',
        data.septictank && 'Septictank',
        data.generator && 'Stroomaggregaat',
    ].filter(Boolean).join(', ');

    data.startDate = new Date(data.startDate).toLocaleDateString('nl-NL');
    data.endDate = new Date(data.endDate).toLocaleDateString('nl-NL');

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 40px;}
        h1 { color: #16409A; margin-bottom: 20px; }
        h2 { color: #16409A; margin-bottom: 15px; }
        .section { background: #f8f9fa; padding: 25px; margin-bottom: 20px; border-radius: 10px; }
        strong { color: #16409A; }
        .button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #16409A;
          border-radius: 5px;
          text-decoration: none;
        }
        .button:hover {
          background-color: #0d2a6d;
        }
      </style>
    </head>
    <body>
      <h1><strong>Nieuwe Boekingsaanvraag</strong></h1>
      <p>Er is een nieuwe boekingsaanvraag ingediend via de website van Gemak op Wielen. Reageer via de onderstaande knop.</p>
      
      <div class="section">
        <h2>Aanvraag Details</h2>
        <p><strong>Trailer:</strong> ${data.trailerLabel}</p>
        <p><strong>Datum:</strong> ${data.startDate} - ${data.endDate}</p>
        <p><strong>Tijd:</strong> ${data.startTime} - ${data.endTime}</p>
        <p><strong>Type Evenement:</strong> ${data.eventTypeLabel}</p>
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

      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${data.email}" class="button">Reageer op dit bericht</a>
      </div>
    </body>
    </html>
  `;
}