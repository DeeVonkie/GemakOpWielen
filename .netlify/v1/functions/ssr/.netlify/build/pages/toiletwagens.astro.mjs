/* empty css                               */
import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, i as renderComponent } from '../chunks/astro/server_C9eqCq_8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CgPRQ0T8.mjs';
import { $ as $$TrailerCard } from '../chunks/TrailerCard_CjY-g7NL.mjs';
import 'clsx';
import { t as trailers } from '../chunks/trailers_DfqcKSG6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$TrailerFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TrailerFeatures;
  const { features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-8"> <h3 class="text-lg font-semibold text-gray-900">Kenmerken</h3> <ul class="mt-4 grid grid-cols-1 gap-4"> ${features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="h-5 w-5 text-primary-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-base">${feature}</span> </li>`)} </ul> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerFeatures.astro", void 0);

const $$Astro$1 = createAstro();
const $$TrailerPricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TrailerPricing;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-8"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Tarieven</h3> <div class="grid grid-cols-3 gap-4"> <div class="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"> <p class="text-sm text-gray-600">Per dag</p> <p class="mt-1 text-2xl font-bold text-primary-700">€${pricing.day}</p> <p class="text-xs text-gray-500">${pricing.btw} BTW</p> </div> <div class="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"> <p class="text-sm text-gray-600">Per weekend</p> <p class="mt-1 text-2xl font-bold text-primary-700">€${pricing.weekend}</p> <p class="text-xs text-gray-500">${pricing.btw} BTW</p> </div> <div class="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"> <p class="text-sm text-gray-600">Per week</p> <p class="mt-1 text-2xl font-bold text-primary-700">€${pricing.week}</p> <p class="text-xs text-gray-500">${pricing.btw} BTW</p> </div> </div> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerPricing.astro", void 0);

const $$Astro = createAstro();
const $$SingleTrailerDisplay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SingleTrailerDisplay;
  const { trailer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-lg overflow-hidden"> <div class="grid grid-cols-1 lg:grid-cols-2"> <div class="relative h-[500px] lg:h-auto"> <img${addAttribute(trailer.images[0], "src")}${addAttribute(trailer.title, "alt")} class="absolute inset-0 w-full h-full object-cover"> </div> <div class="p-8 lg:p-12"> <h2 class="text-3xl font-bold text-gray-900">${trailer.title}</h2> <p class="mt-4 text-lg text-gray-600">${trailer.description}</p> ${renderComponent($$result, "TrailerFeatures", $$TrailerFeatures, { "features": trailer.features })} ${renderComponent($$result, "TrailerPricing", $$TrailerPricing, { "pricing": trailer.pricing })} <div class="mt-8 flex space-x-4"> <a${addAttribute(`/toiletwagens/${trailer.slug}`, "href")} class="flex-1 text-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Meer Info
</a> <a${addAttribute(`/boeken?trailer=${trailer.slug}`, "href")} class="flex-1 text-center px-6 py-3 border border-primary-700 rounded-md shadow-sm text-base font-medium text-primary-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
Direct Boeken
</a> </div> </div> </div> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/SingleTrailerDisplay.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const getTitle = (count) => {
    if (count === 1) return "toiletwagen";
    return "toiletwagens";
  };
  const getDescription = (count) => {
    if (count === 1) return "Ontdek onze hoogwaardige mobiele toiletwagen voor uw evenement";
    return "Bekijk onze verschillende mobiele toiletwagens, geschikt voor elk type evenement";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": getTitle(trailers.length), "description": getDescription(trailers.length) }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center py-16 lg:py-24"> <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"> <span class="block">Onze kwalitatieve</span> <span class="block text-primary-700">${getTitle(trailers.length)}</span> </h1> <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"> ${getDescription(trailers.length)} </p> </div> </main> </div> <div class="mt-12"> ${trailers.length === 1 ? renderTemplate`${renderComponent($$result2, "SingleTrailerDisplay", $$SingleTrailerDisplay, { "trailer": trailers[0] })}` : trailers.length === 2 ? renderTemplate`<div class="max-w-5xl mx-auto"> <div class="grid md:grid-cols-2 gap-8"> ${trailers.map((trailer) => renderTemplate`<div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"> <div class="relative h-64"> <img${addAttribute(trailer.images[0], "src")}${addAttribute(trailer.title, "alt")} class="absolute inset-0 w-full h-full object-cover"> </div> <div class="p-6"> <h3 class="text-xl font-bold text-gray-900">${trailer.title}</h3> <p class="mt-2 text-gray-600">${trailer.description}</p> <ul class="mt-4 space-y-2"> ${trailer.features.slice(0, 3).map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="h-5 w-5 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> <div class="mt-6 flex space-x-3"> <a${addAttribute(`/toiletwagens/${trailer.slug}`, "href")} class="flex-1 text-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800">
Meer info
</a> <a${addAttribute(`/boeken?trailer=${trailer.slug}`, "href")} class="flex-1 text-center px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50">
Direct boeken
</a> </div> </div> </div>`)} </div> </div>` : renderTemplate`<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${trailers.map((trailer) => renderTemplate`${renderComponent($$result2, "TrailerCard", $$TrailerCard, { ...trailer })}`)} </div>`} </div> </div> ` })}`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/index.astro", void 0);

const $$file = "/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/index.astro";
const $$url = "/toiletwagens";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
