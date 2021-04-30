let array = [7, 5, 4, 8, 15, 22, "tox", undefined, true];
let arr2 = [];
for (i = 0; i < array.length; i++) {
  if (typeof array[i] === typeof 1) {
    arr2.push(array[i]);
  }
}
console.log(arr2);

//kentutyunn u zuygutyuny heto kporcem

let arr3 = [];
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    arr3.push(arr2[i]);
  } else {
    arr3.unshift(arr2[i]);
  }
}
