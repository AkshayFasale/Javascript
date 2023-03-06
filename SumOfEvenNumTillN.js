// Sum of Even Numbers till N -JS
// Given a number N, print sum of all even numbers from 1 to N.

var N = 6;

// let N = parseInt(readLine());
let i;
let sum = 0;

for (i = 1; i <= N; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}

console.log(sum);

