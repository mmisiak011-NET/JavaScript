// =============================
// Funkcje
// =============================

//👉 Deklaracja funkcji może zawierac parametry
function greet(name) {
    console.log(this);
    console.log(`Cześć, ${name}!`);
}

greet("Jan"); // wywołanie może zawierać argumenty

const personThis = {
  name: "Jan",
  greet: function() {
    console.log(`Cześć, ${this.name}!`); // funkcja ta ma własny kontekst this
  }
};

personThis.greet(); // "Cześć, Jan!"

//👉 Funkcja zwracająca wartość
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum);

//👉 Funkcja anonimowa przypisana do zmiennej
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 2));



// ✅ Uwagi:
// Każda funkcja w JS ma własny kontekst (this).
// Funkcja strzałkowa nie ma własnego this. Zamiast tego dziedziczy this z miejsca, w którym została zdefiniowana (lexical this).



