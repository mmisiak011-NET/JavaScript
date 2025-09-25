

//👉 Funkcje strzałkowe (ES6+)
// Różnice w stosunku do C# lambd:
//  - krótsza składnia
//  - UWAGA: arrow functions nie mają własnego "this" (dziedziczą z otoczenia)
const divide = (x, y) => x / y;
console.log(divide(10, 2));

const square = x => x * x;
console.log(square(6));

const userThis = {
  name: "Ala",
  showName: () => {
    console.log(this.name);
  }
};

userThis.showName(); // 👉 undefined, bo arrow function nie ma swojego `this`!


class Person {
  constructor(name) {
    this.name = name;
  }

  normalFunc() {
    setTimeout(function () {
      console.log("normalFunc:", this.name);
    }, 100);
  }

  arrowFunc() {
    setTimeout(() => {
      console.log("arrowFunc:", this.name);
    }, 100);
  }
}

const p = new Person("Jan");
p.normalFunc(); // 👉 normalFunc: undefined
p.arrowFunc();  // 👉 arrowFunc: Jan

//👉 Gdybyśmy użyli normalnej funkcji w setInterval,
// This wskazywałoby na window (w przeglądarce) zamiast na instancję Timer. 
// Dzięki arrow function this wskazuje na obiekt Timer. Ponieważ dziedziczy this
// z miejsce w którym zostałą zdefiniowana


// ✅ Uwagi:
// Każda funkcja w JS ma własny kontekst (this).
// Funkcja strzałkowa nie ma własnego this. Zamiast tego dziedziczy this z miejsca, w którym została zdefiniowana (lexical this).