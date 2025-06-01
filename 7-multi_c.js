const args = process.argv.slice(2);

if (args.length === 0 || isNaN(parseInt(args[0]))) {
  console.log("Missing number of occurrences");
} else {
  const x = parseInt(args[0]);
  for (let i = 0; i < Math.abs(x); i++) {
    console.log("C is fun");
  }
}
