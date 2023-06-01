// A perimeter of a rectangle is calculated 
// as follows: perimeter = 2x(length + width).Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    console.log(`Perimeter of rectangle is ${perimeter}`);
}

perimeterOfRectangle(11, 5);


// Using arrow function

const peri = (length1, width1) => {
    let output = 2 * (length1 + width1);
    console.log(`Perimeter of rectangle is ${output}`);
}
peri(11, 3);