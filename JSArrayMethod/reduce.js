// the reduce() method executes a reducer method for array element. and this method returns a single value: the function accumulated result.

// syntax = array.reduce(function(total, currentValue, currentIndex, arr),initialValue);

const numbers = [32,16];
const result = numbers.reduce(myFunc);

function myFunc(total, sum) {
    return total - sum;
}

console.log(result); // 16