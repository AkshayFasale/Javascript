// Q. Find the smallest and laerget number from the following array: [13, 40, 10, 5, 1, 12, 24];

let arr = [13, 40, 10, 5, 1, 12, 24];

//With the help of math.min function we can find mininum number in array  and with math.max larget number
let result = Math.min(...arr)
let result1 = Math.max(...arr)


console.log(`Minimun value is: ${result}`);
console.log(`Maximum value is: ${result1}`);