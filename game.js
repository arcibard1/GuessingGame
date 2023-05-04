const input = document.querySelector("#guess");
const button = document.querySelector("#guessButton");
const tracker = document.querySelector("#guessTracker");
const message = document.querySelector("#message");


let answer = Math.floor(Math.random() * 101);
let attempts = 5;
let pastGuesses = [];
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
        // button.style.color
    } else if (attempts === 0){
        message.textContent = `Game Over. The correct answer was ${answer}.`;
        button.disabled = true;
    } else{
        let hint; 
        if (guess < answer){
            hint = "higher";
        } else {
            hint = "Lower"
        } 
        message.textContent = `Try again! ${hint}`;
    }
})


