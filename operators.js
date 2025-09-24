// =======================
// 1. Operatory arytmetyczne
// =======================
let a = 10, b = 3;

console.log(a + b); // 13 – dodawanie
console.log(a - b); // 7 – odejmowanie
console.log(a * b); // 30 – mnożenie
console.log(a / b); // 3.333...
console.log(a % b); // 1 – reszta z dzielenia
console.log(a ** b); // 1000 – potęgowanie (ES6+)

// 👉 C#: identycznie, tylko potęgowanie w C# to Math.Pow(a,b).



// =======================
// 2. Operatory przypisania
// =======================
let x = 5;
x += 2; // 7
x -= 2; // 5
x *= 3; // 15
x /= 5; // 3
x %= 2; // 1 reszta z dzielenia (czy dana liczba jest parzysta. Operacja % 2 da 0)
x **= 2; // x do potęgi 3

// 👉 C#: identycznie.



// =======================
// 3. Operatory porównania
// =======================
console.log(5 == "5");   // true – konwersja typów!
console.log(5 === "5");  // false – ścisłe porównanie
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

console.log(10 > 5);  // true
console.log(10 >= 10); // true
console.log(3 < 5);  // true

// 👉 C# używa tylko ścisłego porównania (== w C# to jak === w JS).
// 👉 W JS lepiej ZAWSZE używać === i !== (unikniemy błędów z konwersją).
// 👉 przy porównywaniu obiektów to sprawdzenie czy dwa obiekty maja ten sam adres




// =======================
// 4. Operatory logiczne
// =======================
let t = true, f = false;

console.log(t && f); // false (AND)
console.log(t || f); // true (OR)
console.log(!t);     // false (NOT)
console.log(!1);     // false wymusza konwersję na typ wartości bool
console.log(!0);     // true
console.log(!-1);    // false wymusza konwersję na typ wartości bool
console.log(!!1);    // true
console.log(!!0);    // false

// 👉 Tak samo w C# (&&, ||, !).




// =======================
// 5. Operatory warunkowe "ternary" operator trójargumentowy
// =======================
let age = 20;
let result = age >= 18 ? "Dorosły" : "Dziecko";
console.log(result); // "Dorosły"

// 👉 Identycznie w C# (operator ? :).




// =======================
// 6. Operator nullish coalescing (??)
// =======================
let name = null;
console.log(name ?? "Anonim"); // "Anonim"

// 👉 Działa identycznie w C# (od wersji 8.0).
// 👉 Różnica z || w JS:
//    - || sprawdza truthy/falsy (np. "" || "Anonim" -> "Anonim")
//    - ?? działa tylko na null i undefined




// =======================
// 7. Operator optional chaining (?.)
// =======================
const person = { name: "Jan", address: { city: "Kraków" } };

console.log(person.address.city);    // "Kraków"
console.log(person.job?.title);      // undefined zamiast błędu!

// 👉 W C# to ?. (null-conditional operator).






// =======================
// 8. Operatory bitowe
// =======================
console.log(5 & 1); // 1  (AND)
console.log(5 | 1); // 5  (OR)
console.log(5 ^ 1); // 4  (XOR)
console.log(~5);    // -6 (NOT – liczby w JS to 64-bit float, ale bitowe robią 32-bit int)
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2  (right shift)

// 👉 W C#: identycznie, tylko operacje są na int/uint/long.
// 👉 W JS trzeba uważać – liczby bitowe są 32-bitowe, mimo że normalne liczby to float64.





// =======================
// 9. typeof i instanceof - operator relacyjny nie zrobimy tego na typach prymitywnych 
// =======================
console.log(typeof 123);       // "number"
console.log(typeof "abc");     // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof null);      // "object" (dziwny historyczny bug JS)
console.log(typeof undefined); // "undefined"
console.log(typeof [1,2,3,4])  // "object"
console.log(typeof 123n);      // "bigint"

let tt = 2;
class Car {}
let car = new Car();
console.log(car instanceof Car); // true

// 👉 W C# odpowiednik:
//    - typeof(T) → typeof w JS
//    - obj is Klasa → instanceof w JS




// =======================
// 10. in (sprawdza klucz w obiekcie, czy istnieje właściwość w obiekcie)
// =======================
let obj = { name: "Ala" };
console.log("name" in obj); // true
console.log("age" in obj);  // false

let arr1 = ["f", "g", "h", "i"];
console.log(0 in arr1);  // true // w tablicy sprawdza czy istnieje taki indeks w tablicy

// 👉 W C#: podobnie jak obj.ContainsKey(\"name\") dla Dictionary.



// =======================
// 10. Unary operators - operatory jednoargumentowe
// =======================

// Działają na JEDNYM operandzie (np. zmienna, liczba, string).
// W JS mamy kilka rodzajów operatorów jednoargumentowych.

//🔹 1. Inkrementacja i dekrementacja (++, --)
let n = 8;

n++; // post-inkrementacja: zwraca starą wartość, a potem zwiększa
console.log(n); // 9

n--; // post-dekrementacja: zwraca starą wartość, a potem zmniejsza
console.log(n); // 8

let m = 5;
console.log(++m); // 6 → pre-inkrementacja (zwiększa, a potem zwraca)
console.log(--m); // 5 → pre-dekrementacja
//📌 Różnica JS vs C#: identyczne działanie.

//🔹 2. delete
let data = { a: 1, b: 2, c: 3 };

delete data.c; // usuwa właściwość z obiektu
console.log(data); // { a: 1, b: 2 }

let arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, <empty>, 3] → długość tablicy się nie zmienia!

//Usuwa klucz z obiektu.
//Działa też na tablicach, ale zostawia "pusty slot":
//📌 W C#: nie ma operatora delete. W C# usuwa się elementy metodami (Remove, RemoveAt, RemoveKey).


//🔹 5. Unary plus (+) i minus (-)

//Służą do konwersji wartości do liczby.

let r = "15" + 20; 
console.log(r); // "1520" → konkatenacja stringów

r = +"15" + 20; // + konwertuje string na liczbę
console.log(r); // 35

r = -"15" + 20; // - konwertuje string na liczbę i odwraca znak
console.log(r); // 5


//📌 W C#:
//String trzeba jawnie rzutować (int.Parse("15") albo Convert.ToInt32("15")).
//+ nie robi konwersji, służy tylko do dodawania.

/*
✅ Podsumowanie różnic JS vs C#

== vs === → w C# masz tylko „===” (ścisłe). W JS musisz uważać, żeby nie używać luźnego ==.

Nullish (??) i optional chaining (?.) → działają w obu językach prawie identycznie.

typeof / instanceof → odpowiedniki typeof i is w C#.

Bitowe operatory → podobne, ale w JS są ograniczone do 32-bit.

Falsy wartości → w JS operator || sprawdza nie tylko null/undefined, ale też 0, \"\", NaN. W C# || działa wyłącznie na bool.

*/