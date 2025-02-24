export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface BookingFormData {
    trailer: string;
    trailerLabel: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    eventType: string;
    eventTypeLabel: string;
    expectedGuests: string;
    location: string;
    cleaning: boolean;
    septictank: boolean;
    generator: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    comments?: string;
}