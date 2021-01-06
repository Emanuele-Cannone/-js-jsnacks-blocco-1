var sceltaUtente;
var sceltaPc;
var giocataPC = ['sasso', 'carta', 'forbice'];// dichiara le variabili per la scelta del pc
var risultato;
var i = 0;// dichiara da quanto parte la i


while (i < 4){// fino a quando la i è minore di 4 
  var vittoria = true;
  sceltaUtente = prompt('Scegli carta o sasso o forbice');// l'utente sceglie tra le 3 possibilità

  while (giocataPC.includes(sceltaUtente) == false){// se l'utente sceglie un valore diverso tra questi
    alert('hai inserito un valore non corretto!');// gli diciamo che ha un problema
    sceltaUtente = prompt('Scegli carta o sasso o forbice');
  }

  sceltaPc = giocataPC[Math.floor(Math.random() * giocataPC.length)];// il pc genera random un valore tra quelli nell'array
  i++;// la i cresce di 1 ogni volta che si ripete il ciclo
  
  console.log(sceltaUtente);// vedi se non esplode il mondo
  console.log(sceltaPc);// vedi se non esplode il mondo
  
  // caso di pareggio
  if (sceltaUtente == sceltaPc){
    console.log('pareggio');
  continue;// in questo modo interrompe l'esecuzione del ciclo del while
 } 

// +++++++++ caso 1 +++++++++

  // utente sceglie sasso
  // if (sceltaUtente == 'sasso' && sceltaPc == 'carta'){
  //   risultato = 'hai perso';
  // } else if (sceltaUtente == 'sasso' && sceltaPc == 'forbice'){
  //   risultato = 'hai vinto';
  // }

  //utente sceglie carta
  // if (sceltaUtente == 'carta' && sceltaPc == 'forbice'){
  //   risultato = 'hai perso';
  // } else if (sceltaUtente == 'carta' && sceltaPc == 'sasso'){
  //   risultato = 'hai vinto';
  // }

  //utente sceglie forbice
  // if (sceltaUtente == 'forbice' && sceltaPc == 'sasso'){
  //   risultato = 'hai perso';
  // } else if (sceltaUtente == 'forbice' && sceltaPc == 'carta'){
  //   risultato = 'hai vinto';
  // }

  // console.log(risultato);

// +++++++++ caso 2 +++++++++

  switch (sceltaUtente){
    case 'sasso': 
    if (sceltaPc == 'carta'){
      vittoria = false;
      }
    break;// in questo modo forziamo l'interruzione del case perchè la partita è risolta
    
    case 'forbice':
      if (sceltaPc == 'sasso'){
        vittoria = false;
      }
    break;

    case 'carta':
    if (sceltaPc == 'forbice'){
      vittoria = false;
      }
    break;    
  }

  if (vittoria){
   console.log('hai vinto');
  } else {
    console.log('hai perso');
  }


}


