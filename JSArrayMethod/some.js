// in every() method tests whether some the element in the array pass the test implemented by the provided function.
// it will return boolean value, it will not modify the array.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
