/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/


//Il software deve chiedere per 10 volte all’utente di inserire un numero.

let somma, inserire_numero;
somma = 0;

/* for (let i = 0; i < 10; i++) {
    const inserire_numero = parseInt(prompt('Inserisci un numero'));
    somma = somma + inserire_numero
}

console.log(somma);
let risultato = document.getElementById('risultato').innerHTML = `La somma dei numeri è: ${somma}`; */
let i = 0;
while (i < 10){

    const inserire_numero = parseInt(prompt('Inserisci un numero'));
    somma += inserire_numero
    
    i++;
};

let risultato = document.getElementById('risultato').innerHTML = `La somma dei numeri è: ${somma}`;

//Il programma stampa la somma di tutti i numeri inseriti.