/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/


//chiedo un numero di max 4 cifre all'utente
let numero = prompt('Inserisci un numero di massimo 4 cifre ');


// calcolo la somma dei numeri che compongono il numero dell'utente
let somma = 0;

// tratta il prompt come un array
for (let i = 0; i < numero.length; i++) {
    //fai la somma e trasforma la stringa in un numero
   let num_singolo = parseInt(numero[i]);
    somma = somma + num_singolo;
    
}

console.log(somma);