let number = 472;
if (number / 10 < 1) {
  console.log(number);
} else {
  let strNumber = number.toString();
  let arrstrNumber = strNumber.split("");
  let oldFirstDigit = arrstrNumber[0];
  let oldLastDigit = arrstrNumber[arrstrNumber.length - 1];
  arrstrNumber.shift();
  arrstrNumber.pop();
  arrstrNumber.unshift(oldLastDigit);
  arrstrNumber.push(oldFirstDigit);
  arrstrNumber = arrstrNumber.join("");
  console.log(arrstrNumber);
}
