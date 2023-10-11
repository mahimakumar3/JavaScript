let Maximum = parseInt(prompt("Enter your max number"));

if(!Maximum){
    Maximum=parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * Maximum) + 1;

let guess= prompt("Enter you first guess");

let attempts = 1;
while(parseInt(guess)!=targetNum){
    if(guess=== 'q') {
        break;
    }
    guess= parseInt(guess);
    attempts++;
    if(guess>targetNum){
        guess = prompt("Too High! Enter a new guess:");
    }
    else if(guess<targetNum) {
        guess = prompt("Too low! Enter a new guess:");
    }
    else{
        guess=prompt("Please enter a valid number or 'q' to quit the game" )
    }
}

if(guess=== 'q'){
    console.log("YOU QUIT!")
}
else{
    console.log("Congrats you win!")
    console.log(`YOU GOT IT! It took you ${attempts} guesses`);
}