let newArr = [];
let arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].reduce((a, b) => a + b, 0));
}
console.log(newArr);
