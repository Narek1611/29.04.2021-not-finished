let number = 330;
let strNumber = number.toString();
let lastDigit = strNumber[strNumber.length - 1];
if (lastDigit !== "0") {
  let newstrNumber =
    strNumber[strNumber.length - 1] + strNumber.slice(0, strNumber.length - 1);
  console.log(newstrNumber);
} else {
  console.log(number);
}
