// This JavaScript code demonstrates the use of variables and constants in calculating the area of a circle
const PI = 3.14; // This is a constant representing the value of pi
let radius = 3; // This is a variable representing the radius of a circle

let area = radius * radius * PI; // This calculates the area of a circle using the formula A = πr²

console.log(area); // This outputs the area of the circle to the console

radius = 20; // We can change the value of radius since it's a variable
area = radius * radius * PI; // Recalculate the area with the new radius

console.log(area); // Output the new area to the console

// Attempting to change the value of PI will result in an error since it's a constant
// PI = 3.14159; // Uncommenting this line will cause an error because PI is a constant

//type coercion example
const one = 1;// This is a constant representing the number one
const two = '2';// This is a constant representing the string '2'

let result = one * two; // This will concatenate the number 1 and the string '2' resulting in '12'
console.log(result); // Output the result to the console

//result = one + two; // This will also concatenate the number 1 and the string '2' resulting in '12'
// To avoid type coercion, we can convert the string to a number before performing the operation
result = one + Number(two); // This will convert the string '2' to a number and then add it to 1 resulting in 3
console.log(result); // Output the result to the console

// Global and block scope example
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    