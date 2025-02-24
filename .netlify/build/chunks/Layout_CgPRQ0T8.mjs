import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderScript, h as addAttribute, r as renderTemplate, l as renderHead, i as renderComponent, n as renderSlot } from './astro/server_C9eqCq_8.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                       */
import 'clsx';

const $$Astro$1 = createAstro();
const links = [
  { text: "Home", href: "/" },
  { text: "Toiletwagens", href: "/toiletwagens" },
  { text: "Over ons", href: "/over-ons" },
  { text: "Contact", href: "/contact" }
];
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const isActive = (href) => {
    if (href === "/") {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300" id="main-header"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-20"> <div class="flex"> <a href="/" class="flex items-center"> <img src="/images/logo-blue.png" alt="Gemak op Wielen Logo" class="h-14"> </a> </div> <div class="hidden sm:flex sm:space-x-8"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`relative inline-flex items-center px-1 pt-1 text-sm font-medium group ${isActive(link.href) ? "text-primary-700" : "text-gray-700 hover:text-primary-700"}`, "class")}> ${link.text} <span${addAttribute(`absolute bottom-0 left-0 w-full h-0.5 bg-primary-700 transform origin-left transition-transform duration-300 ease-out ${isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`, "class")}></span> </a>`)} </div> <div class="flex items-center sm:hidden"> <button type="button" class="text-gray-700 hover:text-primary-700" id="mobile-menu-button" aria-expanded="false"> <span class="sr-only">Open menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile menu --> <div class="sm:hidden hidden" id="mobile-menu"> <div class="pt-2 pb-3 space-y-1"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${isActive(link.href) ? "border-primary-700 text-primary-700 bg-primary-50" : "border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"}`, "class")}> ${link.text} </a>`)} </div> </div> </nav> </header> <!-- Spacer to prevent content from being hidden under fixed header --> <div class="h-20"></div> ${renderScript($$result, "/Users/demianvonk/Documents/GemakOpWielen/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/Header.astro", void 0);

const contactDetails = {
  phone: {
    label: "+31 6 81 52 81 59",
    href: "+31681528159"
  },
  email: {
    label: "info@gemakopwielen.nl",
    href: "mailto:info@gemakopwielen.nl"
  },
  address: {
    street: "Roggenplaat 63",
    postalCode: "4301 WZ",
    city: "Zierikzee"
  },
  visitAdress: {
    street: "Industrieweg 43",
    postalCode: "4301 RS",
    city: "Zierikzee"
  },
  kvk: "93012322",
  btw: "NL004997457B17",
  iban: "NL79 KNAB 0775 7348 37"
};
const eventTypeOptions = [
  { value: "wedding", label: "Bruiloft" },
  { value: "private-party", label: "Privéfeest" },
  { value: "company-party", label: "Bedrijfsfeest" },
  { value: "event", label: "Evenement" },
  { value: "festival", label: "Festival" },
  { value: "construction", label: "Bouwplaats" }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white mt-12"> <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3> <ul class="mt-4 space-y-4"> <li> <a${addAttribute(`tel:${contactDetails.phone.href}`, "href")} class="text-base text-gray-500 hover:text-gray-900"> ${contactDetails.phone.label} </a> </li> <li> <a${addAttribute(`mailto:${contactDetails.email.href}`, "href")} class="text-base text-gray-500 hover:text-gray-900"> ${contactDetails.email.label} </a> </li> <li> <p class="text-base text-gray-500">KvK: ${contactDetails.kvk}</p> <p class="text-base text-gray-500">BTW-ID: ${contactDetails.btw}</p> <p class="text-base text-gray-500">IBAN: ${contactDetails.iban}</p> </li> </ul> </div> <div> <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">Navigatie</h3> <ul class="mt-4 space-y-4"> <li> <a href="/toiletwagens" class="text-base text-gray-500 hover:text-gray-900">
Toiletwagens
</a> </li> <li> <a href="/over-ons" class="text-base text-gray-500 hover:text-gray-900">
Over Ons
</a> </li> <li> <a href="/contact" class="text-base text-gray-500 hover:text-gray-900">
Contact
</a> </li> </ul> </div> <div> <h3 class="text-sm font-semibold text-gray-600 tracking-wider uppercase">Locatie</h3> <div class="mt-4 space-y-4 text-base text-gray-500"> <p> ${contactDetails.address.street}<br> ${contactDetails.address.postalCode} ${contactDetails.address.city} </p> <div> <p class="font-medium">Werkplaats:</p> <p> ${contactDetails.visitAdress.street}<br> ${contactDetails.visitAdress.postalCode} ${contactDetails.visitAdress.city} </p> </div> </div> </div> </div> <div class="mt-8 border-t border-gray-200 pt-8"> <p class="text-base text-gray-400 text-center">
&copy; ${currentYear} Gemak op Wielen. Alle rechten voorbehouden.
</p> </div> </div> </footer>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Gemak op Wielen - Luxe toiletwagens voor elk evenement." } = Astro2.props;
  return renderTemplate`<html lang="nl"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Gemak op Wielen</title>${renderHead()}</head> <body class="min-h-screen flex flex-col bg-gray-50 font-sans"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/demianvonk/Documents/GemakOpWielen/src/layouts/Layout.astro", void 0);

export { $$Layout as $, eventTypeOptions as e };
