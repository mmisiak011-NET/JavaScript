
/*
    JS ma dwa głowne rodzaje typów: prymitywne i referencyjne(obiekty)
    jest językiem dynamicznie typowanym, nie trzeba z góry określać typu zmiennej
*/

/*
    1. Deklaracja zmiennych

    🔹let → zmienna, którą można zmieniać
    🔹const → stała (nie można ponownie przypisać wartości)
    🔹var → stary sposób (unikać, ma inne zasady zasięgu)


    🔹 1. var (stary sposób, unikać) od samego początku JS

        Scope: działa w całej funkcji, a nie w bloku { }.

        Można redeklarować tę samą zmienną w tym samym zakresie. var a = 2; var a = 2 nie bedzie błedu 

        Hoisting: deklaracja jest „przenoszona” na górę, ale wartość zostaje undefined do czasu przypisania.



    🔹 2. let 

        Scope: działa tylko w bloku { }, w którym została zadeklarowana.

        Nie można redeklarować tej samej zmiennej w tym samym zakresie. lat a = 2; lat a = 2  bedzie błąd 

        Można zmieniać wartość.

        Hoisting: istnieje, ale w tzw. Temporal Dead Zone – nie możesz używać zmiennej przed deklaracją.

        Wprowadzone w ES6

    🔹 3. const

        Scope: taki sam jak let (blokowy).

        Nie można zmieniać przypisanej wartości (ale uwaga: w przypadku obiektów i tablic można modyfikować ich zawartość).

        Musi być zainicjalizowana od razu przy deklaracji.

        Wprowadzone w ES6

*/

let num;        //zmienna zadeklarowana ale nie ma przypisanej wartosci *** undefined
let num2 = 2;   //zmienna zadeklarowana oraz zdefiniowana, ma przypisana wartość


// ==============================
// 📌 TYPY DANYCH W JAVASCRIPT ------ PRYMITYWNE
// ==============================

// 👉 string – tekst
let name = "Jan";  // standardowy ciąg znaków

// ✅ Wskazówki:
// - Można używać "", '' lub `` (template literals).
// - Template literals pozwalają na interpolację: 
//      let greeting = `Cześć, ${name}!`
// - Można pisać wielolinijkowo za pomocą ``
// - typeof "tekst" → "string"

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 number – liczby całkowite i zmiennoprzecinkowe
let age = 25;      // integer
let price = 19.99;   // float

// ✅ Uwagi:
// - W JS wszystkie liczby są typu "number" (64-bit IEEE 754).
// - Uwaga na precyzję zmiennoprzecinkową: 0.1 + 0.2 !== 0.3 dokładnie.
// - Bardzo duże liczby → BigInt (np. 12345678901234567890n)
// - Operatory: +, -, *, /, **, %
// - Przydatne metody: Math.round(), Math.floor(), Math.ceil(), Math.random()
// - typeof 25 → "number"

console.log(0.1 + 0.2); // wynik 0.30000000000000004

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 NaN – Not a Number "TO NIE JEST TYP DANYCH"

let a = 0 / 0; //NaN
let b = Math.sqrt(-1) //NaN

//console.log(a)
//console.log(b)
//console.log(isNaN(b)); // true


// ✅ Uwagi:
// specjalna wartość w JS oznacza, że coś nie jest liczbą.
// Istnieje wbudowana funkcja która sprawdzi czy coś jest NaN
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 boolean – wartości logiczne
let isActive = true;
let isAdmin = false;

// ✅ Uwagi:
// - Tylko dwa możliwe stany: true / false
// - Przydatne w warunkach if, while, ternary
// - typeof true → "boolean"

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 null – brak wartości
let nothing = null;

// ✅ Uwagi:
// - Reprezentuje „celowy brak wartości”
// - typeof null → "object" (historyczny błąd JS)
// - Różni się od undefined (zmienna niezainicjalizowana)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 undefined – zmienna zadeklarowana, ale bez przypisanej wartości
let x;
console.log(x); // undefined

// ✅ Uwagi:
// - Typ domyślny dla nieprzypisanych zmiennych
// - Jezeli jawnie chcem ywskazać, że wartosć jest pusta możemy uzyć: x = null zamiast x = undefindes
// - typeof undefined → "undefined"

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 symbol – unikalny identyfikator
let id = Symbol("unikalny");

// ✅ Uwagi:
// - Każdy Symbol jest unikalny
// - Często używany jako klucz w obiektach
// - typeof Symbol() → "symbol"
console.log(id);

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 bigint – bardzo duże liczby całkowite
let bigNum = 123456789012345678901234567890n;

// ✅ Uwagi:
// - Dodawanie litery 'n' na końcu liczby tworzy BigInt
// - Nie wolno mieszać BigInt z number w operacjach
// - Rzadko się z tego korzysta
// - typeof 123n → "bigint"

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// ==============================
// 📌 TYPY DANYCH W JAVASCRIPT ------ REFERENCYJNE (Obiekty), typ złożony
// ==============================

// 👉 object – obiekty
let person = { name: "Jan", age: 30 };

let country = {
    name: "Poland",
    population: 38_000_000, // 38mln, podkreślenie tylko do łatiejszego czytania
    cities: ["Warszawa", "Kraków", "Poznań"],
    capital:{
        name: "Warszawa",
        population: 2000000
    }
}

let obj = {};               // pusty objekt
obj.data = [1,2,3]          // pusty objekt można rozbudowć
obj.data = { a: 12, b: 20}  // nadpisujemy wcześniej zrobionątabelicę
//console.log(country);     // w node.js w console debug wyświetli nam okrojone informacje
//console.log(obj);
//console.log(JSON.stringify(obj, null, 2)); // null - brak filtrowania, 2 oznacza wcięcie dla czytelosni
//console.log(JSON.stringify(country, null, 2));

// ✅ Uwagi:
// - Przechowuje dane w formie klucz-wartość
// - Można modyfikować zawartość obiektu
// - typeof {} → "object"

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// 👉 array – tablice (specjalny typ obiektu)
let numbers = [1, 2, 3, 4];
let mix = [1, 2, 'a', 'b', 1.2, 3.4, true, {a: 'obiekt'}, country];
//console.log(mix[8]);
//console.log(mix.length);

// ✅ Uwagi:
// - Tablica to lista elementów indeksowanych od 0
// - Można używać metod: push(), pop(), shift(), unshift(), map(), filter(), reduce()
// - typeof [] → "object", ale Array.isArray(liczby) → true

// -----------------------------------

// 👉 function – funkcje (również obiekt)
function hello() {
    console.log("Hello!");
}

// ✅ Uwagi:
// - Można przypisać funkcję do zmiennej lub przekazać jako argument
// - typeof przywitaj → "function"

// -----------------------------------



// ✅ Podsumowanie:
// - Prymitywne: string, number, boolean, null, undefined, symbol, bigint
// - Referencyjne / złożone: object, array, function
// - JS jest dynamicznie typowany → typy mogą się zmieniać w trakcie działania
