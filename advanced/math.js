// ==============================
// 🔢 FUNKCJE MATEMATYCZNE (number)
// ==============================

let a = 4.7;
let b = -3.2;

// -----------------------------------
// ✅ Zaokrąglanie
console.log(Math.round(a));   // 5      -> zaokrągla do najbliższej liczby całkowitej
console.log(Math.floor(a));   // 4      -> zawsze w dół
console.log(Math.ceil(a));    // 5      -> zawsze w górę
console.log(Math.trunc(a));   // 4      -> usuwa część dziesiętną

// -----------------------------------
// ✅ Operacje na wartościach bezwzględnych
console.log(Math.abs(b));     // 3.2    -> wartość bezwzględna

// -----------------------------------
// ✅ Potęgowanie i pierwiastki
console.log(Math.pow(2, 3));  // 8      -> 2 do potęgi 3
console.log(Math.sqrt(16));   // 4      -> pierwiastek kwadratowy
console.log(2 ** 3);          // 8      -> operator potęgowania (**)

// -----------------------------------
// ✅ Min / Max
console.log(Math.min(5, 10, -3));  // -3
console.log(Math.max(5, 10, -3));  // 10

// -----------------------------------
// ✅ Losowe liczby
console.log(Math.random());       // np. 0.123456 – losowa liczba 0 <= x < 1
console.log(Math.floor(Math.random() * 10) + 1); // losowa liczba całkowita 1–10

// -----------------------------------
// ✅ Inne funkcje przydatne w matematyce
console.log(Math.sin(Math.PI / 2));  // 1      -> sinus kąta w radianach
console.log(Math.cos(0));            // 1      -> cosinus
console.log(Math.log(Math.E));       // 1      -> logarytm naturalny
console.log(Math.exp(2));            // e^2    -> funkcja wykładnicza

// -----------------------------------
// ✅ Uwagi:
// - Math to obiekt globalny, więc nie trzeba go tworzyć
// - Wszystkie funkcje Math zwracają typ number
// - typeof Math.random() → "number"
