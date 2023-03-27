// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a, b)=>{
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

const sortedAge = ages;
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log(`Sorted Age list is ${sortedAge}`);
console.log(`The minimum age is ${minAge} & maximum age is ${maxAge}`);

//     - Find the median age(one middle item or two middle items divided by two)

const median = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
console.log(`Media age in given list is ${median}`);

//     - Find the average age(all items divided by number of items)

let sum = 0;
ages.forEach(item =>{
    sum += item; //sum = sum +item;
})

const avrg = sum / ages.length;
console.log(`Average of Total age ${sum} is ${avrg}`);

//     - Find the range of the ages(max minus min)

const ageRange = ages[ages[0] - ages.length - 1];
console.log(`The age range is ${ageRange}`);

//     - Compare the value of (min - average) and (max - average), use abs() method

const minAverage = Math.abs(ages[0] - avrg);
const maxAverage = Math.abs(ages[ages.length-1] - avrg);

if (minAverage > maxAverage) {
    console.log("min-average is greater than max-average")
} else if (minAverage < maxAverage) {
    console.log("max minus average is greater than min-average");
} else {
    console.log("Both are equal");
}
console.log(`Minimum average is ${minAverage}`);
console.log(`Max average is ${maxAverage}`);
