let arr = ["banan", "garoxik", "dzi", "armagedon"];
let arrLengths = [];
for (i = 0; i < arr.length; i++) {
  arrLengths.push(arr[i].length);
}
console.log(arrLengths);
//qanaknery lcrel em arrayi mej, uxxaki petq a nenc funkcia vor arrayic khani amenamec yev amenapoqr tvery u kgumari
arrLengths.sort(function (a, b) {
  return a - b;
});
console.log(arrLengths);
console.log(arrLengths[0] + arrLengths[arrLengths.length - 1]);
