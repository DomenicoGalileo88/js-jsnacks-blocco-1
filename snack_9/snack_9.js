// Calcola la somma e la media dei primi 10 numeri

// ho 10 numeri
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// calcolo la loro somma e la loro media

let somma = 0;
let media;
for (let i = 0; i < numeri.length; i++) {
    const element = numeri[i];
    somma = somma + element;
    media = somma / numeri.length;
}

console.log(`La somma dei numeri è: ${somma} e la media è: ${media}`);
const risultato = document.getElementById('risultato');
risultato.innerHTML = `La somma dei numeri è: ${somma} e la media è: ${media}`;