

/*
🔹 IIFE?
    IIFE = Immediately Invoked Function Expression
    czyli funkcja, która jest definiowana i natychmiast wykonywana.
    ()() -> podstawowa składnia 
*/

(function() {
  console.log("Hello from IIFE!");
})();


(function(name) {
  console.log("Hello " + name);
  var b = 10;
  console.log(b);
})("Alice"); 


if(true){
    var a = 5;
}
console.log(a);
console.log(b); // ReferenceError ponieważ var ma zasięg funkcyjny


/*

🔹 function() { ... } → zwykła anonimowa funkcja,
🔹 ( ... ) → nawiasy robią z niej wyrażenie funkcyjne (Function Expression), a nie deklarację,
🔹 () → natychmiastowe wywołanie tej funkcji.
🔹 Zanim mieliśmy dostępne let oraz const var było ogrywane poprzez iife w celu ograniczenia zasięgu


🔹 Do czego się używa?

    Tworzenie prywatnego zakresu (żeby zmienne nie trafiały do globalnego scope).
    Inicjalizacja kodu tylko raz.
    Kiedyś było to częste rozwiązanie w JS przed wprowadzeniem let/const i modułów ES6.

*/