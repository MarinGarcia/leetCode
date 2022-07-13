/*

Given an array of n item values, sort the
array in ascending order, first by the frequency
of each value, then  by the values themselves

there are 2 values that occur once 3,5
there are 2 values that occur twice 4,4,55

the array of items sorted by frequency and then
by value in ascending order is 3,6,4,4,5,5

*/


let  itemsSort = function(items){
  let orederNumbers = items.sort();
  let counterNumbers = buildCounterNumber(orederNumbers);
  let duplicatesNumbers = findDuplicatesNumbers(orederNumbers);
  let uniqueNumbers = removeDuplicatesNumbers(orederNumbers, duplicatesNumbers);
  let newArrayDuplicatesNumber = buildArrayDuplicatesNumber(duplicatesNumbers, counterNumbers);

  return [...uniqueNumbers, ...newArrayDuplicatesNumber];
}

let buildArrayDuplicatesNumber = function(duplicatesNumbers, counterNumbers){
  let array = []
  duplicatesNumbers.forEach(element => {
    for (let index = 0; index < counterNumbers[element]; index++) {
      array.push(element);
    }
  })
  return array;
}

let removeDuplicatesNumbers = function(array, duplicates) {
  return array.filter(function(value, index, arr){ 
        return !duplicates.includes(value) ;
  });
}

let findDuplicatesNumbers = function(array) {
  return array.filter((c, index) => {
    return array.indexOf(c) !== index;
  });
}

let buildCounterNumber = function(array){
  let tmpNumbers = {}
  array.forEach(number => {
    if (tmpNumbers[number]) {
      tmpNumbers[number] += 1;
    } else {
      tmpNumbers[number] = 1;
    }
  });
  return tmpNumbers;
}

let array = [ 4,5,6,5,4,3]

console.log("Array order: ", itemsSort(array));