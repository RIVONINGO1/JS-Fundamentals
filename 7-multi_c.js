if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < Math.abs(parseInt(process.argv[2])); i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
