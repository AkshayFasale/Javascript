// the filer() method creates a new array filled with elements that pass a test provided by function
// it does not change the original array.

// array.filter(function(currentValue, index, arr), thisvalue)

const ages = [32, 34, 16, 40];
const result = ages.filter(checkout);

function checkout(ages) {
    return ages >= 18;
}

console.log(result); //[ 32, 34, 40 ]
