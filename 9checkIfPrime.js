let number = 8;
let exist = false;
for (i = 2; i < number / 2; i++) {
  if (number % i === 0) {
    exist = true;
  }
}
if (exist) console.log("yes");
else console.log("no");
