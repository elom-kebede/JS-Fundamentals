#!/usr/bin/node

function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}

const num = Number(process.argv[2]);

console.log(factorial(Number.isNaN(num) ? 0 : num));
