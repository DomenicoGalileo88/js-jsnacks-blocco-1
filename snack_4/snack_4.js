/* 
SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/


//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby

const lista = ['Marco', 'Luca', 'Alessio', 'Antonia', 'Lucrezia', 'Federica'];


//chiedi all’utente il suo nome

const user_name = prompt('Come ti chiami?');
let partecipazione = false;

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (user_name == element) {
        partecipazione = true;
    }
}

if (partecipazione) {
    console.log('Puoi entrare');
} else {
    console.log('Non sei nella lista, quindi non puoi entrare');
}


// comunicagli se può partecipare o no alla festa.