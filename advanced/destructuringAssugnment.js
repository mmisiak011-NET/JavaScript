// =============================================================
// 📘 Destrukturyzacja w JavaScript
// =============================================================
//
// Destrukturyzacja (ang. destructuring) to sposób „rozpakowywania”
// elementów tablic lub właściwości obiektów do osobnych zmiennych.
//
// Pozwala pisać krócej i czytelniej:
//
// zamiast:
//    const a = arr[0];
//    const b = arr[1];
//
// można napisać:
//    const [a, b] = arr;
//
// =============================================================


// =============================================================
// 🧱 1. Destrukturyzacja tablic
// =============================================================

console.log("=== 1. Destrukturyzacja tablic ===");

const numbers = [10, 20, 30, 40];

// klasyczne przypisanie elementów
const [a, b, c] = numbers;
console.log(`a = ${a}, b = ${b}, c = ${c}`); // 10, 20, 30

// pomijanie elementów
const [first, , third] = numbers;
console.log(`first = ${first}, third = ${third}`); // 10, 30

// wartości domyślne (gdy element nie istnieje)
const [x, y, z, w = 99, q = 100] = numbers;
console.log(`x = ${x}, y = ${y}, z = ${z}, w = ${w}, q = ${q}`); // q = 100, bo brak w tablicy

// destrukturyzacja z resztą elementów (...)
const [n1, n2, ...rest] = numbers;
console.log(`n1 = ${n1}, n2 = ${n2}, reszta = [${rest}]`); // reszta = [30, 40]


// =============================================================
// 🧩 2. Destrukturyzacja obiektów
// =============================================================

console.log("\n=== 2. Destrukturyzacja obiektów ===");

const person = {
  name: "Alice",
  age: 25,
  city: "Paris",
  job: "Developer"
};

// klasyczne przypisanie
const { name, age } = person;
console.log(`Imię: ${name}, Wiek: ${age}`);

// zmiana nazw zmiennych
const { city: miasto, job: zawod } = person;
console.log(`Miasto: ${miasto}, Zawód: ${zawod}`);

// wartości domyślne
const { country = "France" } = person;
console.log(`Kraj: ${country}`);

// destrukturyzacja z resztą właściwości
const { name: n, ...reszta } = person;
console.log("Reszta właściwości:", reszta);


// =============================================================
// 🏗️ 3. Zagnieżdżone obiekty
// =============================================================

console.log("\n=== 3. Zagnieżdżone obiekty ===");

const user = {
  id: 1,
  info: {
    firstName: "Bob",
    address: {
      city: "London",
      zip: "E1 6AN"
    }
  }
};

// zagnieżdżona destrukturyzacja
const {
  info: {
    firstName,
    address: { city, zip }
  }
} = user;

console.log(`Imię: ${firstName}, Miasto: ${city}, Kod: ${zip}`);

// wartości domyślne wewnątrz zagnieżdżonej struktury
const {
  info: {
    address: { country: kraj = "UK" }
  }
} = user;

console.log(`Kraj: ${country}`);


// =============================================================
// 🧮 4. Destrukturyzacja tablic zagnieżdżonych
// =============================================================

console.log("\n=== 4. Destrukturyzacja tablic zagnieżdżonych ===");

const matrix = [[1, 2], [3, 4], [5, 6]];

// rozpakowanie zagnieżdżonych tablic
const [[a1, b1], [a2, b2], [a3, b3]] = matrix;
console.log(`Pierwszy: ${a1}, Drugi: ${b1}, Kolejne: ${a2}, ${b2}, ${a3}, ${b3}`);


// =============================================================
// 🧰 5. Destrukturyzacja w funkcjach
// =============================================================

console.log("\n=== 5. Destrukturyzacja w funkcjach ===");

// destrukturyzacja w argumentach funkcji
function printUser({ name, age, city = "Nieznane" }) {
  console.log(`Użytkownik: ${name}, Wiek: ${age}, Miasto: ${city}`);
}

printUser(person);


// =============================================================
// 🎯 6. Praktyczny przykład
// =============================================================

console.log("\n=== 6. Praktyczny przykład ===");

const settings = {
  theme: {
    color: "blue",
    font: "Arial"
  },
  version: "1.2.0"
};

// destrukturyzacja zagnieżdżonego obiektu
const {
  theme: { color, font },
  version
} = settings;

console.log(`Ustawienia: kolor=${color}, font=${font}, wersja=${version}`);


// =============================================================
// ⚠️ 7. Błędy i pułapki destrukturyzacji
// =============================================================

console.log("\n=== 7. Błędy i pułapki ===");

// ❌ Próba destrukturyzacji niezdefiniowanego obiektu
try {
  const { a } = undefined;
} catch (err) {
  console.error("Błąd destrukturyzacji z undefined:", err.message);
}

// ✅ Bezpieczna destrukturyzacja z wartością domyślną
// newB to alias
// b było zadeklarowane wczesniej, jezeli chcemy uniknąc błedu 
// możemu użyć aliasu lub zmienić nazwe z b na inną
const { b : newB = 42 } = undefined || {};
console.log("Bezpieczna destrukturyzacja:", b, newB);


// =============================================================
// 🧠 8. Podsumowanie
// =============================================================
//
// - Działa zarówno dla tablic, jak i obiektów.
// - Można używać wartości domyślnych.
// - Można zmieniać nazwy zmiennych.
// - Można stosować operator rest (...).
// - Można rozpakowywać struktury zagnieżdżone.
// - Uważaj na undefined / null — wywołają błąd!
// - Bardzo często wykorzystywana przy fetch(), React i Node.js.
//
