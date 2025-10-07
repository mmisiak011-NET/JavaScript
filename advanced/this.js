// this_detailed_examples.js


// WAŻNE  
/*
    🔹 W C#
    W C# this zawsze wskazuje na bieżącą instancję klasy i jest 
    statycznie powiązane.
    Nie zależy od tego, w jaki sposób wywołasz metodę – 
    zawsze odnosi się do obiektu, na którym metoda jest wykonywana.


    🔹 W JavaScript
    this jest dynamiczne – zależy od sposobu wywołania funkcji (kontekst wywołania).
    Arrow function nie ma swojego this – „dziedziczy” je z otaczającego kontekstu leksykalnego.
*/


// =====================================================
// 1. Zwykła metoda w obiekcie
// =====================================================
const person1 = {
  name: "Alice",
  sayName: function() {
    console.log("1:", this.name);
  }
};

person1.sayName(); 
// 👉 Wywołujemy metodę przez person1.sayName()
// 👉 this wskazuje na OBIEKT przed kropką (person1)
// Wynik: "Alice"


// =====================================================
// 2. Funkcja strzałkowa w obiekcie
// =====================================================
const person2 = {
  name: "Bob",
  sayName: () => {
    console.log("2:", this.name);
  }
};


person2.sayName(); 


// 👉 Funkcje strzałkowe NIE mają swojego this
// 👉 Dziedziczą this z otoczenia, w którym zostały zdefiniowane
// 👉 Tutaj otoczeniem jest plik/global, a nie obiekt person2
// 👉 mimo zdefiniowana zmiennej let name = "test" poza obiektem w pliku to w funkcji bedzie ona jako undefinied
// 👉 Chyba, że nie odwołamy sied otej zmiennej poprzez this tylko jak d ozwyklej zmiennej/stałej
// 👉 let i const zdefiniowane w globalnym scope nie stają się własnościami window (ani globalThis)
// 👉 można to obejść poprzez globalThis.t = 5; przypisanie do obiektu globalnego
// Wynik: undefined


// =====================================================
// 3. Arrow function wewnątrz zwykłej metody
// =====================================================
const person3 = {
  name: "Charlie",
  sayName: function() {
    const inner = () => {
      console.log("3:", this.name);
    };
    inner();
  }
};

person3.sayName(); 
// 👉 sayName to zwykła metoda → this = person3
// 👉 inner to arrow function → bierze this od sayName
// 👉 this = person3

//  sayName to zwykła metoda wywołana jako person3.sayName().
//  → this = person3.
//  Wewnątrz sayName definiujemy inner jako funkcję strzałkową.
//  → arrow function nie tworzy swojego this, więc „dziedziczy” je z otoczenia, czyli z sayName.
//  W sayName this = person3, więc dla inner też this = person3.
//  ➡️ Dlatego inner() wypisuje "Charlie".

// Wynik: "Charlie"


// =====================================================
// 4. Zgubione this (przypisanie metody do zmiennej)
// =====================================================
const person4 = {
  name: "Diana",
  sayName: function() {
    console.log("4:", this.name);
  }
};

const fn = person4.sayName;
fn(); 
// 👉 Kopiujemy referencję do funkcji do fn
// 👉 Wywołanie fn() nie ma obiektu przed kropką
// 👉 this = global (w strict mode → undefined)
// Wynik: undefined


// =====================================================
// 5. Rozwiązanie: bind
// =====================================================
const boundFn = person4.sayName.bind(person4);
boundFn(); 
// 👉 bind tworzy NOWĄ funkcję z "przywiązanym" this
// 👉 niezależnie od miejsca wywołania, this = person4
// Wynik: "Diana"


// =====================================================
// 6. setTimeout z funkcją zwykłą
// =====================================================
const person5 = {
  name: "Eva",
  sayLater: function() {
    setTimeout(function() {
      console.log("6:", this.name);
    }, 500);
  }
};

person5.sayLater();
// 👉 Funkcja w setTimeout jest wywoływana bez obiektu
// 👉 this = global (window w przeglądarce / undefined w strict mode)
// Wynik: undefined


// =====================================================
// 7. setTimeout + bind
// =====================================================
const person6 = {
  name: "Frank",
  sayLater: function() {
    setTimeout(function() {
      console.log("7:", this.name);
    }.bind(this), 1000);
  }
};

person6.sayLater();
// 👉 Funkcja wewnętrzna została związana z this = person6
// 👉 Dzięki bind this nie ucieka
// Wynik: "Frank"


// =====================================================
// 8. setTimeout + funkcja strzałkowa
// =====================================================
const person7 = {
  name: "Grace",
  sayLater: function() {
    setTimeout(() => {
      console.log("8:", this.name);
    }, 1500);
  }
};

person7.sayLater();
// 👉 Funkcja strzałkowa nie ma swojego this
// 👉 Dziedziczy this z sayLater → this = person7
// Wynik: "Grace"


// =====================================================
// 9. this w klasach
// =====================================================
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log("9:", this.name);
  }


  sayNameLater() {
    setTimeout(function() {
      console.log("9.1:", this.name);
    }, 2000);

    setTimeout(() => {
      console.log("9.2:", this.name);
    }, 2500);
  }

  sayNameArrow = () => {
    console.log("10:", this.name);
  }

}

const p = new Person("Henry");

p.sayNameArrow();

p.sayName();     

p.sayNameLater();
// 👉 9.1: zwykła funkcja w setTimeout → this = global → undefined
// 👉 9.2: arrow function → dziedziczy this z sayNameLater → this = instancja
// Wynik: undefined, potem "Henry"


const x = new Person("Charlie");


const f1 = x.sayName;
//f1(); 
// 👉 undefined/ error Cannot read properties of undefined
//  (bo zwykła metoda gubi this po wyrwaniu z obiektu)

const f2 = x.sayNameArrow;
f2(); 
// 👉 "Charlie" (bo arrow zapamiętała this z konstruktora)