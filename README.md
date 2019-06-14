# WDP Projekt Zespołowy

## Opis projektu

DO UZUPEŁNIENIA

## Demo

DO UZUPEŁNIENIA

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

Maxymalna ilość znaków w linii: 88.

Do sliderów użuwamy wtyczki: [Tiny slider](https://www.npmjs.com/package/tiny-slider)

Wcięcia na dwie spacje.

Odstępy między funcjami (entery).

Nazewnictwo modułów html wg schematu: 50_nazwa.html

Sekcję css nazywamy wg schematu: \_section--nazwa.scss

Opisy commitów w języku angielskim.

Tak gdzie to możliwe wykorzystujemy bootstrapa.

Nie nadpisujemy klas bootsrapowych.

Nie stylujemy po znacznikach html. Wykorzystujemy w tym celu klasy.

W Java Script używamy tylko pojedynczego cudzysłowu.

Robimy rebase, przed pull requestem.

Nie zostawiamy w kodzie zbędnych komentarzy.
