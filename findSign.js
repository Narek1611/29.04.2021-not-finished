let a = 5;
let b = -6;
let c = -3;

if (a === 0 || b === 0 || c === 0) {
  console.log("unsigned");
} else if (a > 0 && b > 0 && c > 0) {
  console.log("+");
} else if (a > 0 && b < 0 && c > 0) {
  console.log("-");
} else if (a > 0 && b > 0 && c < 0) {
  console.log("-");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("+");
} else if (a > 0 && b < 0 && c < 0) {
  console.log("+");
} else if (a < 0 && b > 0 && c > 0) {
  console.log("-");
} else if (a < 0 && b < 0 && c > 0) {
  console.log("+");
} else if (a < 0 && b > 0 && c < 0) {
  console.log("+");
} else if (a < 0 && b < 0 && c < 0) {
  console.log("-");
}
