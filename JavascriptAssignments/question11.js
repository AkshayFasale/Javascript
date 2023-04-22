// 11. Use the Date object to do the following activities
//     - What is the year today ?
//         - What is the month today as a number ?
//             - What is the date today ?
//                 - What is the day today as a number ?
//                     - What is the hours now ?
//- What is the minutes now ?
//                             - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const d = new Date();
let year = d.getFullYear();
// - What is the year today ?
console.log(`Full year is ${year}`); // 2023

//- What is the month today as a number ?
let month = d.getMonth()
console.log(`Month is ${month}`); // 2 - as in JS 0 is january and 11 is december 

//             - What is the date today ?
let date = d.getDate()
console.log(`date is ${date}`); 
//                 - What is the day today as a number ?
let day = d.getDay()
console.log(`day as a number is ${day}`);
//                     - What is the hours now ?
let hours = d.getHours()
console.log(`Hours now is ${hours}`);
//- What is the minutes now ?
let minutes = d.getMinutes()
console.log(`Minutes now is ${minutes}`);

//- Find out the numbers of seconds elapsed from January 1, 1970 to now.

const miliSecondsElapsed = d.getTime(); // getTime() method will return milliseconds elapsed from Jan 1, 1970
const secondsElapsed = miliSecondsElapsed / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 are ${secondsElapsed}`);
