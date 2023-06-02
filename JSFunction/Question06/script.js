// Area of a circle is calculated as follows: area = π x r x r.Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    const pi = Math.PI;
    let area = pi * r * r;

    console.log(`Area of square is ${area.toFixed(2)}`);
}

areaOfCircle(3.2); // Area of square is 32.17

areaOfCircle(3) // Area of square is 28.27

