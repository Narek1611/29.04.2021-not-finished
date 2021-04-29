let array = [7, 5, 4, "tox", "undefined", "sexan"];
let arrNum = [];
let arrStr = [];
for (i = 0; i < array.length; i++) {
  if (typeof array[i] === typeof 1) {
    arrNum.push(array[i]);
  } else if (typeof array[i] === typeof "string") {
    arrStr.push(array[i]);
  }
}
console.log(`Numbers: ${arrNum.length}`);
console.log(`Strings: ${arrStr.length}`);
