


let temperature = 18; 
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}


switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}


let number = 6;
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}


switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sumOfNumbers = 0;
for (let i = 1; i <= 100; i++) {
    sumOfNumbers += i;
}
console.log('Sum of numbers from 1 to 100:', sumOfNumbers);


const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


const numbers2 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largestNumber) {
        largestNumber = numbers2[i];
    }
}
console.log('Largest number:', largestNumber);


let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}


sumOfNumbers = 0;
i = 1;
while (i <= 100) {
    sumOfNumbers += i;
    i++;
}
console.log('Sum of numbers from 1 to 100:', sumOfNumbers);


i = 1;
while (i < 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}


i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);


sumOfNumbers = 0;
i = 1;
do {
    sumOfNumbers += i;
    i++;
} while (i <= 100);
console.log('Sum of numbers from 1 to 100:', sumOfNumbers);


let userNumber;
do {
    userNumber = prompt("Enter a number greater than 10:");
} while (userNumber <= 10);


const targetNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
} while (guess != targetNumber);
console.log("Congratulations! You guessed the correct number.");
