let number = 1454;
let strNumber = number.toString();
let arrstrNumber = strNumber.split("");
let sum = 0;
let product = 1;
for (let i = 0; i < arrstrNumber.length; i++) {
  sum += parseInt(arrstrNumber[i]);
  product *= parseInt(arrstrNumber[i]);
}
console.log(sum);
console.log(product);

if (product % sum === 0) {
  console.log(`Quotent is ${product / sum}`);
} else {
  console.log(`Remainder is ${product % sum}`);
}
