export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface BookingFormData {
    trailer: string;
    startDate: string;
    endDate: string;
    eventType: string;
    expectedGuests: number;
    location: string;
    cleaning: boolean;
    watertank: boolean;
    generator: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    comments?: string;
}