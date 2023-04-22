// 15. Write a program which can give grades to students according to theirs scores:
// - 90 - 100, A
//     - 70 - 89, B
//     - 60 - 69, C
//     - 50 - 59, D
//     - 0 - 49, F

let score = 95;

console.log(`Your score is ${score}`);

if (score > 90 && score< 100) {
    console.log(`Your Grade is A`);
}
else if (score > 70 && score <89) {
    console.log("Your grade is B");
}
else if (score > 60 && score < 69) {
    console.log("Your grade is C");
}
else if (score > 50 && score < 59) {
    console.log("Your grade is D");
}
else if (score > 0 && score < 49) {
    console.log("Dear you are FAIL");
}
else{
    console.log("Your score is not between 0 to 100");
}

// using function
function checkGrad(marks) {
    if (marks >= 80 && marks <= 100) {
        return `Congrats!🎆🥳 You have obtained A grade `
    } else if (marks >= 70 && marks <= 79) {
        return `Well Done!👏👏 You have obtained B grade `
    } else if (marks >= 60 && marks <= 69) {
        return `Hey! You have obtained C grade.Need to work hard more👍 `
    } else if (marks >= 50 && marks <= 59) {
        return `Poor Performance👎 You have obtained D grade.`
    } else if (marks >= 0 && marks <= 49) {
        return `Very Bad Performance😠! You have obtained F grade.`
    } else {
        return "Invalid marks entered. Please enter marks between 0 to 100.";
    }
}

const marksObtained = checkGrad(48);
console.log(marksObtained);