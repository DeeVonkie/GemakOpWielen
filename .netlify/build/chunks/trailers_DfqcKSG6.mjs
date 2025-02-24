const trailers = [
  {
    id: "luxe-4p",
    title: "Luxe 4-persoons",
    description: "Onze handgebouwde toiletwagen met hoogwaardige afwerking en comfort voor allerlei evenementen. Perfect voor bijeenkomsten waar comfort en luxe belangrijk zijn.",
    features: [
      "4 individuele toiletten met wastafel",
      "Standaard geleverd met 16 rollen toiletpapier",
      "Ruime hokjes voor ieders gemak",
      // 'Centrale verwarming voor optimaal comfort',
      "Ingebouwde muziekinstallatie",
      "Sfeervolle LED-spots",
      "Toevoer via een tuinslang",
      "Afvoer via het riool"
    ],
    finished: false,
    specifications: {
      toilets: 4,
      sinks: 4,
      length: 4.2,
      width: 2.2,
      height: 3,
      power: "230V - 16A",
      water: '3/4" aansluiting'
    },
    pricing: {
      day: 295,
      weekend: 695,
      week: 495,
      btw: "incl."
    },
    images: [
      "/images/luxe-4p-wip.jpg",
      "/images/in-aanbouw.png",
      "/images/luxe-4p-wip.jpg",
      "/images/luxe-4p-wip.jpg",
      "/images/in-aanbouw.png"
    ],
    slug: "luxe-4p"
  }
];

export { trailers as t };
