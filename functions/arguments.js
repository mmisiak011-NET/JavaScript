

// ==============================
// 📌 arguments
// ==============================

/*

arguments - To specjalny obiekt dostępny wewnątrz funkcji zwykłych 
(nie działa w strzałkowych () => {}).
Zawiera wszystkie przekazane argumenty do funkcji, 
nawet jeśli nie zostały one jawnie zadeklarowane w liście parametrów.

*/


function pokazArguments(a, b) {
  console.log("Pierwszy:", a);
  console.log("Drugi:", b);
  console.log("Wszystkie:", arguments);
}

pokazArguments(10, 20, 30, 40);

/*

Pierwszy: 10
Drugi: 20
Wszystkie: [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }


arguments wygląda jak tablica (array-like object), 
ale nie jest prawdziwą tablicą – nie ma np. metod .map() czy .filter(). 
Mozna jednak 
dostać się do elementów przez indeks (arguments[0], arguments[1], itd.).
*/


/*
Zamiana arguments na tablicę
Można go łatwo przerobić:
*/
function sumuj() {
  const args = Array.from(arguments); 
  return args.reduce((suma, val) => suma + val, 0);
}

console.log(sumuj(1, 2, 3, 4, 5)); // 15


// ==============================
// 📌 ...args - rest operator
// ==============================

/*
Uwaga – w nowoczesnym JS 
zamiast arguments lepiej używać rest parameters (...args)
*/

function sumuj(...args) {
  return args.reduce((suma, val) => suma + val, 0);
}

console.log(sumuj(1, 2, 3, 4, 5)); // 15



// ==============================
// 📌 Dosmyślne argumenty funkcji
// ==============================

/*

Dostępne od ES6

*/

function createEmployee(name = "unknow", surname = "unknow", email = "unknow@wp.pl"){
  return {
    name: name,
    surname: surname,
    email: email
  }
}

console.log(createEmployee("test"));
console.log(createEmployee(undefined, "surnemae"));

//👉 Jeśli chcemy „pominąć” pierwszy argument, 
// a ustawić tylko drugi, można to zrobić przekazując undefined:
// W praktyce, aby wygodnie wskazywać tylko wybrane wartości, 
// często stosuje się destrukturyzację obiektów:

function createUser({ name = "Anonymous", age = 18, role = "user" } = {}) {
  console.log(name, age, role);
}

createUser();                           // Anonymous 18 user
createUser({ age: 25 });                // Anonymous 25 user
createUser({ name: "Alice", role: "admin" });  // Alice 18 admin


/*
✅ Podsumowanie
reduce() = narzędzie do przekształcania tablic w jedną wartość 
(liczbę, string, obiekt, cokolwiek).
Często używany do sumowania, liczenia średniej, 
spłaszczania tablic, grupowania danych.

array.reduce((accumulator, currentValue, index, array) => {
    LOGIKA
}, initialValue);

accumulator → „pamięta” wynik z poprzedniego kroku
currentValue → aktualny element tablicy
index → indeks aktualnego elementu (opcjonalny)
array → cała tablica (opcjonalna)
initialValue → wartość początkowa akumulatora (opcjonalna, ale zwykle dobra praktyka)
*/