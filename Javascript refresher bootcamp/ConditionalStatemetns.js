//Exercise 1: Temperature Check

let temperature = prompt("Enter the value for temperature:");
if (temperature<0) {
    console.log("It's freezing!");
} else if (temperature>=0 && temperature<=15) {
    console.log("It's cold!");
} else if(temperature<=16 && temperature<=25){
    console.log("It's mild!");
} else if(temperature>25){
    console.log("It's warm");
}

switch (temperature) {
    case temperature<0:
        console.log("It's freezing");
        break;
        case temperature>=0 && temperature<=15:
        console.log("It's cold!");
        break;
    case temperature<=16 && temperature<=25 :    
console.log("It's mild!");
break;

case temperature>25 :
    console.log("It's warm");
    
        break;
}

//Exercise 2: Divisibility Check

let numberPrint = prompt("Enter a number to check if it is divible by 2 or 3:");

if (numberPrint%3 ==0 && numberPrint %2 ==0) {
    console.log("Divisible by both");
} else if (numberPrint%2 ==0 ) {
    console.log("Divisible by 2");
} else if (numberPrint %3 ==0){
console.log("Divisible by 3");
}else if( !(numberPrint%3 ==0 || numberPrint %2 ==0) ){

console.log("not divisible by 2 or 3");
}

switch (numberPrint) {
    case numberPrint%3 ==0 && numberPrint %2 ==0:
        console.log("Divisible by both");
        break;
case numberPrint%2 ==0 :
    console.log("Divisible by 2");
break;
    case numberPrint%3 ==0:
        console.log("Divisible by 3");
        break;
        case !(numberPrint%3 ==0 || numberPrint %2 ==0) :
    console.log("not Divisible by 2 or 3");
        break;
}

//Exercise 3: For Loops

for(let i =1 ; i<=10 ; i++){
console.log(i);

}

for(let i = 2 ; i<=20; i+=2){
    console.log(i);
}

let sum = 0;
for(let i =1; 1<=100 ; i++){

    sum +=i;
}
console.log(sum);

const numbers = [1,2,3,4,5];

for (let i = 0; index < numbers.length; i++) {
console.log(numbers[i]);
    
}


let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    largest = Math.max(largest, numbers[i]);
}

console.log("The largest number in the array is: " + largest);

//Exercise 4: While loops

let i=1;

while (i<=10) {
   console.log(i);
    i++;
}

let d =  2;

while(d<=20){

    console.log(d);
    d+=2;
}

let sumNumbers =0 ;
let e = 1;

while (e<=100) {
    console.log(i);
sumNumbers += e;
e++;

}

console.log("The sum of all numbers from 1 to 100 is: " + sumNumbers);

let numberEntered = prompt("Enter number greater than 10");

while (!(numberEntered>10)) {
    prompt("Enter number greater than 10");
    
}

//Number guessing game

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Function to start the game
function startGame() {
    let guessedNumber;
    let attempts = 0;

    // Loop until the user guesses the correct number
    while (guessedNumber !== randomNumber) {
        guessedNumber = parseInt(prompt("Guess a number between 1 and 10:"));

        // Check if the guessed number is valid
        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
            alert("Please enter a valid number between 1 and 10.");
        } else {
            // Increment the number of attempts
            attempts++;

            // Check if the guessed number is correct
            if (guessedNumber === randomNumber) {
                alert("Congratulations! You guessed the correct number in " + attempts + " attempts.");
            } else {
                // Provide feedback to the user
                if (guessedNumber < randomNumber) {
                    alert("Try a higher number.");
                } else {
                    alert("Try a lower number.");
                }
            }
        }
    }
}

// Start the game
startGame();
