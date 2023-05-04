const input = document.querySelector("#guess");
const button = document.querySelector("#guessButton");
const tracker = document.querySelector("#guessTracker");
const message = document.querySelector("#message");
const reset = document.querySelector("#reset");
const body = document.body;
const hint = document.querySelector("#hint");

let answer = Math.floor(Math.random() * 101);
let hintArr = [];
let attempts = 5;
let pastGuesses = [];

// create three random numbers.
while (4 > hintArr.length) {
    let randomNum = Math.floor(Math.random() * 101);
    let checkArr = [...pastGuesses,...hintArr, answer];
    if (checkArr.includes(randomNum)) {
        return;
    } else hintArr.push(randomNum);
}

/*
1. intialize a variable to keep track of the number of attempts
and an array to store the previous guesses
2. add an event listner for the button click event
3. 
*/

button.addEventListener("click", function(){
    let guess = parseInt(input.value);
    if (guess < 1 || guess > 100) {
        message.textContent = "Guess your number within the Range!";
        return;
    };

    message.textContent = "";
    pastGuesses.push(guess);
    tracker.innerText = "Previous Guesses: " + pastGuesses;
    attempts--;// console.log(pastGuesses);

    if (guess === answer){
        message.textContent = "Congrats! You got it right!";
        button.disabled = true;
        body.style.backgroundColor = 'gold';
        // button.style.color
    } else if (attempts === 0){
        message.textContent = `Game Over. The correct answer was ${answer}.`;
        button.disabled = true;
        body.style.backgroundColor = 'orangered';
    } else{
        let hint; 
        if (guess < answer){
            hint = "higher";
        } else {
            hint = "Lower"
        } 
        let distance = answer - guess;
        if (distance < 0) {
            distance = distance * -1;
        }
        let temp = '';
        if (distance <= 7) {
            temp = 'very hot';
        } else if (distance <= 14) {
            temp = 'getting warm';
        } else {
            temp = 'cold';
        }
        message.textContent = `Try again! ${hint}. You're ${temp}.` ;
    }
})

reset.addEventListener("click", function () {
    answer = Math.floor(Math.random() * 101);
    attempts = 5;
    pastGuesses = [];
    tracker.textContent = "Previous Guesses: ";
    message.textContent = "";
    body.style.backgroundColor = "";
    button.disabled = false;
    input.value = "";
});

hint.addEventListener("click", function () {
    answerPosition = Math.floor(Math.random() * 3);
    hintArr[answerPosition] = answer;
    message.textContent = `The answer is either ${hintArr}.`
});

