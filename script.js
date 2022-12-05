let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".scoreboard");
let result = document.querySelector(".result > p");
const beginning = document.getElementById("begin");
let guu_div = document.getElementById("r");
let paa_div = document.getElementById("p");
let choki_div = document.getElementById("s");

function game() {
    for (let i =0; i < 5; i++) {
        if (userScore || botScore == 5) {
            return winnerPrompt();
        }
    }
}
function winnerPrompt() {
    
}

function getBotChoice() {
const choices = ["r","p","s"];
const randomNumber = Math.floor(Math.random() * choices.length);
return choices[randomNumber];
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
           return "ROUND DRAW!"
    }
    else if ((playerSelection == "r" && computerSelection == "s" ||
            playerSelection == "s" && computerSelection == "p" ||
            playerSelection == "p" && computerSelection == "r") 
    ){
        userScore++;
        return "You"; 
    }
        else {
            botScore++;
            return "Opponent"
        }
    }
function playRound(playerSelection, computerSelection) {
        const result = checkWinner(playerSelection, computerSelection);
    if (result == "ROUND DRAW!") {
        "ROUND DRAW!!!"
    }
    else if (result == "You") {
        return beginning.innerHTML = `ROUND WON!!! ${playerSelection} defeats ${computerSelection}`
    }
        else {
         return beginning.innerHTML = `ROUND LOST!!! ${computerSelection} defeats ${playerSelection}`
        }
    }


game();

function main() {

    guu_div.addEventListener('click', function(){
    playRound("r")
    })

    paa_div.addEventListener('click', function(){
        playRound("p");
    })

    choki_div.addEventListener('click', function(){
        playRound("s");
    })
}
main();    
