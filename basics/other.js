


// ==============================
// 📌 instanceof
// ==============================
/*
    🔹 Sprawdza, czy obiekt pochodzi z określonego konstruktora lub klasy 
        (czyli czy w jego prototypowym łańcuchu znajduje się ten konstruktor).
    🔹 Nie wykorzystywać dla typów prymitywnych (nie działa dla nich), do teg osłuży typeof lub Array.isArray().
*/

class Animal {}
class Dog extends Animal {}

const d = new Dog();

console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true (dziedziczenie)
console.log(d instanceof Object); // true


const arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true






// ==============================
// 📌 typeof 
// ==============================
/*
    🔹 typeof to operator, który zwraca łańcuch znaków (string) opisujący typ wartości.
*/

console.log(typeof 123);        // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof Symbol());   // "symbol"
console.log(typeof 123n);       // "bigint"
console.log(typeof null);       // "object" ❌ (to historyczny błąd w JS, zostawiony dla zgodności)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (tablice to też obiekty)
console.log(typeof new Date()); // "object"
function test() {}
console.log(typeof test);       // "function" (jedyny przypadek, gdzie typeof zwraca coś innego niż "object")
let x;
console.log(typeof x);          // "undefined"
console.log(typeof y);          // "undefined" (nawet jeśli zmienna nie istnieje!)
console.log(typeof []);         // "object"
console.log(Array.isArray([])); // true (lepszy sposób na sprawdzenie tablicy)




// ==============================
// 📌 hasOwnProperty / in
// ==============================
/*
    🔹 Sprawdza, czy obiekt posiada daną własność bezpośrednio (na sobie), 
        a nie odziedziczoną z prototypu.
    🔹 in sprawdza cały łańcuch prototypów
    🔹 hasOwnProperty sprawdza tylko bezpośrednie własności obiektu.
*/

const person = { name: "Alice", age: 25 };
 
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age"));  // true
console.log(person.hasOwnProperty("city")); // false

//******************************************************************************

function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hi!");
};

const p1 = new Person("Bob");

console.log(p1.hasOwnProperty("name"));         // true  (bo należy do obiektu)
console.log(p1.hasOwnProperty("sayHello"));     // false (bo jest w prototypie)


//******************************************************************************
const obj = { a: 1 };

console.log("a" in obj);                        // true
console.log(obj.hasOwnProperty("a"));           // true

console.log("toString" in obj);                 // true (odziedziczone z Object.prototype)
console.log(obj.hasOwnProperty("toString"));    // false