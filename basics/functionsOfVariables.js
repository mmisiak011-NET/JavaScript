// =====================================================
// 🔹 Typy prymitywne w JavaScript + metody i właściwości
// =====================================================
//
// Każdy prymityw ma swoje własne właściwości i metody,
// ale w rzeczywistości pochodzi z tzw. „wrapper objects”
// (String, Number, Boolean, Symbol, BigInt).
//
// 7 typów prymitywnych:
// 1️⃣ String
// 2️⃣ Number
// 3️⃣ Boolean
// 4️⃣ Undefined
// 5️⃣ Null
// 6️⃣ Symbol
// 7️⃣ BigInt
//
// =====================================================

// =====================================================
// 1. STRING
// =====================================================
console.log("=== STRING ===");

let text = "Hello JavaScript!";

// 📦 Właściwości:
console.log("length:", text.length); 
// ➤ Zwraca długość napisu (liczbę znaków)

// 🧩 Metody:
console.log("toUpperCase():", text.toUpperCase());
// ➤ Zwraca kopię tekstu z dużymi literami

console.log("toLowerCase():", text.toLowerCase());
// ➤ Zwraca kopię tekstu z małymi literami

console.log("includes('Java'):", text.includes("Java"));
// ➤ Sprawdza, czy ciąg zawiera dany fragment (true/false)

console.log("startsWith('He'):", text.startsWith("He"));
// ➤ Sprawdza, czy ciąg zaczyna się od podanego fragmentu

console.log("endsWith('!'):", text.endsWith("!"));
// ➤ Sprawdza, czy ciąg kończy się danym fragmentem

console.log("indexOf('Java'):", text.indexOf("Java")); // zwraca index 1 wystapienia
console.log("indexOf('Java'):", "Java ttt Java yyy Java".indexOf("Java", 2)); // zwraca index 2 wystapienia chyba ze nie istnieje to 1
// ➤ Zwraca indeks, od którego występuje fragment (lub -1 jeśli nie znaleziono)

console.log("slice(0,5):", text.slice(0, 5));
// ➤ Zwraca fragment napisu od indeksu 0 do 5 (nie włącznie)

console.log("replace('JavaScript', 'World'):", text.replace("JavaScript", "World"));
console.log("replace(....):", "a b c a b c a b c".replace("a", "T"));
console.log("replace 2(....):", "a b c a b c a b c".replace(/a/g, "T")); //wyrażenie regularne
// ➤ Zwraca nowy ciąg z podmienionym fragmentem 
//    ale zamieni tylko pierwsze wystąpienie tego ciagu !!
//    Wyrażenie regularne używane do zamiany wszystkich znaków w ciągu
/*

    /a/g
    /a/gi

    To jest RegExp (Regular Expression), które mówi:
    /a/ → szukaj litery "a"
    g → globalnie – czyli zamień wszystkie wystąpienia, a nie tylko pierwsze
    i → ignoruje wielkość liter (A = a)
    m → multiline – działa na wielu liniach
    s → pozwala kropce . dopasować znaki nowej linii
    u → tryb Unicode
    y → sticky – dopasowanie tylko od bieżącej pozycji

*/

console.log("split(' '):", text.split(" "));
// ➤ Dzieli tekst na tablicę elementów, używając separatora (np. spacji)

console.log("join('|'):", text.split(" ").join("|"));
// ➤ Łączy tablice w jeden ciąg znaków, które moga być oddzielone konkretnym znakiem

console.log("charAt(1):", text.charAt(1));
// ➤ Zwraca znak na wskazanej pozycji

console.log("charCodeAt(1):", text.charCodeAt(1)); // 101
// ➤ Zwraca znak na wskazanej pozycji w postacji unicode

console.log("trim():", "   hi   ".trim());
// ➤ Usuwa białe znaki z początku i końca tekstu

console.log("substring(2):", "0123456789".substring(2)); // 23456789
console.log("substring(2, 6):", "0123456789".substring(2, 6)); //234   od 2 do 6 - 1
console.log("substr(2, 5):", "0123456789".substr(2, 5)); //23456   od 2 jakiego znaku 5 to ilosć liter
// ➤ pobiera ciąg znaków od elementu na pozycji 2
//    podając wartości na - tekst siezwinie i bedziemy pobierać wartości z końca

// =====================================================
// 2. NUMBER
// =====================================================
console.log("\n=== NUMBER ===");

let num = 123.456;
let a = 1 / 0;

// 📦 Właściwości statyczne (na konstruktorze Number):
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
// ➤ Największa możliwa liczba

console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
// ➤ Najmniejsza dodatnia liczba (bliska zeru)

console.log("Number.isInteger(10):", Number.isInteger(10));
// ➤ Sprawdza, czy liczba jest całkowita

console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
// ➤ Sprawdza, czy wartość to NaN

console.log("Number.isNaN(NaN):", Number.isFinite(a));
// ➤ Sprawdza, czy wartość to infinity wystepuje np przy dzieleniu przez 0

// 🧩 Metody instancji (na liczbach):
console.log("toFixed(2):", num.toFixed(2));
// ➤ Zaokrągla liczbę do 2 miejsc po przecinku (jako string)

console.log("toPrecision(4):", num.toPrecision(4));
// ➤ Zwraca liczbę z określoną liczbą znaczących cyfr

console.log("toString():", num.toString());
// ➤ Zwraca liczbę jako tekst

console.log("parseInt('42'):", parseInt("42"));
// ➤ Konwertuje tekst na liczbę całkowitą

console.log("parseFloat('3.14'):", parseFloat("3.14"));
// ➤ Konwertuje tekst na liczbę zmiennoprzecinkową

// =====================================================
// 3. BOOLEAN
// =====================================================
console.log("\n=== BOOLEAN ===");

let flag = true;

// 🧩 Metody:
console.log("toString():", flag.toString());
// ➤ Konwertuje wartość logiczną na tekst ("true" / "false")

console.log("valueOf():", flag.valueOf());
// ➤ Zwraca surową wartość logiczną (true/false)

// =====================================================
// 4. UNDEFINED
// =====================================================
console.log("\n=== UNDEFINED ===");

let notDefined;
console.log("notDefined:", notDefined);
// ➤ Wartość zmiennej, której nie przypisano niczego (undefined)
// ❗ Brak metod, bo to prymityw bez wrappera.

// =====================================================
// 5. NULL
// =====================================================
console.log("\n=== NULL ===");

let emptyValue = null;
console.log("emptyValue:", emptyValue);
// ➤ Oznacza brak wartości (pustkę logiczną)
// ❗ Brak metod ani właściwości

// =====================================================
// 6. SYMBOL
// =====================================================
console.log("\n=== SYMBOL ===");

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("sym1 === sym2:", sym1 === sym2);
// ➤ Symbole o tej samej nazwie NIE są równe (unikalne identyfikatory)

console.log("sym1.description:", sym1.description);
// ➤ Zwraca opis symbolu (przekazany przy tworzeniu)

console.log("toString():", sym1.toString());
// ➤ Zwraca symbol w formie tekstu "Symbol(id)"

// =====================================================
// 7. BIGINT
// =====================================================
console.log("\n=== BIGINT ===");

let big = 1234567890123456789012345678901234567890n;

console.log("big + 10n:", big + 10n);
// ➤ Można wykonywać działania tylko z innymi BigInt

console.log("big.toString():", big.toString());
// ➤ Konwertuje wartość BigInt na tekst

console.log("typeof big:", typeof big);
// ➤ Typ to "bigint"



// =====================================================
// 📘 PODSUMOWANIE
// =====================================================
// - Typy prymitywne są niemodyfikowalne (immutable).
// - Mają swoje obiektowe odpowiedniki (String, Number, Boolean...),
//   które pozwalają korzystać z metod.
// - Z racji tego, że są to typy immutable to wyykorzystanie na nich metody 
//   tworza zawsze nowa wartosć w pamięci
//   
// =====================================================
