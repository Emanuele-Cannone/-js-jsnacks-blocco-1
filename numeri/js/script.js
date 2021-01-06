// 4. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
// la somma degli elementi è minore di 50.


var arrayNumeri = [];
var numeroScelto;
var numeriInseriti = 0;

while (numeriInseriti < 50 ){
  numeroScelto = parseInt(prompt('inserisci un numeroScelto'));
  numeriInseriti += numeroScelto;
  arrayNumeri.push(numeroScelto);
  console.log(arrayNumeri);
}
