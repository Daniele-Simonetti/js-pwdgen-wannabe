// Descrizione esercizio:
// 1.Chiedi all’utente il suo nome,
// 2.poi chiedi il suo cognome,
// 3.poi chiedi il suo colore preferito
// 4.Infine scrivi sulla pagina nomecognomecolorepreferito21


// 1.chiedi all'utente il suo nome
let Nome = prompt('Inserisci il tuo nome');
console.log('Nome utente', Nome);
// 2.chiedi all'utente il suo cognome
let Cognome = prompt('Inserisci il tuo cognome');
console.log('Cognome utente', Cognome);
// 3.chiedi all'utente il suo colore preferito
let Colore = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito utente', Colore);
// 4.genera la password unendo le parole e aggiungendo alla fine 21
let Password = Nome + Cognome + Colore + 21;
console.log('Password per utente', Password);

// genera la password sullo schermo