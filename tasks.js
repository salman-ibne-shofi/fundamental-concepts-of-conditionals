// burger
const burger = 600;

if (burger > 500) {
	console.log("free coke");
} else {
	console.log("buy a coke 30tk");
}

// BMI calculator
const BMI = 30;

if (BMI < 18.5) {
	console.log("underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
	console.log("normal");
} else if (BMI >= 25 && BMI <= 29.9) {
	console.log("overweight");
} else {
	console.log("you are obese");
}

// Grade Calculator
const mark = 72;

if (mark >= 90 && mark <= 100) {
	console.log("A grade");
} else if (mark >= 80 && mark <= 89) {
	console.log("B grade");
} else if (mark >= 70 && mark <= 89) {
	console.log("C grade");
} else if (mark >= 60 && mark <= 69) {
	console.log("D grade");
} else {
	console.log("F grade");
}
