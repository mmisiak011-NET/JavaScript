// =======================
// Konwersje typów w JavaScript (z porównaniem do C#)
// =======================

// =======================
// 1. Konwersja do stringa
// =======================
console.log("=== Konwersja do stringa ===");

console.log(String(123));       // "123" (C#: 123.ToString())
console.log(String(true));      // "true" (C#: true.ToString())
console.log(String(null));      // "null" (C#: null.ToString() -> ❌ wyjątek)
console.log(String(undefined)); // "undefined" (C#: brak odpowiednika)
console.log(String([1, 2, 3])); // "1,2,3" (C#: string.Join(",", new[]{1,2,3}))

console.log((123).toString());  // "123"
console.log((true).toString()); // "true"

// =======================
// 2. Konwersja do liczby
// =======================
console.log("\n=== Konwersja do liczby ===");

console.log(Number("123"));     // 123 (C#: int.Parse("123"))
console.log(Number("123abc"));  // NaN (C#: FormatException przy Parse)
console.log(Number(true));      // 1   (C#: Convert.ToInt32(true) -> 1)
console.log(Number(false));     // 0   (C#: Convert.ToInt32(false) -> 0)
console.log(Number(null));      // 0   (C#: Convert.ToInt32(null) -> 0)
console.log(Number(undefined)); // NaN (C#: brak odpowiednika)

console.log(+"123"); // 123 (unary plus konwertuje string do number)
console.log(+"abc"); // NaN (C#: int.Parse("abc") -> FormatException)

// =======================
// 3. Konwersja do boolean
// =======================
console.log("\n=== Konwersja do boolean ===");

console.log(Boolean(0));        // false    (C#: Convert.ToBoolean(0) -> false)
console.log(Boolean(-0));       // false    (C#: Convert.ToBoolean(0) -> false)
console.log(Boolean(""));       // false    (C#: Convert.ToBoolean("") -> FormatException!)
console.log(Boolean(null));     // false    (C#: Convert.ToBoolean(null) -> false)
console.log(Boolean(undefined));// false    (C#: brak odpowiednika)
console.log(Boolean(NaN));      // false
console.log(Boolean(0n));       // false
console.log(Boolean(-0n));      // false

console.log(Boolean(1));        // true     (C#: Convert.ToBoolean(1) -> true)
console.log(Boolean(-1));       // true
console.log(Boolean(-100));     // true
console.log(Boolean(!""));      // true     (C#: Convert.ToBoolean("") -> FormatException!)
console.log(Boolean(" "));      // true     (C#: Convert.ToBoolean("") -> FormatException!)
console.log(Boolean("abc"));    // true     (C#: Convert.ToBoolean("abc") -> FormatException!)

// "Falsy" values w JS → wszystko inne daje true
// false, 0, "", null, undefined, NaN -> false
// np.:
//Patrzy czy string jest pusty lub nie, nie konwertuje tego na bool

if (0) console.log("false");   // false
if (1) console.log("true");   // true
if ("") console.log("false");   // false
if ("abc") console.log("true"); // true
if ("0") console.log("true");   // true
if (!"0") console.log("false"); // true
if ({}) console.log("{}:"+ "true"); // true
if ([]) console.log("[]:"+ "true"); // true
if ({a: 10} == "[object Object]") console.log("[object Object]: " + "true"); // true, objekt domyślnie konwertowany jest na "[object Object]" -> drugie "O" jest duże

console.log(String({a: 10} ));


// =======================
// 4. Niejawne konwersje - koercja (coercion)
// =======================
console.log("\n=== Niejawne konwersje (coercion) ===");

console.log("5" + 5);   // "55" (konkatenacja: liczba → string)
console.log("5" - 2);   // 3   (string → number, bo "-" to operator matematyczny)
console.log("5" * "2"); // 10  (oba stringi → number)
console.log(true + 1);  // 2   (true → 1)
console.log(false + 1); // 1   (false → 0)
console.log(null + 1);  // 1   (null → 0)
console.log(undefined + 1); // NaN

// =======================
// Podsumowanie różnic JS vs C#
// =======================
/*
1. W JS mamy więcej automatycznych konwersji (coercion),
   w C# konwersje są zwykle jawne (Parse, Convert, cast).
2. JS: Number("abc") -> NaN
   C#: int.Parse("abc") -> FormatException
3. JS: String(null) -> "null"
   C#: null.ToString() -> wyjątek
4. JS: Boolean("") -> false
   C#: Convert.ToBoolean("") -> wyjątek
5. JS: "5" + 5 -> "55" (konwersja do string)
   C#: "5" + 5 -> błąd (trzeba jawnie 5.ToString())
*/