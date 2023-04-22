//02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.


const firstName = "Akshay";
const lastName = "Fasale";
let maritalStatus = "UnMarried";
const country = "India";
let age = 23;

// Interpolate method
const intro = `Hello! My name is ${firstName} ${lastName} and I am ${age} years old. I live in ${country} and currently ${maritalStatus}`;
console.log(intro);

// Traditional method
console.log("Hello My name is " + firstName +" "+lastName + " I live in " +" "+ country + "and i am currently " + maritalStatus);