let array = [7, 5, 4, "tox", undefined, true];
let arr2 = [];
for (i = 0; i < array.length; i++) {
  if (typeof array[i] === typeof 1) {
    arr2.push(array[i]);
  }
}
console.log(arr2);

//kentutyunn u zuygutyuny heto kporcem
