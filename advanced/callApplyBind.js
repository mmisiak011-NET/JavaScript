// ==========================================================
// 📘 call(), apply(), bind()
// ==========================================================
/*
  ✅ Wszystkie trzy metody (call, apply, bind)
  służą do *ręcznego ustawiania kontekstu this* 
  podczas wywołania funkcji.

  Kontekst `this` to obiekt, do którego odnosi się funkcja,
  gdy jest uruchamiana.

  📌 Funkcje te są dostępne dla każdej funkcji w JS,
      ponieważ pochodzą z Function.prototype.
*/


// ==========================================================
// 🔹 PRZYKŁAD BAZOWY — funkcja korzystająca z this
// ==========================================================
function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };


// ==========================================================
// 📗 1️⃣ call()
// ==========================================================
/*
  ✅ Składnia:
    func.call(thisArg, arg1, arg2, ...)

  - Wywołuje funkcję NATYCHMIAST
  - Ustawia `this` na podany obiekt
  - Argumenty przekazuje po przecinku
*/

greet.call(person1, "Hello", "!"); // Hello, I'm Alice!
greet.call(person2, "Hi", "!!");   // Hi, I'm Bob!!


// ==========================================================
// 📘 2️⃣ apply()
// ==========================================================
/*
  ✅ Składnia:
    func.apply(thisArg, [argsArray])

  - Działa jak call(), ale argumenty przekazuje jako tablicę
  - Również wywołuje funkcję NATYCHMIAST
*/

greet.apply(person1, ["Bonjour", "!!!"]); // Bonjour, I'm Alice!!!
greet.apply(person2, ["Cześć", "?"]);     // Cześć, I'm Bob?

/*
  📌 Różnica call() vs apply():
    call(person, a, b, c)
    apply(person, [a, b, c])

  ✅ apply() często używana, gdy argumenty masz już w tablicy.
*/


// ==========================================================
// 📙 3️⃣ bind()
// ==========================================================
/*
  ✅ Składnia:
    func.bind(thisArg, arg1, arg2, ...)

  - NIE wywołuje funkcji od razu
  - Zwraca *nową funkcję* z na stałe powiązanym `this`
    oraz (opcjonalnie) częściowo przekazanymi argumentami
*/

const greetAlice = greet.bind(person1, "Hey");
greetAlice("!"); // Hey, I'm Alice!

const greetBob = greet.bind(person2);
greetBob("Yo", "!!"); // Yo, I'm Bob!!


/*
  📌 bind() jest często używany przy callbackach i eventach,
     aby nie utracić kontekstu `this`
*/


// ==========================================================
// 🔹 PRZYKŁAD 4 — bind() w obiekcie z metodą
// ==========================================================
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log("Licznik:", this.count);
  }
};

// Utrata kontekstu przy przekazaniu metody
const detached = counter.increment;
detached(); // ❌ this = undefined (lub window w trybie non-strict)

// Naprawa: bindowanie kontekstu
const fixed = counter.increment.bind(counter);
fixed(); // ✅ this = counter → Licznik: 1
fixed(); // ✅ Licznik: 2


// ==========================================================
// 🔹 PRZYKŁAD 5 — call() i apply() do "pożyczania" metod
// ==========================================================
const personA = { name: "John" };
const personB = { name: "Marta" };

function showInfo(role) {
  console.log(`${this.name} works as a ${role}`);
}

showInfo.call(personA, "developer");
showInfo.call(personB, "designer");
/*
  Wynik:
  John works as a developer
  Marta works as a designer
*/


// ==========================================================
// 🔹 PRZYKŁAD 6 — apply() w praktyce (Math.max z tablicą)
// ==========================================================
const numbers = [4, 9, 2, 7, 12];
const maxNum = Math.max.apply(null, numbers);
console.log("Największa liczba:", maxNum); // 12

// Nowocześniejszy sposób (ES6+): Math.max(...numbers)


// ==========================================================
// 🔹 PRZYKŁAD 7 — bind() do funkcji opóźnionych (np. setTimeout)
// ==========================================================
const user = {
  name: "Zoe",
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// ❌ Bez bind — stracony this:
setTimeout(user.sayHi, 1000); // "Hi, I'm undefined"

// ✅ Z bind — zachowany kontekst:
setTimeout(user.sayHi.bind(user), 2000); // "Hi, I'm Zoe"


// ==========================================================
// 🧠 PODSUMOWANIE
// ==========================================================
/*
  ✅ call(thisArg, ...args)
     → Wywołuje funkcję natychmiast
     → Argumenty przekazuje po przecinku

  ✅ apply(thisArg, [args])
     → Wywołuje funkcję natychmiast
     → Argumenty przekazuje jako tablicę

  ✅ bind(thisArg, ...args)
     → NIE wywołuje od razu
     → Zwraca nową funkcję z przypisanym this

  📊 Porównanie:

  | Metoda | Wywołuje natychmiast? | Argumenty           | Zwraca funkcję? |
  |---------|------------------------|-------------------|-----------------|
  | call()  | ✅ Tak                 | lista (a, b, c)   | ❌ Nie          |
  | apply() | ✅ Tak                 | tablica ([a, b])  | ❌ Nie          |
  | bind()  | ❌ Nie                 | lista (a, b, c)   | ✅ Tak          |

  📦 Typowe zastosowania:
    - call() / apply() → pożyczanie metod między obiektami
    - apply() → wywołania z tablicą argumentów (np. Math.max)
    - bind() → utrzymanie this w callbackach, eventach, timerach
*/
