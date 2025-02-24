export const contactDetails = {
    website: 'https://www.gemakopwielen.nl',
    phone: {
        label: '+31 6 81 52 81 59',
        href: '+31681528159',
    },
    email: {
        label: 'info@gemakopwielen.nl',
        href: 'mailto:info@gemakopwielen.nl',
    },
    address: {
        street: 'Roggenplaat 63',
        postalCode: '4301 WZ',
        city: 'Zierikzee',
    },
    visitAdress: {
        street: 'Industrieweg 43',
        postalCode: '4301 RS',
        city: 'Zierikzee',
    },
    kvk: '93012322',
    btw: 'NL004997457B17',
    iban: 'NL79 KNAB 0775 7348 37',
}



export const eventTypeOptions = [
    { value: 'wedding', label: 'Bruiloft' },
    { value: 'private-party', label: 'Privéfeest' },
    { value: 'company-party', label: 'Bedrijfsfeest' },
    { value: 'event', label: 'Evenement' },
    { value: 'festival', label: 'Festival' },
    { value: 'construction', label: 'Bouwplaats' }
];

export function getLabelByValue(value: string) {
    const option = eventTypeOptions.find(option => option.value === value);
    return option ? option.label : undefined;
}