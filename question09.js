/*09. Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value.*/

//Falsy values : Falsy values are not exaclty false but when we try to convert them into boolean they becomes false.
// There are only 5 falsy values in JS e.g. 0, undefined, null, NaN, ""(empty string)

console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean("A"));

if (null) {
    console.log("if block executed");
}
else {
    console.log("else block executed");
}

if (0) {
    console.log("if block executed");
}
else {
    console.log("else block executed");
}

if (undefined) {
    console.log("if block executed");
}
else {
    console.log("else block executed");
}

if (NaN) {
    console.log("if block executed");
}
else {
    console.log("else block executed");
}

if ("") {
    console.log("if block executed");
}
else {
    console.log("else block executed");
}
if ("A") {
    console.log("if block executed");
}
else {
    console.log("else block executed");
}