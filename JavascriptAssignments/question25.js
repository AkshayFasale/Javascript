// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.Write a function which calculates bmi.BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//         - Overweight: BMI is 25 to 29.9
//             - Obese: BMI is 30 or more



function checkBMI(weight, height) {
    const BMI = (Math.round((weight / height ** 2) * 10)) / 10;
    console.log(`Your BMI is ${BMI}`);

    if (BMI < 18.5) {
        console.log("You are Underweight\n");
    }
    else if (BMI > 18.6 && BMI < 24.9) {
        console.log("You are Healthy\n");
    }
    else if (BMI > 25 && BMI < 25.9) {
        console.log("You are Overweight\n");
    }
    else {
        console.log("You are obese\n");
    }
}
checkBMI(40, 1.5)

const perWeight = 48;
const perHeight = 1.5;
checkBMI(perWeight, perHeight);

// var weight = 58;
// var height = 1.60;

// // Formula for BMI
// var BMI = weight / (height * height);

// if (BMI < 18.5) {
//     console.log("You are Underweight");
//     console.log("Your Body Mass Index is: " + BMI + " And you are Underweight");
// }
// else if (BMI > 18.6 && BMI < 24.9) {
//     console.log("You are Healthy");
//     console.log("Your Body Mass Index is: " + BMI + " And you are healthy");
// }
// else if (BMI > 25 && BMI < 25.9) {
//     console.log("You are Overweight ");
//     console.log("Your Body Mass Index is: " + BMI + " And you are Overweight");
// }
// else {
//     console.log("You are obese");
//     console.log("Your Body Mass Index is: " + BMI + " And you are OBESE");
// }