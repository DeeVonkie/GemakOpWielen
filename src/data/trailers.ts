export interface Trailer {
  id: string;
  title: string;
  description: string;
  finished: boolean;
  features: string[];
  specifications: {
    toilets: number;
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
      'Standaard geleverd met 16 rollen toiletpapier',
      'Ruime hokjes voor ieders gemak',
      // 'Centrale verwarming voor optimaal comfort',
      'Ingebouwde muziekinstallatie',
      'Sfeervolle LED-spots',
      'Toevoer via een tuinslang',
      'Afvoer via het riool'
    ],
    finished: false,
    specifications: {
      toilets: 4,
      sinks: 4,
      length: 4.2,
      width: 2.2,
      height: 3.0,
      power: '230V - 16A',
      water: '3/4" aansluiting',
    },
    pricing: {
      day: 295,
      weekend: 495,
      week: 695,
      btw: 'incl.',
    },
    images: [
      '/images/luxe-4p-wip.jpg',
      '/images/in-aanbouw.png',
      '/images/luxe-4p-wip.jpg',
      '/images/luxe-4p-wip.jpg',
      '/images/in-aanbouw.png'
    ],
    slug: 'luxe-4p',
  },
];

export function getTrailerById(id: string): Trailer | undefined {
  return trailers.find((trailer) => trailer.id === id);
}