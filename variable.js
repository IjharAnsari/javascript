/**
 * You will details about variables here
 */

//using var keywords
var firstName;

//using let keywords
let lastName;

console.log(firstName); //output undefined
console.log(lastName);  //output undefined

//initializing
firstName = "Ijhar";
lastName = "Ansari";

console.log(firstName); //output Ijhar
console.log(lastName);  //output Ansari

//Better way to create a variable is by declaring and intializing at same place

var myAge = "26 years";

/**
 * Difference between let and var
 */

//var is a history and let was introduce in moder javascript

//Using var, we can initialize a variable before declaring it. But with let, this is not possible for e.g

myName = 'Ijhar';

function logName() {
  console.log(myName);
}

logName();

var myName; //this line of code will work because of Hoisting but as hoisting doesn't work with let keywords above code will not work with let keyword

//we can define same variable multiple times using var key words but it is not possible with let

var firstName = "Ijhar ansari"; //works fine
var firstName = "Ansari Ijhar"; //works fine

let lastName = "Ansari" //workds
let lastName = "Doe" //throw error





