
// ==============================
// 📌 Spread operator ...
// ==============================
/*
    ✅ Operator spread (...) w JavaScript pozwala „rozpakowywać” 
    elementy tablic, obiektów lub iterowalnych struktur.


    ✅ Operator spread (...) w przypadku obiektów działa tylko płytko (shallow copy).
    To znaczy: kopiuje tylko pierwszy poziom właściwości.
    eśli obiekt ma zagnieżdżone obiekty albo tablice, to kopiowane są referencje, 
    a nie nowe kopie.
*/


// ==========================
// 1. Kopiowanie tablicy
// ==========================
const arr = [1, 2, 3];
const copy = [...arr];
console.log("Kopiowanie tablicy:", copy); // [1, 2, 3]

// ==========================
// 2. Łączenie tablic
// ==========================
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Łączenie tablic:", merged); // [1, 2, 3, 4]

// ==========================
// 3. Dodawanie elementów
// ==========================
const arr2 = [2, 3, 4];
const newArr = [1, ...arr2, 5];
console.log("Dodawanie elementów:", newArr); // [1, 2, 3, 4, 5]

// ==========================
// 4. Spread w obiektach
// ==========================
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "Paris" };
console.log("Spread w obiektach:", updatedUser);
// age zostanie napisane a city zostanie dodane do obiektu

// ==========================
// 5. Kopiowanie obiektu
// ==========================
const original = { a: 1, b: 2 };
const copyObj = { ...original };
console.log("Kopiowanie obiektu:", copyObj);

// ==========================
// 6. Przekazywanie argumentów do funkcji
// ==========================
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log("Przekazywanie do funkcji:", sum(...nums)); // 6


// ==========================
// 7. Zamiana stringa w tablicę
// ==========================
const str = "hello";
const letters = [...str];
console.log("String na tablicę:", letters); // ['h','e','l','l','o']




// ==============================
// 📌 Rest operator ...
// ==============================

/*
    Operator Rest (...) w JavaScript pozwala
    Zamienić elementy w tablicę
*/

function logAll(first, ...rest) {
  console.log("Pierwszy argument:", first);
  console.log("Reszta (rest):", rest);
}
logAll(1, 2, 3, 4);

// Pierwszy argument: 1
// Reszta (rest): [2, 3, 4]

// ==========================
// Podsumowanie
// ==========================
// Spread: "rozpakowuje" elementy (tablicy, obiektu, stringa)
// Rest:   "zbiera" elementy w tablicę


// ==============================
// 📌 Operacje na tablicach
// ==============================

console.log("=== Dodawanie elementów ===");

let arr1 = [1, 2, 3];

// push – dodaje na koniec
arr1.push(4);
arr1.
console.log("push:", arr1); // [1, 2, 3, 4]

// unshift – dodaje na początek
arr1.unshift(0);
console.log("unshift:", arr1); // [0, 1, 2, 3, 4]

// splice – dodaje w dowolne miejsce
arr1.splice(2, 0, 99); // wstaw 99 na index 2
console.log("splice (dodanie):", arr1); // [0, 1, 99, 2, 3, 4]


// concat – łączenie tablic
const arr3 = arr1.concat([200, 300]);
console.log("concat:", arr3); // [0, 1, 99, 2, 3, 4, 200, 300]


console.log("\n=== Usuwanie elementów ===");

let arr4 = [10, 20, 30, 40, 50];

// pop – usuwa ostatni element
arr4.pop();
console.log("pop:", arr4); // [10, 20, 30, 40]

// shift – usuwa pierwszy element
arr4.shift();
console.log("shift:", arr4); // [20, 30, 40]

// splice – usuwa elementy w środku
arr4.splice(1, 1); // usuń 1 element na pozycji 1
console.log("splice (usuwanie):", arr4); // [20, 40]

// filter – tworzy nową tablicę bez wybranych elementów
const arr5 = [1, 2, 3, 4, 5];
const filtered = arr5.filter(x => x !== 3);
console.log("filter:", filtered); // [1, 2, 4, 5]


console.log("\n=== Modyfikacja elementów ===");

let arr6 = [5, 10, 15, 20];

// bezpośrednia modyfikacja przez indeks
arr6[1] = 99;
console.log("bezpośrednio:", arr6); // [5, 99, 15, 20]

// map – tworzy nową tablicę z przekształconymi elementami
const doubled = arr6.map(x => x * 2);
console.log("map (x2):", doubled); // [10, 198, 30, 40]

// splice – zastąpienie elementów
arr6.splice(2, 1, 123); // na index 2 usuń 1 element i wstaw 123
console.log("splice (modyfikacja):", arr6); // [5, 99, 123, 20]

// forEach – iteracja i zmiana elementów w miejscu
arr6.forEach((val, idx, array) => {
  array[idx] = val + 1; // inkrementacja każdego elementu
});
console.log("forEach (inkrementacja):", arr6); // [6, 100, 124, 21]

