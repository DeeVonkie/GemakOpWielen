export interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    [key: string]: string;
}

export function validateForm(data: FormData): string[] {
    const errors: string[] = [];

    if (!data.name?.trim()) {
        errors.push('Naam is verplicht');
    }

    if (!data.email?.trim()) {
        errors.push('Email is verplicht');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push('Ongeldig emailadres');
    }

    if (!data.phone?.trim()) {
        errors.push('Telefoonnummer is verplicht');
    }

    if (!data.message?.trim()) {
        errors.push('Bericht is verplicht');
    }

    return errors;
}

export function handleFormSubmission(formData: FormData): void {
    // Store form data in localStorage
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    // Send email notification using mailto
    const subject = encodeURIComponent('Nieuw formulier ingediend');
    const body = encodeURIComponent(`
Naam: ${formData.name}
Email: ${formData.email}
Telefoon: ${formData.phone}
Bericht: ${formData.message}
  `);

    window.location.href = `mailto:info@gemakopwielen.nl?subject=${subject}&body=${body}`;
}