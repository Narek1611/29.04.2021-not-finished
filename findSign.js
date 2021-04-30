// let a = 5;
// let b = -6;
// let c = -3;

// if (a === 0 || b === 0 || c === 0) {
//   console.log("unsigned");
// } else if (a > 0 && b > 0 && c > 0) {
//   console.log("+");
// } else if (a > 0 && b < 0 && c > 0) {
//   console.log("-");
// } else if (a > 0 && b > 0 && c < 0) {
//   console.log("-");
// } else if (a > 0 && b < 0 && c < 0) {
//   console.log("+");
// } else if (a > 0 && b < 0 && c < 0) {
//   console.log("+");
// } else if (a < 0 && b > 0 && c > 0) {
//   console.log("-");
// } else if (a < 0 && b < 0 && c > 0) {
//   console.log("+");
// } else if (a < 0 && b > 0 && c < 0) {
//   console.log("+");
// } else if (a < 0 && b < 0 && c < 0) {
//   console.log("-");
// }

let arr = [-15, -6, 8];
let countOfMinuses = 0;
let isZero = false;
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  if (item === 0) {
    isZero = true;
  }

  if (item < 0) {
    countOfMinuses += 1;
  }
}
if (isZero) {
  console.log("unsigned");
} else if (countOfMinuses % 2 === 0) {
  console.log("+");
} else if (countOfMinuses % 2 !== 0) {
  console.log("-");
}
