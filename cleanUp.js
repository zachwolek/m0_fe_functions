// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?") 
}

askForName()
// The improvements made were to clean up formatting. Instead of being one jumbled line the, console log has its own line to separate


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

//The code was missing "the console.log" to present the solution.  While the function was itself was establishing a math fomula and returning it, the console.log needed to exist separately from the function. Without console.log returning the sum it will not show up for the reader

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


// The code was formatted for easier reading. A line was created between the curly brace and the function for as a best practices measure, and the curly bracket below was formatted to present the function itself

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

  console.log(average(10, 20));

  //The code was missing the arguent and had no information to process the math function. With arbitrary argument numbers such as 10 and 20, the function can now process an argument