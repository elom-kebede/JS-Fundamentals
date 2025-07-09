

const size = Number.parseInt(process.argv[2]);

if (Number.isNaN(size)) {
  console.log('Missing size');
} else {
  const row = 'X'.repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
