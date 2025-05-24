if (process.argv[2] === undefined || isNaN(process.argv[2]) || process.argv[2] <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
