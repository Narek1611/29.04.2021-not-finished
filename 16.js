let single = 8;
let numbers = [1, 4, 7, -68, 0, 25];
let diff = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] === single) {
    console.log(i);
  } else {
    diff.push(Math.abs(numbers[i] - single));
  }
}
console.log(diff);
console.log(diff.indexOf(Math.min(...diff)));
