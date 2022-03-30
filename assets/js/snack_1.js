/* SNACK 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

//L’utente inserisce due numeri in successione, con due prompt.
const first_number = parseInt(prompt('Inserisci il primo numero'));
const second_numeber = parseInt(prompt('Inserisci il secondo numero'));

//Il software stampa il maggiore.

if (first_number > second_numeber){
    console.log('Il primo numero è maggiore del secondo numero');
} else if (first_number < second_numeber){
    console.log(' il secondo numero è maggiore del primo');
} else {
    console.log('I numeri sono uguali');
}