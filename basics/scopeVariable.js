
// ==============================
// 📌 Zmienne lokalne oraz globalne
// ==============================


/*
    🔹 VAR nie ma zasięgu blokowego ale ma zasięg funkcyjny temat z IIFE
    🔹 VAR ląduje zawsze do obiektu window niezaleznie od teg oczy zdefiniowany jest globalnie czy w klamrach.
    🔹 Let oraz Const nie ląduje do obiektu window
*/

let a = 12; // Zmienne globalna
const txt = "Kasia"; // Zmienne globalna

if(true) { // Zakres lokalny
    let a = 100; // zmienne lokalne | Przesłania nam zdefiniowane zmienne globalne **** NIE NADPISUJE!
    let txt = "Zosia" // zmienne lokalne | Przesłania nam zdefiniowane zmienne globalne
    console.log(a);
    console.log(txt);
}

console.log(a);
console.log(txt);





var a2 = 12; // Zmienne globalna | VAR nie ma zasiegu blokowego
if(true) {
    var a2 = 100; // zmienne lokalne | VAR  nadpisze (nie przesłoni) nam zmienną globalną 

    console.log(a2);

    var b = 120;
}
console.log(a2);
console.log(b);