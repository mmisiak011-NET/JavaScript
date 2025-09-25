
// =============================
// Instrukcje warunkowe w JS
// =============================

//👉 if
// W JS działa podobnie jak w C#. Sprawdza warunek logiczny.
// Różnica: w JS dowolna wartość może być traktowana jako true/false.
//  - "falsy" wartości to: false, 0, NaN, "", null, undefined
//  - wszystko inne jest "truthy" (np. "0" jako string => true)

if (true) {
  console.log("Zawsze się wykona");
}

if (0) {
  console.log("To się nie wykona, bo 0 = falsy");
}

let age = 17;

if (age == 18) {
  console.log("age == 18");
} else if (age < 18) {
  console.log("age < 18");
} else if (age > 18 && age < 25) {
  console.log("age > 18 && age < 25");
} else {
  console.log("age >= 25");
}

//👉 Różnice C# vs JS:
// - W C# typy są ściślejsze (int, bool itd.), w JS wszystko jest "dynamiczne".
// - Operator == w JS robi konwersję typów (np. "5" == 5 -> true).
//   Lepiej używać === (ścisłe porównanie, jak w C#).

// =============================
// switch
// =============================

//👉 switch w JS działa podobnie do C#,
//    ale w JS porównuje przez === (ścisła równość, bez konwersji typów).

let num = 22;

switch (num) {
  case 5:
    console.log("num: 5");
    break;
  case 12:
    console.log("num: 12");
    break;
  case 22:
    console.log(`num: ${num}`);
    break;
  default:
    console.log("Żaden przypadek nie pasuje");
}

//👉 kilka case może prowadzić do jednego wyniku:
let n = 7;
switch (n) {
  case 5:
  case 6:
  case 7:
    console.log("n to 5, 6 lub 7");
    break;
}

//👉 W C# mamy pattern matching i when:
//   case Person p when p.Age > 18:
// W JS tego nie ma, ale można użyć triku:

const person = { name: "Jan", age: 20 };

switch (true) {
  case person.age > 18:
    console.log("Dorosły");
    break;
  case person.age > 12:
    console.log("Nastolatek");
    break;
  default:
    console.log("Dziecko");
}


// =============================
// Pętle
// =============================

//👉 for (klasyczny)
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}

let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Element ${i}: ${numbers[i]}`);
}

for (let i = 0, j = 10; i < j; i++, j--) { // For z operatorem ","
  console.log(`i = ${i}, j = ${j}`);
}

//👉 for...of – iteracja po wartościach tablicy
for (let num of numbers) {
  console.log("num =", num);
}

//🔹 Różnice JS vs C#
//W C# też można używać przecinka w for, ale tylko w sekcji inicjalizacji i kroku.
//W JS dokładnie tak samo ale przecinek to pełnoprawny operator i możesz go używać też poza pętlami:

//👉 for...in – iteracja po kluczach obiektu
// user[age] pobiera wartosć z właściwosci tak samo jak w tablicy
// ten sam efekt otrzymamy korzystajac z notacji z kropką user.age
const user = { name: "Ala", age: 25, city: "Kraków" };
for (let key in user) {
  console.log(`ForIn: ${key}: ${user[key]}`);
}


//👉 while, może nie wykonac sieani razu jezeli pierwsz ywarunek nei zostanie spełniony
let x = 0;
while (x < 3) {
  console.log("x =", x);
  x++;
}

//👉 do...while – wykona się min. 1 raz
let y = 0;
do {
  console.log("y =", y);
  y++;
} while (y < 3);

//👉 break i continue
for (let i = 0; i < 10; i++) {
  if (i === 5) break;     // kończy pętlę
  if (i % 2 === 0) continue; // pomija parzyste
  console.log("i =", i);
}

// =============================
// Metody tablicowe (często zamiast pętli)
// =============================

//👉 forEach – iteracja po elementach
numbers.forEach((num, index) => {
  console.log(`Index ${index}, wartość ${num}`);
});

//👉 map – zwraca nową tablicę
let doubled = numbers.map(n => n * 2);
console.log(doubled);

//👉 filter – wybiera elementy spełniające warunek
let big = numbers.filter(n => n > 15);
console.log(big);

//👉 reduce – sprowadza tablicę do jednej wartości
let total = numbers.reduce((acc, val) => acc + val, 0);
console.log(total);

//👉 Różnice C# vs JS:
// - W C# mamy LINQ (Select, Where, Aggregate), które działają podobnie do map, filter, reduce.
// - W JS te metody są natywną częścią obiektów tablicowych.



