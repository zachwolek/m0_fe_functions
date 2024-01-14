// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greetUser() {
    return "Greetings and Salutations!";
  }
  
  // 2: Write a function named customGreeting that returns a greeting WITH a specific name.
  function greetUser(name) {
    return `Greetings and Salutations ${name}!`;
  }
  
  console.log(greetUser("Zach"))
// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function greetUser(name) {
    return `Greetings and Salutations ${name}!`;
  }
  
  console.log(greetUser("Zach"))
// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return `Greetings and Salutations ${firstName} ${middleName} ${lastName}`
  }
    console.log(greetPerson("Zach", "William", "Wolek"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(number) {
    return number * number
}

console.log(square(5))


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(count, item) { 
    if (count === 0) {
          return `${item} - OUT of stock!`;
      } else if (count > 0 && count < 4) {
            return `${item} - running low!`;
      } else if (count >= 4) {
          return `${item} is stocked`;
      }
      }
    
      console.log(checkStock(4, "Salsa"))
      console.log(checkStock(3, "Tortillas"))
      console.log(checkStock(0, "Cheese"))
      console.log(checkStock(1, "Salsa"))

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"