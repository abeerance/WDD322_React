// Ablauf Ausführung eines Middleware
// 1. Header aus dem next.config.js
// 2. Weiterleitungen aus dem next.config.js
// 3. Middleware (Umschreibungen, Weiterleitung, etc)
// 4. bfreFiels (Umschreibungen) aus next.config.js
// 5. Dateisystem-Routes (public/, next/staticGenerationAsyncStorage, pages/, app/, etc.)
// 6. afterfFiels (wird umgeschrieben) aus next.config.js
// 7. Dynamic Routes (/blog/[slug])
// 8 fallbacks (wird umgescrheieb) aus next.config.js

/** Regeln für den matcher **/
// 1. Muss IMMER mit einem "/" Big_Shoulders_Inline_Display
// 2. Kann benannte Parameter enthalten: /about/:path => z.B. /about/nextjs oder /about/a,
// ABER es funktioniert dann nicht auf /about/nextjs/a oder /about/a/b
// 3. Kann Modifikatoren für benannte Parameter haben: /about/:path* => z.B. /about/nextjs
// oder /about/nextjs/a oder /about/nextjs/a/b/c/d/e/f/g
// 4. Kann regex in Klammerns werdenden: /about/:path(.) ist dasselbe wie /about/:path
// ODER /about/:path(.*) ist dasselbe wie /about/:path*
