


let a = 12; // Zmienne globalna
const txt = "Kasia"; // Zmienne globalna

if(true) {
    let a = 100; // zmienne lokalne | Przesłania nam zdefiniowane zmienne globalne
    let txt = "Zosia" // zmienne lokalne | Przesłania nam zdefiniowane zmienne globalne
    console.log(a);
    console.log(txt);
}

console.log(a);
console.log(txt);





var a2 = 12; // Zmienne globalna | VAR nie ma zasiegu blokowego
if(true) {
    var a2 = 100; // zmienne lokalne | VAR  nadpisze (nie przesłoni) nam zmiennąglobalną 

    console.log(a2);

    var b = 120;
}
console.log(a2);
console.log(b);