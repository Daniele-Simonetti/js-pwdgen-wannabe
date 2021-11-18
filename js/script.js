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
// 4.genera la password unendo le parole
let PrimaPartePassword = Nome + Cognome + Colore;
console.log('prima parte password per utente', PrimaPartePassword);
// 5.completa la password aggiungendo il numero 21
let PasswordCompleta = PrimaPartePassword + 21;
console.log(PasswordCompleta);

// 6.genera la password sullo schermo
document.getElementById('genera_password').innerHTML =  PasswordCompleta;
console.log('Password completa', PasswordCompleta);