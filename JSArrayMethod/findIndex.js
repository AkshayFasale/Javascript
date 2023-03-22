// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function
// if no element satisfy the testing function then -1 returned.

// syntax - array.findIndex(function(currentValue, index, arr), thisValue)

const arry = [5, 12, 18, 443, 44];
const isLargerNumber = (element) => element > 13;
console.log(arry.findIndex(isLargerNumber)); // 2