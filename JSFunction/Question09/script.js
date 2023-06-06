// Math.max returns its largest argument.
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(num1,num2, num3) {
    if (num1 > num2 && num1 > num3) {

        return (`Maximum number is ${num1}`);
    } else if (num2>num1 && num2>num3) {

        return (`Maximum number is ${num2}`);
    } else {
        return (`Maximum number is ${num3}`)
    }
}
console.log(findMax(0, 10, 5))

console.log(findMax(0, -10, -2))

// findMax(10, 11, 9);
// findMax(22,33,44)