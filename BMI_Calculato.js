// BMI Calculator
var weight = 58;
var height = 1.60;

var BMI = weight / (height * height);

if (BMI < 18.5) {
    console.log("You are Underweight");
    console.log("Your Body Mass Index is: " + BMI + " And you are Underweight");
}
else if (BMI > 18.6 && BMI < 24.9) {
    console.log("You are Healthy");
    console.log("Your Body Mass Index is: " + BMI + " And you are healthy");
}
else if (BMI > 25 && BMI < 25.9) {
    console.log("You are Overweight ");
    console.log("Your Body Mass Index is: " + BMI + " And you are Overweight");
}
else {
    console.log("You are obese");
    console.log("Your Body Mass Index is: " + BMI + " And you are OBESE");
}