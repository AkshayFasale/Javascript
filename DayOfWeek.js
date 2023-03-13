// Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
// (where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).
// If the number is less than 1 or greater than 7, the function should return null.


let arr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thurdays", "Friday", "Saturday",];
function returnDay(x) {
    return (x < 1) || (x > 7) ? null : arr[x];
}
console.log(returnDay(1));