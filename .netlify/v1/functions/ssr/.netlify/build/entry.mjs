import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CLogW8en.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/401.astro.mjs');
const _page2 = () => import('./pages/403.astro.mjs');
const _page3 = () => import('./pages/404.astro.mjs');
const _page4 = () => import('./pages/500.astro.mjs');
const _page5 = () => import('./pages/502.astro.mjs');
const _page6 = () => import('./pages/503.astro.mjs');
const _page7 = () => import('./pages/api/submit-booking.json.astro.mjs');
const _page8 = () => import('./pages/api/submit-contact.json.astro.mjs');
const _page9 = () => import('./pages/boeken.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/over-ons.astro.mjs');
const _page12 = () => import('./pages/toiletwagens/_slug_.astro.mjs');
const _page13 = () => import('./pages/toiletwagens.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/401.astro", _page1],
    ["src/pages/403.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/500.astro", _page4],
    ["src/pages/502.astro", _page5],
    ["src/pages/503.astro", _page6],
    ["src/pages/api/submit-booking.json.ts", _page7],
    ["src/pages/api/submit-contact.json.ts", _page8],
    ["src/pages/boeken.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/over-ons.astro", _page11],
    ["src/pages/toiletwagens/[slug].astro", _page12],
    ["src/pages/toiletwagens/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0a361f23-d8f5-4f7e-b476-0e9347077079"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
