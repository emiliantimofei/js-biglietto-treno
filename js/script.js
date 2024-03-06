let kilosChoosed = parseInt(prompt('Quanti chilometri vorresti fare?'));
let age = parseInt(prompt('Quale è la tua età'));
console.log(kilosChoosed);
console.log(age);

let priceOfTrip = (0.21 * kilosChoosed);

let priceMinor = (priceOfTrip -(priceOfTrip * 0.2));
let priceOld = (priceOfTrip - (priceOfTrip * 0.4));

if ((age <= 18) || (age >= 65) || ((age > 18) && (age < 65))){
    if (age <= 18){
        console.log(priceMinor);
    } else if(age >= 65){
        console.log(priceOld);
    }
    else if((age > 18) && (age < 65)){
        console.log(priceOfTrip);
    }
}
else {
    console.log('Errore inserisci dei numeri validi!');
}
