<<<<<<< HEAD
const args = process.argv.slice(2);

=======
>>>>>>> 47862b5b0096e11c80abf8d76291e43d073bf110
if (args.length === 0 || isNaN(parseInt(args[0]))) {
  console.log("Missing number of occurrences");
} else {
  const x = parseInt(args[0]);
<<<<<<< HEAD
  for (let i = 0; i < Math.abs(x); i++) {
    console.log("C is fun");
  }
}
=======
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }

>>>>>>> 47862b5b0096e11c80abf8d76291e43d073bf110
