// ==============================
// 📌 Spread operator (...)
// ==============================
/*
✅ Operator spread (...) w JavaScript pozwala „rozpakowywać” 
elementy tablic, obiektów lub innych iterowalnych struktur (string, set, map, itp.).

✅ Działa płytko (shallow copy) — kopiuje tylko pierwszy poziom.
Jeśli obiekt zawiera zagnieżdżone obiekty lub tablice, to przekopiowane zostają referencje.
*/

// 1️⃣ Kopiowanie tablicy
const arr = [1, 2, 3];
const copy = [...arr];
console.log("Kopiowanie tablicy:", copy); // [1, 2, 3]

// 2️⃣ Łączenie tablic
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Łączenie tablic:", merged); // [1, 2, 3, 4]

// 3️⃣ Dodawanie elementów
const arr2 = [2, 3, 4];
const newArr = [1, ...arr2, 5];
console.log("Dodawanie elementów:", newArr); // [1, 2, 3, 4, 5]

// 4️⃣ Spread w obiektach
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "Paris" };
console.log("Spread w obiektach:", updatedUser);
// age zostanie nadpisane, a city dodane

// 5️⃣ Kopiowanie obiektu
const original = { a: 1, b: 2 };
const copyObj = { ...original };
console.log("Kopiowanie obiektu:", copyObj);

// 6️⃣ Przekazywanie argumentów do funkcji
function sum(a, b, c) {
  return a + b + c;
}
const nums01 = [1, 2, 3];
console.log("Przekazywanie do funkcji:", sum(...nums01)); // 6

// 7️⃣ Zamiana stringa w tablicę
const str = "hello";
const letters = [...str];
console.log("String na tablicę:", letters); // ['h','e','l','l','o']



// ==============================
// 📌 Rest operator (...)
// ==============================
/*
Operator Rest (...) „zbiera” wiele wartości w jedną tablicę.
Działa odwrotnie do spread.
*/

function logAll(first, ...rest) {
  console.log("Pierwszy argument:", first);
  console.log("Reszta (rest):", rest);
}
logAll(1, 2, 3, 4);
// Pierwszy argument: 1
// Reszta: [2, 3, 4]

/*
✅ Spread – rozpakowuje elementy
✅ Rest   – zbiera elementy do tablicy
*/



// ==============================
// 📌 Operacje na tablicach
// ==============================

// 🔹 Dodawanie elementów
console.log("\n=== Dodawanie elementów ===");

let arr1 = [1, 2, 3];
arr1.push(4); // dodaje na koniec
arr1.unshift(0); // dodaje na początek
arr1.splice(2, 0, 99); // dodaje w dowolne miejsce
console.log("push/unshift/splice:", arr1); // [0, 1, 99, 2, 3, 4]

const arr3 = arr1.concat([200, 300]); // łączenie tablic
console.log("concat:", arr3);

/*


🧠 Podsumowanie
Cel	Przykład	Wynik
Usunięcie elementów	arr.splice(2, 1)	usuwa 1 element od indeksu 2
Dodanie elementów	arr.splice(1, 0, "x")	wstawia "x" bez usuwania
Zastąpienie elementów	arr.splice(1, 2, "a", "b")	podmienia 2 elementy na "a", "b"
Usunięcie do końca	arr.splice(3)	usuwa wszystko od indeksu 3
Wartość zwracana	const removed = arr.splice(...)	tablica z usuniętymi elementami

*/


// 🔹 Usuwanie elementów
console.log("\n=== Usuwanie elementów ===");

let arr4 = [10, 20, 30, 40, 50];
arr4.pop(); // usuwa ostatni
arr4.shift(); // usuwa pierwszy
arr4.splice(1, 1); // usuwa w środku
console.log("pop/shift/splice:", arr4); // [20, 40]

// reverse — odwraca kolejność elementów
const tab = [1, 2, 3, 4, 5].reverse();
console.log("reverse():", tab); // [5, 4, 3, 2, 1]

// filter — zwraca nową tablicę z elementami spełniającymi warunek
const arr5 = [1, 2, 3, 4, 5];
const filtered = arr5.filter(x => x !== 3);
console.log("filter:", filtered); // [1, 2, 4, 5]


// 🔹 Modyfikacja elementów
console.log("\n=== Modyfikacja elementów ===");

let arr6 = [5, 10, 15, 20];
arr6[1] = 99; // bezpośrednia modyfikacja
console.log("Bezpośrednio:", arr6);

const doubled = arr6.map(x => x * 2); // nowa tablica z przekształconymi wartościami
console.log("map (x2):", doubled);

arr6.splice(2, 1, 123); // podmiana elementu
console.log("splice (modyfikacja):", arr6);

arr6.forEach((val, idx, array) => {
  array[idx] = val + 1; // inkrementacja każdego elementu
});
console.log("forEach (inkrementacja):", arr6);


// 🔹 Szukanie i sprawdzanie elementów
console.log("\n=== Wyszukiwanie ===");

const tab20 = ["a", "b", "c", "d", "e"];
const tab30 = [5, 2, 10, 7, 1];

console.log("indexOf('c'):", tab20.indexOf("c")); // 2
console.log("includes('e'):", tab20.includes("e")); // true


// 🔹 Sortowanie tablic
console.log("\n=== Sortowanie ===");

console.log("sort() tekstowo:", tab20.sort()); // ['a','b','c','d','e']
console.log("sort() domyślnie dla liczb:", tab30.sort()); // [1, 10, 2, 5, 7]

tab30.sort((a, b) => a - b);
console.log("sort numerycznie:", tab30); // [1,2,5,7,10]
/*
Jeśli wynik a - b < 0 → a przed b
Jeśli wynik a - b > 0 → a po b
Jeśli wynik a - b = 0 → bez zmian
*/


// 🔹 Wypełnianie tablicy
console.log("\n=== Fill ===");
/*
fill() wypełnia tablicę wskazaną wartością.
Nadpisuje istniejące elementy.
*/
const arrFill = [1, 2, 3, 4, 5];
arrFill.fill(0);
console.log("fill():", arrFill); // [0, 0, 0, 0, 0]


// 🔹 Nowe metody przydatne w praktyce
console.log("\n=== Dodatkowe metody ===");

// find() – zwraca pierwszy element spełniający warunek
const found = [5, 12, 8, 130, 44].find(x => x > 10);
console.log("find:", found); // 12

// findIndex() – zwraca indeks pierwszego elementu spełniającego warunek
const foundIndex = [5, 12, 8, 130, 44].findIndex(x => x > 10);
console.log("findIndex:", foundIndex); // 1

// some() – sprawdza, czy chociaż jeden element spełnia warunek
const hasLarge = [1, 3, 5, 7].some(x => x > 6);
console.log("some:", hasLarge); // true

// every() – sprawdza, czy wszystkie elementy spełniają warunek
const allPositive = [1, 2, 3].every(x => x > 0);
console.log("every:", allPositive); // true


// flat() – spłaszcza zagnieżdżone tablice
const nested = [1, [2, [3, 4]]];
console.log("flat(2):", nested.flat(2)); // [1,2,3,4]

// at() – pobiera element po indeksie (także ujemnym)
const lettersArr = ["a", "b", "c", "d"];
console.log("at(-1):", lettersArr.at(-1)); // 'd'

// toSorted() – nowa metoda (ES2023), nie modyfikuje oryginału
//const numsSorted = [3, 1, 2].toSorted((a, b) => a - b);
//console.log("toSorted():", numsSorted); // [1, 2, 3]

// toReversed() – odwraca kopię tablicy bez zmiany oryginału
//const revCopy = [1, 2, 3].toReversed();
//console.log("toReversed():", revCopy); // [3, 2, 1]



// ===============================================
// Zaawansowany przykład użycia map()
// ===============================================

const scores = [45, 67, 89, 72, 55];
let newScores = scores.map(Math.sqrt);
console.log("map -> Math.sqrt:", scores)

/*
Cel:
  - przypisać każdemu wynikowi jego indeks,
  - dodać informację, czy wynik jest powyżej średniej,
  - zwrócić nową tablicę obiektów.
*/

const average = scores.reduce((acc, val) => acc + val, 0) / scores.length;

const mapped = scores.map((value, index, array) => {
  const aboveAverage = value > average;
  const difference = (value - average).toFixed(2);

  return {
    index: index,             // drugi argument map()
    score: value,             // pierwszy argument map()
    average: average,         // obliczona wartość spoza map()
    differenceFromAverage: difference,
    isAboveAverage: aboveAverage,
    totalCount: array.length  // trzeci argument map() – cała tablica
  };
});

console.log("Średnia:", average.toFixed(2));
console.log("Wynik map():", mapped);



// ==========================================================
// 📘 Array.prototype.reduce()
// ==========================================================
/*
  ✅ Opis:
  Metoda .reduce() służy do „zredukowania” (czyli przekształcenia)
  całej tablicy do jednej wartości — np. liczby, stringa, obiektu lub nowej tablicy.

  Działa w taki sposób, że przechodzi po każdym elemencie tablicy i 
  za każdym razem wywołuje funkcję zwrotną (callback), przekazując jej:

  📌 Składnia:
  --------------------------------------------------------------
  array.reduce((accumulator, currentValue, currentIndex, array) => {
      // logika
      return nowaWartośćAkumulatora;
  }, initialValue);

  📌 Argumenty:
  --------------------------------------------------------------
  accumulator   → akumulator, czyli zmienna, w której gromadzony jest wynik
  currentValue  → aktualny element tablicy
  currentIndex  → indeks aktualnego elementu
  array         → cała tablica
  initialValue  → wartość początkowa akumulatora (zalecana!)

  📌 Zwracana wartość:
  --------------------------------------------------------------
  reduce() zwraca pojedynczą wartość (np. liczbę, obiekt lub string),
  wynikającą z połączenia wszystkich elementów.

  ==========================================================
  🔹 PRZYKŁAD 1 — Sumowanie liczb
  ==========================================================
*/
const numbers = [10, 20, 30, 40];
const sumNumber = numbers.reduce((acc, val) => acc + val, 0);
console.log("Suma:", sumNumber); // 100


/*
  ✅ Jak to działa:
  Iteracja 1 → acc = 0, val = 10 → return 10
  Iteracja 2 → acc = 10, val = 20 → return 30
  Iteracja 3 → acc = 30, val = 30 → return 60
  Iteracja 4 → acc = 60, val = 40 → return 100
  Wynik końcowy = 100
*/


// ==========================================================
// 🔹 PRZYKŁAD 2 — Liczenie średniej
// ==========================================================
const nums = [5, 10, 15, 20];
const avg = nums.reduce((acc, val, _, arr) => acc + val / arr.length, 0);
console.log("Średnia:", avg); // 12.5


// ==========================================================
// 🔹 PRZYKŁAD 3 — Tworzenie obiektu z tablicy
// ==========================================================
const fruits = ["🍎", "🍌", "🍎", "🍇", "🍌", "🍎"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Zliczanie wystąpień:", fruitCount);
// Wynik: { '🍎': 3, '🍌': 2, '🍇': 1 }


// ==========================================================
// 🔹 PRZYKŁAD 4 — Łączenie tekstów
// ==========================================================
const words = ["JavaScript", "is", "awesome"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log("Zdanie:", sentence); // "JavaScript is awesome"


// ==========================================================
// 🔹 PRZYKŁAD 5 — Redukcja do nowej tablicy
// ==========================================================
const nums2 = [1, 2, 3, 4, 5];
const doubledEven = nums2.reduce((acc, val) => {
  if (val % 2 === 0) acc.push(val * 2); // tylko parzyste elementy ×2
  return acc;
}, []);

console.log("Parzyste ×2:", doubledEven); // [4, 8]


// ==========================================================
// 🧠 PODSUMOWANIE
// ==========================================================
/*
  ✅ reduce() wykonuje się kolejno dla każdego elementu tablicy.
  ✅ Zwraca pojedynczą wartość – może to być liczba, string, tablica lub obiekt.
  ✅ Nie modyfikuje oryginalnej tablicy (zwraca nowy wynik).
  ✅ Jeśli nie podasz initialValue, pierwszy element tablicy
     zostanie użyty jako wartość początkowa akumulatora.

  🧩 Schemat myślenia:
    1️⃣ Weź akumulator (acc)
    2️⃣ Zrób coś z bieżącą wartością (val)
    3️⃣ Zwróć nowy stan akumulatora
    4️⃣ Powtórz dla całej tablicy
*/
