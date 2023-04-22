// 23. Write a program to check that the number given by the user is a prime number or not.

function isPrime(num) {
    if (num <= 1) { // if num is less than or equal to 1 it will return false as and any number less than 1 is not a prime number
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){ 
        if (num % i === 0) {
            return false;
        }
    }
    return true
}
let num = 17;

if (isPrime(num)) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}