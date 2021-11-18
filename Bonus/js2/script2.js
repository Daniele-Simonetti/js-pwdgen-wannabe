// Descrizione esercizio:
// 1.Chiedi all’utente il suo nome,
// 2.poi chiedi il suo cognome,
// 3.poi chiedi il suo colore preferito
// 4.poi chiedi il suo numero preferito
// 5.al suo numero preferito sommiamo 5
// 6.genera prima parte della password
// 7.completa la password
// 8.mostra la password a sschermo

// N.B: al punto "4", "5" e "7": no "console.log" per non far vedere sulla console a chiunque il processo di calcolo dei numeri per completare la password

// 1.chiedi all'utente il suo nome
let Nome = prompt('Inserisci il tuo nome');
console.log('Nome utente', Nome);

// 2.chiedi all'utente il suo cognome
let Cognome = prompt('Inserisci il tuo cognome');
console.log('Cognome utente', Cognome);

// 3.chiedi all'utente il suo colore preferito
let ColorePreferito = prompt('Inserisci il tuo colore preferito');
console.log('Colore preferito utente', ColorePreferito);

// 4.chiedi all'utente il suo numero preferito
let NumeroPreferito = prompt('Inserisci il tuo numero preferito');

// 5.al suo numero preferito aggiungiamo 5
let SommaFinale = parseInt(NumeroPreferito) + 5;

// 6.genera la prima parte della password
let PrimaPartePassword = Nome + Cognome + ColorePreferito;
console.log('prima parte password per utente', PrimaPartePassword);

// 7.completa la password aggiungendo il numero finale
let PasswordCompleta = PrimaPartePassword + SommaFinale;

// 8.genera la password sullo schermo
document.getElementById('genera_password').innerHTML =  PasswordCompleta;
console.log('Password completa', PasswordCompleta);
