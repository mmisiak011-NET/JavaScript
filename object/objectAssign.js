// ==========================================================
// 📘 Object.assign()
// ==========================================================
/*
  ✅ Opis:
  Object.assign(target, ...sources)
  ------------------------------
  Służy do kopiowania *własnych, enumerowalnych właściwości* 
  (czyli tych, które są widoczne np. w pętli for...in)
  z jednego lub kilku obiektów źródłowych (sources)
  do obiektu docelowego (target).

  Zwraca ten sam obiekt `target`, który został zaktualizowany.

  📌 Składnia:
  Object.assign(cel, źródło1, źródło2, ...);

  📌 Zasady działania:
  - Kopiuje tylko właściwości pierwszego poziomu (płytka kopia – shallow copy)
  - Jeśli kilka źródeł ma tę samą właściwość → nadpisywana jest ostatnia
  - Jeśli `target` i `source` są tym samym obiektem, wynik to ten sam obiekt
*/

// ==========================================================
// 🔹 PRZYKŁAD 1 — Kopiowanie obiektu
// ==========================================================
const user = { name: "Alice", age: 25 };
const copyUser = Object.assign({}, user);

console.log("Kopia obiektu:", copyUser);
// ✅ Wynik: { name: "Alice", age: 25 }
// ⚠️ To płytka kopia — zagnieżdżone obiekty NIE są kopiowane tylko referencjonowane


// ==========================================================
// 🔹 PRZYKŁAD 2 — Łączenie kilku obiektów
// ==========================================================
const personalInfo = { name: "Bob", age: 30 };
const jobInfo = { job: "Developer", company: "TechCorp" };
const contactInfo = { email: "bob@example.com" };

const fullProfile = Object.assign({}, personalInfo, jobInfo, contactInfo);

console.log("Połączony obiekt:", fullProfile);
// ✅ Wynik: { name: "Bob", age: 30, job: "Developer", company: "TechCorp", email: "bob@example.com" }


// ==========================================================
// 🔹 PRZYKŁAD 3 — Nadpisywanie właściwości
// ==========================================================
const defaults = { theme: "light", lang: "en" };
const userSettings = { theme: "dark" };

const finalSettings = Object.assign({}, defaults, userSettings);

console.log("Nadpisane ustawienia:", finalSettings);
// ✅ Wynik: { theme: "dark", lang: "en" }
// Ostatni obiekt (`userSettings`) ma pierwszeństwo przy nadpisywaniu


// ==========================================================
// 🔹 PRZYKŁAD 4 — Kopiowanie zagnieżdżonych obiektów (shallow copy)
// ==========================================================
const original = { 
  name: "Eva",
  details: { city: "Paris", age: 28 }
};

const clone = Object.assign({}, original);
clone.details.city = "London";

console.log("Oryginał:", original); // ⚠️ { name: "Eva", details: { city: "London", age: 28 } }
console.log("Kopia:", clone);       // ⚠️ { name: "Eva", details: { city: "London", age: 28 } }

/*
  ⚠️ Uwaga:
  To nie jest kopia głęboka (deep copy)!
  Oba obiekty mają wspólne referencje do tego samego obiektu `details`.
*/


// ==========================================================
// 🔹 PRZYKŁAD 5 — Dodawanie metod lub właściwości dynamicznie
// ==========================================================
const userBase = { name: "John" };
Object.assign(userBase, {
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
  role: "Admin"
});

userBase.greet(); // "Hello, John!"
console.log("Zaktualizowany obiekt:", userBase);
/*
  Wynik:
  {
    name: "John",
    greet: [Function],
    role: "Admin"
  }
*/


// ==========================================================
// 🔹 PRZYKŁAD 6 — Użycie do ustawiania wartości domyślnych
// ==========================================================
function createUser(options) {
  const defaults = { name: "Anon", active: true, role: "guest" };
  return Object.assign({}, defaults, options);
}

const userA = createUser({ name: "Marta", role: "editor" });
console.log("Nowy użytkownik:", userA);
// ✅ Wynik: { name: "Marta", active: true, role: "editor" }


// ==========================================================
// 🧠 PODSUMOWANIE
// ==========================================================
/*
  ✅ Object.assign() służy do:
     - kopiowania obiektów (płytko)
     - łączenia kilku obiektów
     - ustawiania wartości domyślnych
     - dodawania właściwości do istniejących obiektów

  ⚠️ Pamiętaj:
     - To jest *płytka kopia* — zagnieżdżone obiekty i tablice
       zostaną skopiowane przez referencję (czyli będą współdzielone!)
     - Jeśli chcesz zrobić kopię głęboką, użyj np.:
         structuredClone(obj)
         lub  JSON.parse(JSON.stringify(obj))
*/
