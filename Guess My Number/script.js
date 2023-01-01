'use strict';

const originalNum = Math.trunc(Math.random()*100);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;

    document.querySelector('.number').textContent = originalNum;
    if(!guess){
        document.querySelector('.message').textContent = "No Number!";
    }
    else if(guess == originalNum){
        document.querySelector('.message').textContent = "You Won!";
        if(score > highScore)
            highScore = score;
    } 
    else if(guess < originalNum){
        if(score <= 0)
            document.querySelector('.message').textContent = "You Lost!";
        else{
            score--;
            document.querySelector('.message').textContent = "Too Low!";
        }
    }
    else if(guess > originalNum){
        
        if(score <= 0)
            document.querySelector('.message').textContent = "You Lost!";
        else{
            score--;
            document.querySelector('.message').textContent = "Too High!";
        }
    }

    document.querySelector('.score').textContent = score;

    document.querySelector('.highscore').textContent = highScore;
});
