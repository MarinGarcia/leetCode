/*
  Algoritmo:
Dado N: numero entero
Dado ARR: Array con x numero de elementos

Devolver TRUE: si la suma de alguna combinacion de dos numeros en ARR es igual a N
Devolver False: otherwise
*/

function process(number, array) {
  return new Promise((resolve) => {
    let uniqueNumbers = [...new Set(array)];
    uniqueNumbers.forEach((element, index) => {
      uniqueNumbers.forEach((sigElement, sigIndex) =>{
        if (index == sigIndex) return;
        let sumNumber = element + sigElement;
        if (sumNumber == number) resolve(true);
      })
    })
    resolve(false);
  })
}

let arg1 = 7;
let array = [3, 4, 6, 6]

let result = process(arg1, array);

console.log("El resultado es: ", result);