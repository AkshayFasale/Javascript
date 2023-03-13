//Topic - Function

function sum() {
    let num1 = 16;
    let num2 = 25;

    console.log("addition of two number is ", num1 + num2);
}
sum();

//
function sum1(value1, value2) {

    console.log("addition of two number is ", value1 + value2);
    console.log("Subtraction of two number is ", value1 - value2);
    console.log("Multiplication of two number is ", value1 * value2);
    console.log("Division of two number is ", value1 / value2);
    console.log("Modules of two number is ", value1 % value2);


}

sum1(41, 20); //calling function


//Normal function and function with parameter

//function with return type
function sum2(val1, val2) {
    let result = val1 + val2;
    return result;
}
let add = sum2(10, 25)
console.log(add);

//String in JS function
function URL(url, domain) {
    let con = "https://"
    let result = con + url + domain;
    return result;
}

let anuragsite = URL('anuragtiwari.', 'me');
console.log(anuragsite);

//
function sum4(arr) {
    let sum4 = 0;
    for (let i = 0; i < arr.length; i++){
        sum4 = sum4 + arr[i];
    }
    return sum4;
}

let sumarray = [1, 2, 3, 4, 5, 6];
let arrresult = sum4(sumarray);
console.log(arrresult); 

//Arrow function

let arro = (arr1, arr2) => {
    console.log("I am god", arr1, arr2);
}

arro(1,2)

// For in
const username = {
    firstName: "Akshay",
    lastName: "Fasale",
    role: 'Admin',
    loginCount: 25,
}
for (let x in username) {
    console.log(username[x]);
}

//CN
function a() {
    console.log("Inside a");

    function b() {
        console.log("Inside b");
    }
    b();
}

a()

//Passing function as a Arguments
var add1 = function (a, b) {
    return a + b;
}

var subtract = function (a, b) {
    return a - b;
}

var op = function (func) {
    var x = 2;
    var y = 3;
    return func(x, y);
}
console.log(op(subtract));

