/* empty css                               */
import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9eqCq_8.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CgPRQ0T8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { searchParams } = Astro2.url;
  const errorMessage = searchParams.get("message");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oeps! Pagina niet gevonden", "description": "De pagina die u zoekt bestaat niet." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="max-w-7xl mx-auto"> <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="sm:text-center lg:text-left py-16 lg:py-24"> <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"> <span class="block">Oeps!</span> <span class="block text-primary-700">pagina niet gevonden</span> </h1> <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
De pagina die u zoekt bestaat niet. Controleer het webadres of ga terug naar de homepage.
</p> <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-sm lg:mx-0"> <span class="font-semibold">Foutmelding:</span> Error 404${errorMessage && " | " + errorMessage || ""} </p> <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"> <div class="rounded-md shadow"> <a href="/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 md:py-4 md:text-lg md:px-10">
Terug naar de homepagina
</a> </div> </div> </div> </main> </div> </div> ` })}`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/pages/404.astro", void 0);

const $$file = "/Users/demianvonk/Documents/GemakOpWielen/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
