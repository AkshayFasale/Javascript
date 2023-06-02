// Area of a circle is calculated as follows: area = π x r x r.Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    const pi = Math.PI;
    let area = pi * r * r;

    console.log(`Area of circle is ${area.toFixed(2)}`);
}

areaOfCircle(3.2); // Area of square is 32.17

areaOfCircle(3) // Area of square is 28.27

const circle = (r) => {
    const PII = Math.PI;
    let circleArea = PII * r * r;

    console.log(`Area of circle is ${circleArea.toFixed(2)}`);
}
circle(4.2) // Area of circle is 55.42
