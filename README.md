# BabyScratch

Reszponzív, magyar nyelvű kaparós gender reveal játék Reacttel és TypeScripttel.

## Indítás

Node.js 22.12 vagy újabb 22-es verzió, illetve Node.js 24 vagy újabb támogatott LTS-verzió szükséges.

```bash
npm install
npm run dev
```

A megjelenő helyi címen nyitható meg az alkalmazás. A `npm run build` elkészíti az éles változatot a `dist` mappába, a `npm test` pedig futtatja a játékszabályok tesztjeit.

## Közzététel GitHub Pagesen

A repositoryban a **Settings → Pages → Build and deployment → Source** beállításnál válaszd a **GitHub Actions** lehetőséget. A `main` ágra feltöltött módosításokat a workflow automatikusan teszteli és közzéteszi a https://sebakpetra.github.io/BabyScratch/ címen. Ingyenes GitHub-fióknál a Pages használatához a repositorynak nyilvánosnak kell lennie.

Az útvonal a `vite.config.ts` fájlban a `BabyScratch` repositorynévre van beállítva; átnevezés esetén módosítani kell.

## Működés és szerkezet

- `src/constants`: a megjelenített szövegek és díszítő karakterek.
- `src/domain`: a tipp és az eredmény üzleti szabálya. A jelenlegi, kérés szerinti rögzített eredmény: kislányra tippelve nyer, kisfiúra tippelve veszít.
- `src/presentation/pages`: a kezdő- és játékoldal. Az `App` a fejlécet, az aktuális oldalt és a láblécet állítja össze.
- `src/presentation/components`: az újrafelhasználható osztálykomponensek, saját stílusaik és a kaparófelület működése. A `ScratchController` az interakciókat, a `ScratchCoverPainter` a fedőréteg rajzolását, a `scratchCoverage` pedig a felfedési küszöböt kezeli.
- `src/presentation/assets`: a felhasznált SVG-rajzok.

A kaparás egérrel, érintéssel vagy tollal működik; a kaparás nélküli felfedés billentyűzettel is elérhető.

A játék kizárólag a böngészőben fut; nincs szerveroldali titok vagy adattárolás.
