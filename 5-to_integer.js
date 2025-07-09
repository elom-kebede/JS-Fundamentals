const arg = process.argv[2];
num = Number.parseInt(arg);
if (!Number.isNaN(num)) {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}