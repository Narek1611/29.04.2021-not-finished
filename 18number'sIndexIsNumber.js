let arr = [4, 10, 6, 0];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr[arr[i]] = arr[i];
}
console.log(newArr);

for (let i = 0; i < newArr.length; i++) {
  if (typeof newArr[i] !== "number") {
    newArr[i] = "undefined";
  }
}
console.log(newArr);
