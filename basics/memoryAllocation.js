

// =============================
// Alokowanie w pamięci
// =============================

// ✅ Typy proste/prymitywane
let a = 10;
let b = a; // b ma osobne miejsce w pamięci tworzona tu jest kopia
b++;
console.log("a: "+ a);
console.log("b: "+ b);


// ✅ Typy Referencyjne
let obj = {a: 10};
let data = obj; // przepisujemy referencje wiec oba te obiekty wskazuja na to samo miejsce w pamięci

obj.a++;
console.log("obj: " + obj.a);
console.log("data: " + data.a);

//Sprawdzenie referencji
if(obj == data){ // Sprawdzenie czy obj wskazuje na to samo miesce w pamięci co data

}
