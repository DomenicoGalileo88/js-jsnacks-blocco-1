/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

//Crea un array vuoto.

let pari_dispari = [];

//Chiedi per 6 volte all’utente di inserire un numero,

for (let i = 0; i < 6; i++) {
    let inserire_numero = parseInt(prompt('Inserire un numero'));
    
    //se è dispari inseriscilo nell’array.
    if ( inserire_numero % 2 !== 0)
    pari_dispari.push(inserire_numero)
}

console.log(pari_dispari);

