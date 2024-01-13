// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// The argument "Hello" is passed; includes() has one clear job which is to determine if the string "Hello World" includes the string "Hello"
// The return value should be "true"
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// The argument "Hello" is passed; endsWith() has one clear job which is to determine if the string "Hello World" ends with the string "Hello"
// The return value should be "false"
"Hello World".endsWith("Hello");

// The "endsWith()" method is called on the string "Hello World"
// The argument "rld" is passed; endsWith() has one clear job which is to determine if the string "Hello World" ends with the string "rld"
// The return value should be "true"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

var string1 = "In Class Exercises"
var string2 = "Check for Understanding"

//The argument "Class" is passed; includes() has one clear job which is to determine if the string "In Class Exercises" ends includes the string "Class"
//The return value should be "true"
//The console.log() statement should print "true", because "In Class Exercises" includes the string "Class"
console.log(string1.includes("Class"));

//The argument "anding' is passed; endsWith() has one clear job which is to determine if the string "Check for Understanding" ends with the string "anding"
//The return value should be "true"
//The console.log() statement should print "true", because "Check For Understanding" ends with the string "anding"
console.log(string2.endsWith("anding"));


// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var arrayInteger = [2, 4, 6, 8, 10]
var arrayName = ["Zach", "Laurel", "Kyle", "Charles", "Reese",]
// I will use 
console.log(arrayName.sort());
console.log(arrayInteger.reverse());

