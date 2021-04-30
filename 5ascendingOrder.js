let num1 = -26;
let num2 = -456;
let num3 = 0;
let array = [num1, num2, num3];
console.log(
  array.sort(function (a, b) {
    return a - b;
  })
);
