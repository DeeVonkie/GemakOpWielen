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
      'Centrale verwarming voor optimaal comfort',
      'LED-verlichting met sfeervolle accenten',
      'Luxe interieur met hoogwaardige afwerking',
      'Ruime, goed verlichte spiegels',
      'Anti-slip vloer voor extra veiligheid',
      'Automatische ventilatie',
      'Energiezuinig systeem'
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
      day: 295,
      weekend: 495,
      week: 1195,
    },
    images: ['/images/vip-trailer.jpg'],
    slug: 'luxe-4p',
  },
];

export function getTrailerBySlug(slug: string): Trailer | undefined {
  return trailers.find((trailer) => trailer.slug === slug);
}