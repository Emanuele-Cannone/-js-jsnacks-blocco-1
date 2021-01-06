// 1. Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. 
// Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.


var numeroGenerato = Math.floor(Math.random() * 100) + 1;// il computer genera un numero casuale tra 1 e 100

console.log(numeroGenerato);

var message;
var i = 0;
var tentativi;

while (numeroGenerato != numeroUtente && i < 4){// fino a quando - IL NUMEROGENERATO E' DIVERSO DAL NUMEROUTENTE 'E' fino a quando i è minore di 4
  var numeroUtente = parseInt(prompt('Indovina il numero tra 1 e 100'));// il NUMEROUTENTE deve essere un numero intero e chiesto nel prompt
  if (numeroUtente < 1 || numeroUtente > 100){// se il NUMEROUTENTE è minore di 1 OPPURE maggiore di 100 
    message = ' Hai inserito un numero sbagliato';
    tentativi = 'tentativo '+ ++i + message;
    console.log(tentativi);
  } else if (numeroUtente > numeroGenerato){// se il NUMEROUTENTE è più alto da NUMEROGENERATO 
    message = ' il tuo numero è alto';
    tentativi = 'tentativo ' + ++i + message;
    console.log(tentativi);
  } else if (numeroUtente < numeroGenerato){// se il NUMEROUTENTE è più basso da NUMEROGENERATO 
    message = ' il tuo numero è basso';
    tentativi = 'tentativo ' + ++i + message;
    console.log(tentativi);
  }
}

if (numeroGenerato == numeroUtente){
  message = 'hai vinto!';
} else if (i == 4){
  message = 'hai perso!';
}
console.log(message);









