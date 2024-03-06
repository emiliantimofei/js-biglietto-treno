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
}
else {
    console.log('Errore inserisci dei numeri validi!');
}

/* Non mi ricordo come mettere l'errore anche quando lo user non mette nulla nel prompt */
