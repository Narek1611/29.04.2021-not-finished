// let num = 132;

// for (let index = num; index > 0; index--) {
//   if (index % 2 === 0) {
//     console.log(`${index} is even`);
//   } else {
//     console.log(`${index} is odd`);
//   }
// }

// /////

// for (let index = num; index > 0; index--) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log(`${index} is multiple of 3 and 5`);
//   } else if (index % 3 === 0) {
//     console.log(`${index} is multiple of 3`);
//   } else if (index % 5 === 0) {
//     console.log(`${index} is multiple of 5`);
//   } else {
//     console.log(`${index} is not multiple of 3 or 5`);
//   }
// }

////

//arajin u verjin tvanshanneri texery poxel aranc
let number = 4532;
let size = ("" + number).length;
let lastDigit = number % 10;
let firstDigit = Math.floor(number / Math.pow(10, size - 1));
console.log(firstDigit);
number = number - firstDigit * Math.pow(10, size - 1);
console.log(number);
number = Math.floor(number / 10);
console.log(number);
number = number * 10 + firstDigit;
console.log(number);
number = lastDigit * Math.pow(10, size - 1) + number;
console.log(number);
