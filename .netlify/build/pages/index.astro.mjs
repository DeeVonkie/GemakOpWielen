/* empty css                               */
import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, i as renderComponent } from '../chunks/astro/server_C9eqCq_8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CgPRQ0T8.mjs';
import { $ as $$TrailerCard } from '../chunks/TrailerCard_CjY-g7NL.mjs';
import 'clsx';
import { t as trailers } from '../chunks/trailers_DfqcKSG6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$FeaturedTrailerFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedTrailerFeatures;
  const { features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-8"> <h4 class="text-lg font-semibold text-gray-900 mb-4">Belangrijkste kenmerken</h4> <ul class="space-y-3"> ${features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="h-5 w-5 text-primary-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${feature}</span> </li>`)} </ul> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/FeaturedTrailerFeatures.astro", void 0);

const $$Astro = createAstro();
const $$SingleFeaturedTrailer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SingleFeaturedTrailer;
  const { trailer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-0"> <div class="relative h-[400px] lg:h-full"> <img${addAttribute(trailer.images[0], "src")}${addAttribute(trailer.title, "alt")} class="absolute inset-0 w-full h-full object-cover"> <div class="absolute inset-0"></div> </div> <div class="p-8 lg:p-12 flex flex-col justify-between"> <div> <h3 class="text-2xl font-bold text-gray-900">${trailer.title}</h3> <p class="mt-4 text-lg text-gray-600">${trailer.description}</p> ${renderComponent($$result, "FeaturedTrailerFeatures", $$FeaturedTrailerFeatures, { "features": trailer.features.slice(0, 4) })} </div> <div class="mt-8 flex flex-col sm:flex-row gap-4"> <a${addAttribute(`/toiletwagens/${trailer.slug}`, "href")} class="flex-1 text-center px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors duration-200">
Meer info
</a> <a${addAttribute(`/boeken?trailer=${trailer.slug}`, "href")} class="flex-1 text-center px-6 py-3 border-2 border-primary-700 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200">
Direct boeken
</a> </div> </div> </div> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/SingleFeaturedTrailer.astro", void 0);

const $$FeaturedTrailers = createComponent(($$result, $$props, $$slots) => {
  const featuredTrailers = trailers.slice(0, 3);
  const getTitle = (count) => {
    if (count === 1) return "Onze luxe toiletwagen";
    if (count === 2) return "Onze toiletwagens";
    return "Onze populairste toiletwagens";
  };
  const getDescription = (count) => {
    if (count === 1) return "Ontdek onze hoogwaardige mobiele toiletwagen.";
    if (count === 2) return "Ondek ons aanbod van mobiele toiletwagens.";
    return "Ontdek onze meest geboekte mobiele toiletwagens.";
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl"> ${getTitle(featuredTrailers.length)} </h2> <p class="mt-4 text-xl text-gray-600"> ${getDescription(featuredTrailers.length)} </p> </div> <div class="mt-12"> ${featuredTrailers.length === 1 ? renderTemplate`${renderComponent($$result, "SingleFeaturedTrailer", $$SingleFeaturedTrailer, { "trailer": featuredTrailers[0] })}` : featuredTrailers.length === 2 ? renderTemplate`<div class="max-w-5xl mx-auto"> <div class="grid md:grid-cols-2 gap-8"> ${featuredTrailers.map((trailer) => renderTemplate`<div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"> <div class="relative h-64"> <img${addAttribute(trailer.images[0], "src")}${addAttribute(trailer.title, "alt")} class="absolute inset-0 w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-xl font-bold text-gray-900">${trailer.title}</h3> <p class="mt-2 text-gray-600">${trailer.description}</p> <ul class="mt-4 space-y-2"> ${trailer.features.slice(0, 3).map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="h-5 w-5 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> <div class="mt-6 flex space-x-3"> <a${addAttribute(`/toiletwagens/${trailer.slug}`, "href")} class="flex-1 text-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800">
Meer info
</a> <a${addAttribute(`/boeken?trailer=${trailer.slug}`, "href")} class="flex-1 text-center px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50">
Direct boeken
</a> </div> </div> </div>`)} </div> </div>` : renderTemplate`<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${featuredTrailers.map((trailer) => renderTemplate`${renderComponent($$result, "TrailerCard", $$TrailerCard, { ...trailer })}`)} </div>`} </div> </div> </section>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/FeaturedTrailers.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="max-w-7xl mx-auto"> <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="sm:text-center lg:text-left py-16 lg:py-24"> <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"> <span class="block">Mobiel sanitair voor</span> <span class="block text-primary-700">elk evenement</span> </h1> <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
Een moderne en betrouwbare toiletwagen voor elke gelegenheid. Van kleine feesten tot grote evenementen.
</p> <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"> <div class="rounded-md shadow"> <a href="/toiletwagens" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 md:py-4 md:text-lg md:px-10">
Bekijk toiletwagens
</a> </div> <div class="mt-3 sm:mt-0 sm:ml-3"> <a href="/boeken" class="w-full flex items-center justify-center px-8 py-3 border border-primary-700 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10">
Direct boeken
</a> </div> </div> </div> </main> </div> </div> ${renderComponent($$result2, "FeaturedTrailers", $$FeaturedTrailers, {})} <section class="py-12 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="lg:text-center"> <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> <span class="block">Waarom kiezen voor</span> <span class="block text-primary-700">Gemak op Wielen?</span> </h2> <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
Handgemaakt met oog voor detail en voorzien van alle gemakken.
</p> </div> <div class="mt-12"> <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"> <div class="flex flex-col items-center"> <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white"> <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path> </svg> </div> <div class="mt-5"> <h3 class="text-lg font-medium text-gray-900">Moderne uitstraling</h3> <p class="mt-2 text-base text-gray-500">
Onze toiletwagen is voorzien een moderne en sfeervolle afwerking.
</p> </div> </div> <div class="flex flex-col items-center"> <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white"> <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path> </svg> </div> <div class="mt-5"> <h3 class="text-lg font-medium text-gray-900">Handgemaakt</h3> <p class="mt-2 text-base text-gray-500">
Onze toiletwagen is authentiek en met alle gemakken voorzien.
</p> </div> </div> <div class="flex flex-col items-center"> <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white"> <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path> </svg> </div> <div class="mt-5"> <h3 class="text-lg font-medium text-gray-900">Ontzorging</h3> <p class="mt-2 text-base text-gray-500">
Wij zorgen voor de levering en installatie van de toiletwagen.
</p> </div> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/pages/index.astro", void 0);

const $$file = "/Users/demianvonk/Documents/GemakOpWielen/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
