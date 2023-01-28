let rows = 5; // rows is define for the size of pattern
let pattern = ""; // pattern is define for the print pattern
for (let n = rows; n >= 1; n--) { // for loop for rows
   for (let num = 1; num <= n; num++) { // for loop for columns
      if (num === 1 ||num === n || n === rows ) pattern += "*"; 
      
      else {
      pattern += " ";
      }
   }
   pattern += "\n";
}
console.log(pattern);
