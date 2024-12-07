export interface Trailer {
  id: string;
  title: string;
  description: string;
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
  };
  images: string[];
  slug: string;
}

export const trailers: Trailer[] = [
  {
    id: 'luxe-4p',
    title: 'Luxe 4-persoons',
    description:
      'Onze eerste toiletwagen met hoogwaardige afwerking en comfort voor allerlei evenementen. Perfect voor kleinere bijeenkomsten waar comfort en luxe belangrijk zijn.',
    features: [
      '4 individuele toiletten met wastafel',
      'Ruime hokjes voor ieders gemak',
      'Centrale verwarming voor optimaal comfort',
      'Sfeervolle LED-verlichting',
      'Luxe interieur met hoogwaardige afwerking',
      'Toevoer via een tuinslang',
      'Afvoer via het riool'
    ],
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
      day: 350,
      weekend: 575,
      week: 1750,
    },
    images: ['/images/in-aanbouw.png'],
    slug: 'luxe-4p',
  },
];

export function getTrailerBySlug(slug: string): Trailer | undefined {
  return trailers.find((trailer) => trailer.slug === slug);
}