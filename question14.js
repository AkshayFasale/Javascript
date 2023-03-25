//14. Even numbers are divisible by 2 and the remainder is zero.
//How do you check, if a number is even or not using JavaScript ? Create a program which checks that the given number is even or odd.

let num = 10;
if (num % 2 == 0) {
    console.log(`${num} is a Even number`)
}
else {
    console.log(`${num} is a Odd number`)
}

// using function

function checkEven(num1) {
    if (num1 % 2 === 0) {
        console.log(`${num1} is a Even number`)
    }
    else {
        console.log(`${num1} is a Odd number`)
    }
}
checkEven(15);