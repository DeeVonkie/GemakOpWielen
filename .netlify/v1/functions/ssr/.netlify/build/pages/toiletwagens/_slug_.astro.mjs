/* empty css                                  */
import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, k as renderScript, i as renderComponent, h as addAttribute } from '../../chunks/astro/server_C9eqCq_8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CgPRQ0T8.mjs';
import 'clsx';
/* empty css                                     */
import { t as trailers } from '../../chunks/trailers_DfqcKSG6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TrailerSpecifications = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TrailerSpecifications;
  const { specifications } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow overflow-hidden sm:rounded-lg"> <div class="px-6 py-5 sm:px-8"> <h3 class="text-lg leading-6 font-medium text-gray-900">Specificaties</h3> </div> <div class="border-t border-gray-200"> <dl> <div class="bg-gray-50 px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8"> <dt class="text-sm font-medium text-gray-500">Toiletten</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${specifications.toilets}</dd> </div> <div class="bg-white px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8"> <dt class="text-sm font-medium text-gray-500">Wastafels</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${specifications.sinks}</dd> </div> <div class="bg-gray-50 px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8"> <dt class="text-sm font-medium text-gray-500">Afmetingen</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> ${specifications.length}m x ${specifications.width}m x ${specifications.height}m
</dd> </div> <div class="bg-white px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8"> <dt class="text-sm font-medium text-gray-500">Stroomvoorziening</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${specifications.power}</dd> </div> <div class="bg-gray-50 px-6 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8"> <dt class="text-sm font-medium text-gray-500">Wateraansluiting</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${specifications.water}</dd> </div> </dl> </div> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerSpecifications.astro", void 0);

const $$TrailerFAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Wat zijn de leveringsvoorwaarden?",
      answer: "Wij leveren en plaatsen de trailer op de door u gewenste locatie. De locatie moet goed bereikbaar zijn en er moet voldoende ruimte zijn om de trailer te plaatsen. De ondergrond moet vlak en stevig zijn."
    },
    {
      question: "Hoe werkt de wateraansluiting?",
      answer: 'De trailer heeft een standaard 3/4" wateraansluiting nodig. Als er geen wateraansluiting beschikbaar is, kunnen we ook een watertank plaatsen (meerprijs).'
    },
    {
      question: "Wat zijn de stroomvereisten?",
      answer: "De trailer heeft een 230V - 16A stroomaansluiting nodig. Bij geen stroomvoorziening kunnen wij een aggregaat verzorgen (meerprijs)."
    },
    {
      question: "Is er schoonmaakservice beschikbaar?",
      answer: "Ja, wij zorgen dat de toiletwagen na uw boeking wordt schoongemaakt. Dit zit in de totaalprijs inbegrepen. Wilt u de toiletwagen tussentijds schoon laten maken? Geef dit aan bij uw boeking, dan kijken we wat de mogelijkheden zijn."
    },
    {
      question: "Wat gebeurt er bij een storing?",
      answer: "Mocht u te maken krijgen met een storing of defect, neem dan zo snel mogelijk contact op met +31 6 81 52 81 59. Wij proberen u dan zo snel mogelijk te helpen."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white shadow overflow-hidden sm:rounded-lg mt-16" data-astro-cid-udm7rmtg> <div class="px-6 py-5 sm:px-8" data-astro-cid-udm7rmtg> <h3 class="text-lg leading-6 font-medium text-gray-900" data-astro-cid-udm7rmtg>Veelgestelde Vragen</h3> </div> <div class="border-t border-gray-200" data-astro-cid-udm7rmtg> <dl class="divide-y divide-gray-200" data-astro-cid-udm7rmtg> ${faqs.map((faq, index) => renderTemplate`<div class="faq-item" data-astro-cid-udm7rmtg> <button type="button" class="w-full px-6 py-6 sm:px-8 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors" aria-expanded="false" data-astro-cid-udm7rmtg> <dt class="text-sm font-medium text-gray-900" data-astro-cid-udm7rmtg>${faq.question}</dt> <span class="ml-6 h-7 flex items-center" data-astro-cid-udm7rmtg> <svg class="rotate-0 h-6 w-6 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-udm7rmtg> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-udm7rmtg></path> </svg> </span> </button> <dd class="answer-wrapper overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out" data-astro-cid-udm7rmtg> <div class="px-6 pt-4 pb-6 sm:px-8" data-astro-cid-udm7rmtg> <p class="text-sm text-gray-600" data-astro-cid-udm7rmtg>${faq.answer}</p> </div> </dd> </div>`)} </dl> </div> </div> ${renderScript($$result, "/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerFAQ.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerFAQ.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const trailer = trailers.find((trailer2) => trailer2.slug === slug);
  if (!trailer) {
    const errorMessage = `Trailer with slug "${slug}" not found.`;
    return Astro2.redirect("/404?message=" + errorMessage);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": trailer.title, "description": trailer.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start"> <!-- Image gallery --> <div class="flex flex-col"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden sm:col-span-2"> <img${addAttribute(trailer.images[0], "src")}${addAttribute(trailer.title, "alt")} class="w-full h-full object-center object-cover cursor-pointer" onclick="openImageViewer(0)"> </div> ${trailer.images.slice(1, 3).map((image, index) => renderTemplate`<div${addAttribute(index, "key")} class="w-full aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(`${trailer.title} - ${index + 2}`, "alt")} class="w-full h-full object-center object-cover cursor-pointer"${addAttribute(`openImageViewer(${index + 1})`, "onclick")}> </div>`)} </div> ${trailer.images.length > 3 && renderTemplate`<button id="view-more-images" class="mt-4 px-4 py-2 flex-1 text-center px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50 self-start"> <strong>+</strong> Bekijk nog ${trailer.images.length - 3 === 1 && "1 foto's"} ${trailer.images.length - 3 > 1 && trailer.images.length - 3 + " foto's"} </button>`} </div> <!-- Trailer info --> <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"> <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">${trailer.title}</h1> <div class="mt-3"> <p class="text-lg text-gray-600">${trailer.description}</p> </div> <!-- Pricing Section --> <div class="mt-8 border-t border-gray-200 pt-8"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Tarieven</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200"> <h3 class="text-lg font-medium text-gray-900">Per dag</h3> <p class="mt-2 text-2xl font-bold text-primary-700">€${trailer.pricing.day}</p> <p class="mt-1 text-sm text-gray-500">${trailer.pricing.btw} BTW</p> </div> <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200"> <h3 class="text-lg font-medium text-gray-900">Per weekend</h3> <p class="mt-2 text-2xl font-bold text-primary-700">€${trailer.pricing.weekend}</p> <p class="mt-1 text-sm text-gray-500">${trailer.pricing.btw} BTW</p> </div> <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200"> <h3 class="text-lg font-medium text-gray-900">Per week</h3> <p class="mt-2 text-2xl font-bold text-primary-700">€${trailer.pricing.week}</p> <p class="mt-1 text-sm text-gray-500">${trailer.pricing.btw} BTW</p> </div> </div> </div> <div class="mt-8 border-t border-gray-200 pt-8"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Kenmerken</h2> <div class="mt-4"> <ul class="space-y-2"> ${trailer.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="h-5 w-5 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> </div> </div> <div class="mt-6 flex space-x-3"> <a${addAttribute(`/boeken?trailer=${trailer.slug}`, "href")} class="flex-1 text-center px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800">
Direct boeken
</a> <a href="/contact" class="flex-1 text-center px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50">
Contact opnemen
</a> </div> </div> </div> <div class="mt-16"> ${renderComponent($$result2, "TrailerSpecifications", $$TrailerSpecifications, { "specifications": trailer.specifications })} </div> ${renderComponent($$result2, "TrailerFAQ", $$TrailerFAQ, {})} </div>  <div id="image-viewer-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden z-50 p-4"> <div class="relative max-w-full w-full md:max-w-3xl mx-auto"> <button id="close-image-viewer" class="absolute top-2 right-2 text-white text-2xl">&times;</button> <div class="relative w-full flex items-center justify-center"> <button id="prev-image" class="absolute left-2 text-white text-2xl bg-primary-700 hover:bg-primary-800 rounded-full p-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <img id="image-viewer-image" src="" alt="Image Viewer" class="max-w-full max-h-full rounded-lg mx-auto"> <button id="next-image" class="absolute right-2 text-white text-2xl bg-primary-700 hover:bg-primary-800 rounded-full p-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> </div> ` })} ${renderScript($$result, "/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/[slug].astro", void 0);

const $$file = "/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/[slug].astro";
const $$url = "/toiletwagens/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
