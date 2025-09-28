


/*

Callback w JavaScript to funkcja przekazywana jako argument 
do innej funkcji, która zostanie wywołana w późniejszym momencie 
(najczęściej po zakończeniu jakiejś operacji, np. asynchronicznej).

Funckja .map na tablicy korzysta np z collbacka

*/

// 👉 PODSTAWOWY PRZYKŁAD

function przywitaj(imie, callback) {
  console.log("Cześć, " + imie);
  callback(); // wywołujemy funkcję przekazaną jako argument
}

function pozegnaj() {
  console.log("Do zobaczenia!");
}

przywitaj("Kasia", pozegnaj);
//Tutaj pozegnaj jest callbackiem – zostaje wywołany dopiero po wykonaniu przywitaj.



// 👉 PRZYKŁAD Z TABLICĄ

function show(txt){
    console.log(txt);
}

function showArr(arr, collback){
    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        collback(num);
    }
}

const tab = [1,2,3,4];

showArr(tab, show);


// 👉 PRZYKŁAD Z ASYNCHRONICZNOŚCIĄ (setTimeout)

function pobierzDane(callback) {
  console.log("Pobieram dane...");

  setTimeout(() => {
    console.log("Dane pobrane!");
    callback(); // wywołujemy callback po 2 sekundach
  }, 1000);
}

pobierzDane(() => {
  console.log("Teraz mogę użyć pobranych danych.");
});




function logA(collBack){
    setTimeout(() => {
        console.log('a');

        const someValue = 'this is from a'// po 2 sek zwracamy dopiero jakiś obiekt
        collBack(someValue);
        
    }, 2000)
}


function logB(param){
    console.log('b')
    console.log(param)
}

logA(logB);

/*
Wynik:

    a
    b
    this is from a
*/


/*

✅ Podsumowanie:
Callback to funkcja przekazywana jako argument.
Wywoływana jest dopiero w określonym momencie.
Bardzo często używana w operacjach asynchronicznych (np. setTimeout, obsługa zdarzeń, AJAX).

*/
