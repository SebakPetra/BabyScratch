# BabyScratch

Reszponzív, magyar nyelvű kaparós gender reveal játék Reacttel és TypeScripttel.

## Indítás

Node.js 22.12 vagy újabb 22-es verzió, illetve Node.js 24 vagy újabb támogatott LTS-verzió szükséges.

```bash
npm install
npm run dev
```

A megjelenő helyi címen nyitható meg az alkalmazás. A `npm run build` elkészíti az éles változatot a `dist` mappába, a `npm test` pedig futtatja a játékszabályok tesztjeit.

## Működés és szerkezet

- `src/constants`: a megjelenített szövegek és díszítő karakterek.
- `src/domain`: a tipp és az eredmény üzleti szabálya. A jelenlegi, kérés szerinti rögzített eredmény: kislányra tippelve nyer, kisfiúra tippelve veszít.
- `src/presentation/pages`: a kezdő- és játékoldal. Az `App` a fejlécet, az aktuális oldalt és a láblécet állítja össze.
- `src/presentation/components`: az újrafelhasználható osztálykomponensek, saját stílusaik és a kaparófelület működése. A `ScratchController` az interakciókat, a `ScratchCoverPainter` a fedőréteg rajzolását, a `scratchCoverage` pedig a felfedési küszöböt kezeli.
- `src/presentation/assets`: a felhasznált SVG-rajzok.

A kaparás egérrel, érintéssel vagy tollal működik; a kaparás nélküli felfedés billentyűzettel is elérhető.

A játék kizárólag a böngészőben fut; nincs szerveroldali titok vagy adattárolás.
