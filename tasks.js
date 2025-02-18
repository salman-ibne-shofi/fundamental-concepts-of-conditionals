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

// 4 nested friend
const myScore = 79;
const myFrnd = 39;

if (myScore > 80) {
	if (myFrnd > 80) {
		console.log("go for a lunch");
	} else if (myFrnd < 80 && myFrnd >= 60) {
		console.log("good luck");
	} else if (myFrnd < 60 && myFrnd >= 40) {
		console.log("text unseen");
	} else if (myFrnd < 40) {
		console.log("block him");
	}
} else if (myScore < 80) {
	console.log("sleep and act sad");
}

// 5 ternary number
const num1 = 40;
const num2 = 30;
var result;

if (num1 > num2) {
	const result = num1 * 2;
	console.log(result);
} else if (num1 < num2) {
	const result = num1 + num2;
	console.log(result);
}

// Ticket fare calculator
const age = 50;
const ticket = 800;
const student = false;

if (age < 10) {
	console.log("free");
} else if (student === true) {
	const discount = (ticket * 50) / 100;
	const payAmount = ticket - discount;
	console.log(payAmount);
} else if (age >= 60) {
	const discount = (ticket * 15) / 100;
	const payAmount = ticket - discount;
	console.log(payAmount);
} else {
	console.log("ticket 800tk");
}
