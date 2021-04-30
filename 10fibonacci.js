let number = 5;
let fib = [];
fib[0] = 0;
fib[1] = 1;
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib[number - 1]);
