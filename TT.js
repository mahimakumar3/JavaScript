const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;




p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score +=1;
        if(p1Score == winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger'); 
            p1Button.disabled;
            p2Button.disabled;
        }
        p1Display.textContent = p1Score;
    }  
})

p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score +=1;
        if(p2Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            p1Button.disabled;
            p2Button.disabled;
        }
        p2Display.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

 function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger')
    p2Display.classList.remove('has-text-success','has-text-danger')
    p1Button.disabled;
    p2Button.disabled;
}

const p1= {
    score: 0,
    button: document.querySelector('#p1Button');
    display: document.querySelector('#p1Display');

}

const p2= {
    score: 0,
    button: document.querySelector('#p1Button');
    display: document.querySelector('#p1Display');

}

const Reset= {
    button: document.querySelector('#reset')
}

function winner(player,opponent){
    if(!isGameOver){
        player.score +=1;
        if(player.score===winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-sucess')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled
            opponent.button.disabled
        }
        player.display.textContent = player.score
    }
}