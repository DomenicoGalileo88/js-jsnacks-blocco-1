// Stampa le potenze di 2 fino a 1000

//crea un ciclo che stampi la pot di 2 fino a che il suo risultato sia 1000

for (i = 0; i <= 9; i++){
    let numero = Math.pow(2, i);
    console.log(numero);
}

// oppure

for(i = 0; Math.pow(2, i) < 1000; i++){
    console.log(Math.pow(2, i));
}