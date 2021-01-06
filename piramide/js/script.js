// Realizzare (utilizzando i cicli for) una piramide di asterischi come questa:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

var albero = [' ', ' ', ' ', ' ', ' ', ' ', '*'];
var stella = '*';
console.log(albero);

for (var i = 0; i < 6; i++){
  albero.shift();
  albero.splice(6, 0, stella, stella);
  console.log(albero);
}

