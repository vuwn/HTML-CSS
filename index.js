// ROCK - PAPER - SCISSORS PROGRAM

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoresDisplay = document.getElementById('playerScoresDisplay');
const computerScoresDisplay = document.getElementById('computerScoresDisplay');
let playerScores = 0;
let computerScores = 0;
let result = '';

function playGame(playerChoices){

const choices = ['rock', 'paper', 'scissors'];
const computerChoices = choices[Math.floor(Math.random() * 3)]

    if(playerChoices === computerChoices){
        result = `IT'S A TIE`;
    }
    else{

        switch(playerChoices){
            case 'rock':
                result = (computerChoices === 'scissors') ? 'YOU WIN' : 'YOU LOSE';
                break;
            case 'paper':
                result = (computerChoices === 'rock') ? 'YOU WIN' : 'YOU LOSE';
                break;
            case 'scissors':
                result = (computerChoices === 'paper') ? 'YOU WIN' : 'YOU LOSE';
                break;
        }

    }

    playerDisplay.textContent = `Player: ${playerChoices}`;
    computerDisplay.textContent = `Computer: ${computerChoices}`;
    resultDisplay.textContent = `Result: ${result}`;

    resultDisplay.classList.remove('greenText', 'redText');

    switch(result){
        case 'YOU WIN':
            resultDisplay.classList.add("greenText");
            playerScores++;
            playerScoresDisplay.textContent = playerScores;
            break;
        case 'YOU LOSE':
            resultDisplay.classList.add("redText");
            computerScores++;
            computerScoresDisplay.textContent = computerScores;

            break;
    }
}