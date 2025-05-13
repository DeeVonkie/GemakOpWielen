export const contactDetails = {
    website: 'https://www.gemakopwielen.nl',
    phone: {
        label: '+31 6 81 52 81 59',
        href: 'tel:+31681528159',
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

    jorgos: {
      function: 'Mede-eigenaar & Administratie',
      email: {
        label: 'jorgos@gemakopwielen.nl',
        href: 'mailto:jorgos@gemakopwielen.nl',
      },
      phone: {
        label: '+31 6 81 52 81 59',
        href: 'tel:+31681528159',
      }
    },
    tom: {
      function: 'Mede-eigenaar & Operations',
      email: {
        label: 'tom@gemakopwielen.nl',
        href: 'mailto:tom@gemakopwielen.nl',
      },
      phone: {
        label: '+31 6 12 17 87 93',
        href: 'tel:+31612178793',
      }
    },
    demian: {
      function: 'Mede-eigenaar & Marketing',
      email: {
        label: 'demian@gemakopwielen.nl',
        href: 'mailto:demian@gemakopwielen.nl',
      },
      phone: {
        label: '+31 6 83 99 04 61',
        href: 'tel:+3183990461',
      }
    },
}

export const frequentlyAskedQuestions = [
    {
      question: "Wat zijn de leveringsvoorwaarden?",
      answer: "Wij leveren de toiletwagen schoon af en plaatsen deze op de door u gewenste locatie. De locatie moet goed bereikbaar zijn en er moet voldoende ruimte zijn om de trailer te plaatsen. De ondergrond moet vlak en stevig zijn. Bij retour verwachten wij dat de toiletwagen in dezelfde staat wordt opgeleverd als bij levering."
    },
    {
      question: "Hoe werkt de wateraansluiting?",
      answer: "De toiltwagen heeft een standaard 3/4\" wateraansluiting nodig. Dit is dus een tuinslang aansluiting, deze moet binnen 20 meter van de toiletwagen aanwezig zijn."
    },
    {
        question: "Waar gaat het afvalwater naartoe?",
        answer: "Doordat de toiletwagen voorzien is van een interne vermaalpomp, kan het afvalwater binnen 15 meter op het riool worden aangesloten. Het afvalwater loos je op een plaats waar dat mag. Vraag dit na bij de milieudienst van de lokale overheid. Afvalwater mag nooit bij hemelwater terechtkomen. Geen rioolaansluiting in de buurt? Dan kunnen wij een septictank verzorgen (meerprijs)."
      },
    {
      question: "Wat zijn de stroomvereisten?",
      answer: "De toiletwagen heeft een 230V - 16A stroomaansluiting. De kar kan op een normaal stopcontact aangesloten worden. Let wel op dat er genoeg stroom beschikbaar is op de groep. Bij geen stroomvoorziening kunnen wij een aggregaat verzorgen (meerprijs)."
    },
    {
      question: "Hoe werkt de muziekinstallatie?",
      answer: "De toiletwagen is voorzien van een muziekinstallatie. Deze kan via Bluetooth verbonden worden met uw device, maar is ook direct te verbinden via tulp, 3.5mm jack of XLR. Zo kunt u uw eigen muziek doorkoppelen naar onze toiletwagen."
    },
    {
      question: "Is er schoonmaakservice beschikbaar?",
      answer: "Ja, wij zorgen dat de toiletwagen na uw boeking wordt schoongemaakt. Dit zit in de totaalprijs inbegrepen. Bij retour verwachten wij wel dat de toiletwagen in dezelfde staat wordt opgeleverd als bij levering. Wilt u de toiletwagen tussentijds schoon laten maken? Geef dit aan bij uw boeking, dan kijken we wat de mogelijkheden zijn."
    },
    {
        question: "Rekenen jullie voorrijkosten?",
        answer: "Binnen een straal van 10 kilometer vanaf Zierikzee rekenen wij geen voorrijkosten. Daarbuiten rekenen wij €1,- per kilometer."
    },
    {
      question: "Wat gebeurt er bij een storing?",
      answer: "Mocht u te maken krijgen met een storing of defect, neem dan zo snel mogelijk contact op met het storingsnummer in de opdrachtovereenkomst. Wij proberen u dan zo snel mogelijk te helpen."
    }
  ];

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