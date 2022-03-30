/* 
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

//chiedi un numero all'utente
const number = parseInt(prompt('Inserisci un numero'));

//crea un ciclo che stampi una serie di numeri fino al numero indicato dall'utente

for (let i = 1; i <= number; i++){
    console.log(Math.pow(i, 3));
}

