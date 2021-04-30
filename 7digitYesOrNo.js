let digit = 3;
let number = 257;
let a = digit.toString();
let b = number.toString();
let exist = false;
for (let i = 0; i < b.length; i++) {
  if (b[i] === a) {
    exist = true;
    console.log("yes");
  }
}
if (!exist) console.log("no");
