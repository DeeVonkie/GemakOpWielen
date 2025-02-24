import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_C9eqCq_8.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/demianvonk/Documents/GemakOpWielen/","cacheDir":"file:///Users/demianvonk/Documents/GemakOpWielen/node_modules/.astro/","outDir":"file:///Users/demianvonk/Documents/GemakOpWielen/dist/","srcDir":"file:///Users/demianvonk/Documents/GemakOpWielen/src/","publicDir":"file:///Users/demianvonk/Documents/GemakOpWielen/public/","buildClientDir":"file:///Users/demianvonk/Documents/GemakOpWielen/dist/","buildServerDir":"file:///Users/demianvonk/Documents/GemakOpWielen/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/401","isIndex":false,"type":"page","pattern":"^\\/401\\/?$","segments":[[{"content":"401","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/401.astro","pathname":"/401","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/403","isIndex":false,"type":"page","pattern":"^\\/403\\/?$","segments":[[{"content":"403","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/403.astro","pathname":"/403","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500\\/?$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/502","isIndex":false,"type":"page","pattern":"^\\/502\\/?$","segments":[[{"content":"502","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/502.astro","pathname":"/502","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/503","isIndex":false,"type":"page","pattern":"^\\/503\\/?$","segments":[[{"content":"503","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/503.astro","pathname":"/503","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"route":"/api/submit-booking.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-booking\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-booking.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-booking.json.ts","pathname":"/api/submit-booking.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"route":"/api/submit-contact.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-contact\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-contact.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-contact.json.ts","pathname":"/api/submit-contact.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"},{"type":"inline","content":".focus-ring[data-astro-cid-jn67e522]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(62 99 255 / var(--tw-ring-opacity, 1));--tw-ring-offset-width: 0px}.focus-ring[data-astro-cid-jn67e522]{outline:none!important;-webkit-tap-highlight-color:transparent}input[data-astro-cid-wwfj7r3p][type=date]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.focus-ring[data-astro-cid-wwfj7r3p]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(62 99 255 / var(--tw-ring-opacity, 1));--tw-ring-offset-width: 0px}.focus-ring[data-astro-cid-wwfj7r3p]{outline:none!important;-webkit-tap-highlight-color:transparent}\n"}],"routeData":{"route":"/boeken","isIndex":false,"type":"page","pattern":"^\\/boeken\\/?$","segments":[[{"content":"boeken","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boeken.astro","pathname":"/boeken","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"},{"type":"inline","content":".focus-ring[data-astro-cid-uw5kdbxl]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(62 99 255 / var(--tw-ring-opacity, 1));--tw-ring-offset-width: 0px}.focus-ring[data-astro-cid-uw5kdbxl]{outline:none!important;-webkit-tap-highlight-color:transparent}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/over-ons","isIndex":false,"type":"page","pattern":"^\\/over-ons\\/?$","segments":[[{"content":"over-ons","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/over-ons.astro","pathname":"/over-ons","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"},{"type":"inline","content":".faq-item[data-astro-cid-udm7rmtg] button[data-astro-cid-udm7rmtg]:hover{background-color:#00000006}.faq-item[data-astro-cid-udm7rmtg] svg[data-astro-cid-udm7rmtg]{color:#4b5563}.answer-wrapper[data-astro-cid-udm7rmtg]{max-height:0}\n"}],"routeData":{"route":"/toiletwagens/[slug]","isIndex":false,"type":"page","pattern":"^\\/toiletwagens\\/([^/]+?)\\/?$","segments":[[{"content":"toiletwagens","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/toiletwagens/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/toiletwagens","isIndex":true,"type":"page","pattern":"^\\/toiletwagens\\/?$","segments":[[{"content":"toiletwagens","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toiletwagens/index.astro","pathname":"/toiletwagens","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/401.CfoIYV6K.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/demianvonk/Documents/GemakOpWielen/src/pages/401.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/403.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/500.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/502.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/503.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/boeken.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/over-ons.astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/401@_@astro":"pages/401.astro.mjs","\u0000@astro-page:src/pages/403@_@astro":"pages/403.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/502@_@astro":"pages/502.astro.mjs","\u0000@astro-page:src/pages/503@_@astro":"pages/503.astro.mjs","\u0000@astro-page:src/pages/api/submit-booking.json@_@ts":"pages/api/submit-booking.json.astro.mjs","\u0000@astro-page:src/pages/api/submit-contact.json@_@ts":"pages/api/submit-contact.json.astro.mjs","\u0000@astro-page:src/pages/boeken@_@astro":"pages/boeken.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/over-ons@_@astro":"pages/over-ons.astro.mjs","\u0000@astro-page:src/pages/toiletwagens/[slug]@_@astro":"pages/toiletwagens/_slug_.astro.mjs","\u0000@astro-page:src/pages/toiletwagens/index@_@astro":"pages/toiletwagens.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CLogW8en.mjs","/Users/demianvonk/Documents/GemakOpWielen/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DA-te7wC.mjs","/Users/demianvonk/Documents/GemakOpWielen/src/pages/boeken.astro?astro&type=script&index=0&lang.ts":"_astro/boeken.astro_astro_type_script_index_0_lang.BhdGk6Qz.js","/Users/demianvonk/Documents/GemakOpWielen/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.BY6Ri9rO.js","/Users/demianvonk/Documents/GemakOpWielen/src/pages/toiletwagens/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.NfEfddGS.js","/Users/demianvonk/Documents/GemakOpWielen/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DfruPlsL.js","/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerFAQ.astro?astro&type=script&index=0&lang.ts":"_astro/TrailerFAQ.astro_astro_type_script_index_0_lang.UcpxShQn.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/demianvonk/Documents/GemakOpWielen/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const n=e=>document.getElementById(e)||{value:\"\"},t=document.getElementById(\"form-error\"),s=document.getElementById(\"form-success\"),c=document.getElementById(\"contact-form\"),a=()=>{m()},i=()=>{const e=Object.create(null);return e.name=n(\"name\")?.value,e.email=n(\"email\")?.value,e.phone=n(\"phone\")?.value,e.message=n(\"message\")?.value,e},d=document.querySelector('[type=\"submit\"]');d?.addEventListener(\"click\",a);t.classList.add(\"hidden\");s.classList.add(\"hidden\");[...document.querySelectorAll(\"input\")][0]?.focus();const m=async()=>{const e=i();try{const o=await fetch(\"/api/submit-contact.json\",{method:\"POST\",body:JSON.stringify(e)});if(!o.ok){const r=await o.json();console.error(\"Error data:\",r),t.textContent=\"Let op! \"+r.error||\"Er is een fout opgetreden bij het versturen van uw bericht.\",t.classList.remove(\"hidden\");return}const l=await o.json();s.textContent=\"Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.\",s.classList.remove(\"hidden\"),t.classList.add(\"hidden\"),c.reset()}catch(o){console.error(\"Error:\",o),t.textContent=\"Er is een netwerkfout opgetreden, neem contact op via info@gemakopwielen.nl\",t.classList.remove(\"hidden\")}};"],["/Users/demianvonk/Documents/GemakOpWielen/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"main-header\"),e=document.getElementById(\"mobile-menu-button\"),d=document.getElementById(\"mobile-menu\");e&&d&&e.addEventListener(\"click\",()=>{const n=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",(!n).toString()),d.classList.toggle(\"hidden\")});t&&window.addEventListener(\"scroll\",()=>{window.scrollY>0?t.classList.add(\"shadow-md\"):t.classList.remove(\"shadow-md\")});"],["/Users/demianvonk/Documents/GemakOpWielen/src/components/TrailerFAQ.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".faq-item button\").forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"aria-expanded\")===\"true\",r=e.nextElementSibling,a=r.firstElementChild,i=e.querySelector(\"svg\"),l=a.scrollHeight;t?r.style.maxHeight=\"0px\":r.style.maxHeight=l+\"px\",e.setAttribute(\"aria-expanded\",!t),i.style.transform=t?\"rotate(0deg)\":\"rotate(180deg)\"})});"]],"assets":["/_astro/401.CfoIYV6K.css","/favicon.png","/_astro/_slug_.astro_astro_type_script_index_0_lang.NfEfddGS.js","/_astro/boeken.astro_astro_type_script_index_0_lang.BhdGk6Qz.js","/_astro/page.BCFd37Sx.js","/_astro/trailers.CxlC7JQQ.js","/images/compact.jpg","/images/in-aanbouw.png","/images/logo-blue.png","/images/luxe-4p-wip.jpg","/images/standaard-plus.jpg","/images/vip-trailer.jpg","/_astro/page.BCFd37Sx.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"4d1+pD9llR4/xznt7a+fZZJijknCs8DrIRVPcdkvBnk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
