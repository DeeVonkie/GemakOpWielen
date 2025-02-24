import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C9eqCq_8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$TrailerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrailerCard;
  const { title, description, features, images, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(images[0], "src")}${addAttribute(title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h3 class="text-xl font-semibold text-gray-900">${title}</h3> <p class="mt-2 text-gray-600">${description}</p> <ul class="mt-4 space-y-2"> ${features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="h-5 w-5 text-primary-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> <div class="mt-6 flex space-x-3"> <a${addAttribute(`/toiletwagens/${slug}`, "href")} class="flex-1 text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-700 hover:bg-primary-800">
Meer info
</a> <a${addAttribute(`/boeken?trailer=${slug}`, "href")} class="flex-1 text-center px-4 py-2 border border-primary-700 rounded-md shadow-sm text-sm font-medium text-primary-700 bg-white hover:bg-primary-50">
Direct boeken
</a> </div> </div> </div>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerCard.astro", void 0);

export { $$TrailerCard as $ };
