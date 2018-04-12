var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var newArray = [];
var result = input.map(function(num) {
    var z = Math.sqrt((num.x * num.x) + (num.y * num.y));
    return z;
});

console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
