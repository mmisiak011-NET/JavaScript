

//🔹 funkcja konstruktor

/*
    🔹STARE PODEJSCIE PRZED ES6 teraz korzysta sie z klas
    🔹To zwykła funkcja, ale używana razem z new do tworzenia obiektów.
    🔹Konwencja: nazwa zaczyna się wielką literą.


*/

function Person(name, age) {
  this.name = name;   // `this` = nowy obiekt
  this.age = age;

  this.sayHello = function() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
  };
}

const p1 = new Person("Alice", 25);
p1.sayHello(); // Hi, I'm Alice, 25 years old


function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
};

const p2 = new Person2("Bob", 30);
const p3 = new Person2("Charlie", 40);

p2.sayHello(); // Hi, I'm Bob, 30 years old
p3.sayHello(); // Hi, I'm Charlie, 40 years old

//👉 Teraz wszystkie obiekty Person korzystają z tej samej funkcji sayHello w prototypie, zamiast kopiować ją do każdej instancji.

/*

📌 Jak to działa krok po kroku:
🔹 Gdy wywołujemy new Person(...), JS robi nowy pusty obiekt {}.
🔹 Ustawia this wewnątrz funkcji na ten nowy obiekt.
🔹 Jeśli funkcja nic nie zwróci, domyślnie zwracany jest ten nowy obiekt.


🔹 Jeśli zdefiniujemy metodę w środku konstruktora, 
    każda instancja dostaje kopię tej metody (nieoptymalne).
🔹 Lepsza praktyka – używać prototype:
*/