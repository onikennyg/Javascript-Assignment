var a = 5;
var b = -7;
var c = 2.673;

console.log(a);


// String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    let spl = str.split("").reverse().join("");
    return console.log(spl);
}
reverseString("table");


//Count Characters: Create a function that counts the number of characters in a string.
function countString(str){
    let lengthOfString = str.split("").length
    return console.log(lengthOfString);
}
countString("table")


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// let word = "jesutoni"
//     let cap = word.charAt(0).toUpperCase() + word.slice(1)
//     console.log(cap);


function capilalizeFirstLetterOfEachWordInASentence(sentence){
    return console.log
    (sentence.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" "))
    };
capilalizeFirstLetterOfEachWordInASentence("we figured it out")


// Math Methods:

// abs(x)	Returns the absolute value of x
console.log(Math.abs(b));

// acos(x)	Returns the arccosine of x, in radians
console.log(Math.acos((a * Math.PI) / 180));

// acosh(x)	Returns the hyperbolic arccosine of x
console.log(Math.acosh(a));

// asin(x)	Returns the arcsine of x, in radians
console.log(Math.asin((a * Math.PI) / 180));

// asinh(x)	Returns the hyperbolic arcsine of x
console.log(Math.asinh(a));

// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
console.log(Math.atan(a));

// atan2(y, x)	Returns the arctangent of the quotient of its arguments
console.log(Math.atan2(a, b));

// atanh(x)	Returns the hyperbolic arctangent of x
console.log(Math.atanh((a * Math.PI) / 180));

// cbrt(x)	Returns the cubic root of x
console.log(Math.cbrt(a));

// ceil(x)	Returns x, rounded upwards to the nearest integer
console.log(Math.ceil(b));

// cos(x)	Returns the cosine of x (x is in radians)
console.log(Math.cos(a * 10));

// cosh(x)	Returns the hyperbolic cosine of x
console.log(Math.cosh(a));

// exp(x)	Returns the value of Ex
console.log(Math.exp(a));

// floor(x)	Returns x, rounded downwards to the nearest integer
console.log(Math.floor(c));

// log(x)	Returns the natural logarithm (base E) of x
console.log(Math.log(a));

// max(x, y, z, ..., n)	Returns the number with the highest value
console.log(Math.max(a, b, c));

// min(x, y, z, ..., n)	Returns the number with the lowest value
console.log(Math.min(a, b, c));

// pow(x, y)	Returns the value of x to the power of y
console.log(Math.pow(b, a));

// random()	Returns a random number between 0 and 1
console.log(Math.random());

// round(x)	Rounds x to the nearest integer
console.log(Math.round(c));

// sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
// If the number is positive, this method returns 1.
// If the number is negative, it returns -1.
// If the number is zero, it returns 0.
console.log(Math.sign(b));

// Array Methods
var fruits = ["Apple", "Banana", "Orange", "Apple", "Mango"];
var numbers = [4, 9, 16, 25];

// join()	Joins all elements of an array into a string
console.log(fruits.join());

// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
console.log(fruits.lastIndexOf("Apple"));

// length	Sets or returns the number of elements in an array
console.log(fruits.length);

// map()	Creates a new array with the result of calling a function for each array element
var newArray = numbers.map(Math.sqrt);
console.log(newArray);

// pop()	Removes the last element of an array, and returns that element
console.log(fruits.pop());

// push()	Adds new elements to the end of an array, and returns the new length
console.log(fruits.push("Grapes"));

// reverse()	Reverses the order of the elements in an array
console.log(fruits.reverse());

// shift()	Removes the first element of an array, and returns that element
console.log(fruits.shift());

// slice()	Selects a part of an array, and returns the new array
console.log(fruits.slice(2, 4));

// sort()	Sorts the elements of an array
console.log(fruits.sort());
// console.log("wait")

// splice()	Adds or Removes array elements
console.log(fruits.splice(3, 1, "Lemon", "Watermelon"));
console.log(fruits);

// at()	Returns an indexed element of an array
console.log(fruits.at(3));

// concat()	Joins arrays and returns an array with the joined arrays
var children = fruits.concat(numbers);
console.log(children);

// indexOf()	Search the array for an element and returns its position
console.log(fruits.indexOf("Lemon"));

// isArray()	Checks whether an object is an array
console.log(Array.isArray(fruits));