import type { ContactFormData } from '../types/forms';

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