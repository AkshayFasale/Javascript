// reduceRight() method executes a reducer function for array element.and this method returns a single value: the functions accumulated value
// syntax - array.reduceRight(function(total, currentValue, currentIndex, arr),initiatlValue);

const numbers = [32, 16];
const result = numbers.reduceRight(myFunc);

function myFunc(total, sum) {
    return total - sum;
}

console.log(result); // -16 as from right to left 16-32 = -16
