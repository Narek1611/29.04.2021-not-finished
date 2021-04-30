let number = 17;
if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
  console.log(`${number} is multiple of 3 and 5 and 7`);
} else if (number % 3 === 0 && number % 5 === 0) {
  console.log(`${number} is multiple of 3 and 5`);
} else if (number % 3 === 0 && number % 7 === 0) {
  console.log(`${number} is multiple of 3 and 7`);
} else if (number % 5 === 0 && number % 7 === 0) {
  console.log(`${number} is multiple of 5 and 7`);
} else if (number % 3 === 0) {
  console.log(`${number} is multiple of 3`);
} else if (number % 5 === 0) {
  console.log(`${number} is multiple of 5`);
} else if (number % 7 === 0) {
  console.log(`${number} is multiple of 7`);
} else {
  console.log(`${number} is not multiple of 3, 5 or 7`);
}
