// Circumference of a circle is calculated as follows: circumference = 2πr.Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
    const pi = Math.PI;
    let circumference = 2 * pi * radius;

    console.log(`Circumference of circle is ${circumference.toFixed(2)}`);
}
circumOfCircle(10); // Circumference of circle is 62.83


// using arrow function

const circle = (radiuss) => {
    const pi = Math.PI;
    let circum = 2 * pi * radiuss;
    console.log(`Circumference of circle is ${circum.toFixed(2)}`);
}
circle(4) //Circumference of circle is 25.13
