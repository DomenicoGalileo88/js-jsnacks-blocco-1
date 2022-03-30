/* 
SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


//L’utente inserisce due parole in successione, con due prompt.
const prima_parola = prompt('Inserisci la prima parola');
const seconda_parola = prompt('Inserisci la seconda parola');

//Il software stampa prima la parola più corta, poi la parola più lunga.

if (prima_parola.length > seconda_parola.length){
    console.log(`Parola corta ${seconda_parola} parola lunga ${prima_parola}`);

} else if (prima_parola.length < seconda_parola.length){
    console.log(`Parola corta ${prima_parola} parola lunga ${seconda_parola}`);

} else {
    console.log('Le due parole hanno la stessa lunghezza');
}