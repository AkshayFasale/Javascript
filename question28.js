
// 28. Write a program to print the given patterns using the loops-
/*	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
       *
       **
       ***      */


function triangle(n) {
    for (let i = 0; i <= 3; i++)
        console.log("*".repeat(n + i - 2));
}
triangle(3);