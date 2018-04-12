
function map(arr, mapCallBack) {

  var newArray = [];

  //for(var element of arr) : this is another way to loop through our array
  for (var i = 0 ; i < arr.length ; i++) {
    newArray.push(mapCallBack(arr[i]));
  }
  return newArray;
}

function wordLength(word) {
 return word.length;
}

function toUpperCase(word) {
  return word.toUpperCase();
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

console.log(map(["ground", "control", "to", "major", "tom"], toUpperCase));