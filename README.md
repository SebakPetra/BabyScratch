# BabyDiary

Reszponzív, magyar nyelvű babaoldal Reacttel és TypeScripttel. Jelenleg a baba hozzávetőleges méretét mutatja.

## Indítás

Node.js 22.12 vagy újabb 22-es verzió, illetve Node.js 24 vagy újabb támogatott LTS-verzió szükséges.

```bash
npm install
npm run dev
```

A megjelenő helyi címen nyitható meg az alkalmazás. A `npm run build` elkészíti az éles változatot a `dist` mappába, a `npm test` pedig ellenőrzi az oldal megjelenő tartalmát.

## Közzététel GitHub Pagesen

A repositoryban a **Settings → Pages → Build and deployment → Source** beállításnál válaszd a **GitHub Actions** lehetőséget. A `main` ágra feltöltött módosításokat a workflow automatikusan teszteli és közzéteszi a https://sebakpetra.github.io/BabyScratch/ címen. Ingyenes GitHub-fióknál a Pages használatához a repositorynak nyilvánosnak kell lennie.

Az útvonal a `vite.config.ts` fájlban a `BabyScratch` repositorynévre van beállítva; átnevezés esetén módosítani kell.

## Működés és szerkezet

- `src/constants`: a megjelenített szövegek és díszítő karakterek. A méret és a hasonlat jelenleg rögzített, itt módosítható; nem frissül automatikusan.
- `src/presentation/pages`: az aktuális babaoldal. Az `App` a fejlécet, az oldalt és a láblécet állítja össze.
- `src/presentation/components`: az újrafelhasználható osztálykomponensek.
- `src/presentation/assets`: a felhasznált SVG-rajzok.

A korábbi kaparós játék a helyi `baby-scratch` branchben található. A branch nincs automatikusan feltöltve; a nyilvános repository és a korábbi közzétételek nem biztosítanak titoktartást.
