export interface Trailer {
  id: string;
  title: string;
  description: string;
  finished: boolean;
  features: string[];
  specifications: {
    toilets: {
      men: number;
      women: number;
    };
    sinks: number;
    length: number;
    width: number;
    height: number;
    power: string;
    water: string;
  };
  pricing: {
    day: number;
    weekend: number;
    week: number;
    btw: string;
  };
  images: string[];
  slug: string;
}

export const trailers: Trailer[] = [
  {
    id: 'luxe-4p',
    title: 'Luxe 4-persoons',
    description:
      'Onze handgebouwde toiletwagen met hoogwaardige afwerking en comfort voor allerlei evenementen. Perfect voor bijeenkomsten waar comfort en luxe belangrijk zijn.',
    features: [
      '4 individuele toiletten met wastafel',
      'Sfeervolle afwerking en inrichting',
      'Ruime hokjes voor ieders gemak',
      // 'Centrale verwarming voor optimaal comfort',
      'Ingebouwde muziekinstallatie',
      'Standaard geleverd met 16 rollen toiletpapier',
      'Sfeervolle LED-spots',
      'Toevoer via een tuinslang',
      'Stroom via normale 230V stopcontact',
      'Afvoer via het riool'
    ],
    finished: false,
    specifications: {
      toilets: {
        men: 2,
        women: 2,
      },
      sinks: 4,
      length: 4.2,
      width: 2.1,
      height: 3.0,
      power: '230V - 16A (normaal stopcontact)',
      water: '3/4" aansluiting (tuinslang)',
    },
    pricing: {
      day: 295,
      weekend: 495,
      week: 695,
      btw: 'incl.',
    },
    images: [
      '/images/luxe-4p/1.jpg',
      '/images/luxe-4p/2.jpg',
      '/images/luxe-4p/3.jpg',
      '/images/luxe-4p/4.jpg',
      '/images/luxe-4p/5.jpg',
      '/images/luxe-4p/6.jpg',
      '/images/luxe-4p/7.jpg',
      '/images/luxe-4p/8.jpg',
      '/images/luxe-4p/9.jpg',
    ],
    slug: 'luxe-4p',
  },
];

export function getTrailerById(id: string): Trailer | undefined {
  return trailers.find((trailer) => trailer.id === id);
}