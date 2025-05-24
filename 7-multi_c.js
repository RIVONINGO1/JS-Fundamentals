const num = parseInt(process.argv[2]);
if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < Math.abs(num); i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
