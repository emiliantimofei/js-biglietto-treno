/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */
let kilosChoosed = parseInt(prompt('Quanti chilometri vorresti fare?'));
let age = parseInt(prompt('Quale è la tua età'));
console.log(kilosChoosed);
console.log(age);

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

let priceOfTrip = (0.21 * kilosChoosed);

let priceMinor = (priceOfTrip - (priceOfTrip * 0.2));
let priceOld = (priceOfTrip - (priceOfTrip * 0.4));

if ((age < 18) || (age >= 65) || ((age >= 18) && (age < 65))){
    if (age < 18){
        console.log(financial(priceMinor));
    } else if(age >= 65){
        console.log(financial(priceOld));
    }
    else if((age >= 18) && (age < 65)){
        console.log(financial(priceOfTrip));
    }
    else !null(kilosChoosed && age);
}
else {
    console.log('Errore inserisci dei numeri validi!');
}
