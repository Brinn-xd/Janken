let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".scoreboard");
let result = document.querySelector(".result > p");
let result2 = document.querySelector(".result > p2");
let result3 = document.querySelector(".result > p3");
const beginning = document.getElementById("begin");
let guu_div = document.getElementById("r");
let paa_div = document.getElementById("p");
let choki_div = document.getElementById("s");
let text = document.getElementById("op1");
let text2 = document.getElementById("op2");
let text3 = document.getElementById("op3");


function getBotChoice() {
const choices = ['r','p','s'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertToWord(letter) {
    if ( letter === "r") return "Guu";
    if ( letter === "p") return "Paa";
    return "Choki";
 }
 

function win(userChoice, botChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    const smallUserWord = "YOU".fontsize(3).sup();
    const smallBotWord = "OPPONENT".fontsize(3).sup();
    begin.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(botChoice)}${smallBotWord}`;
}

function lose(userChoice, botChoice) {
    botScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    const smallUserWord = "YOU".fontsize(3).sup();
    const smallBotWord = "OPPONENT".fontsize(3).sup();
    begin.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(botChoice)}`;
   
}
function draw(userChoice, botChoice) {
    const smallUserWord = "YOU".fontsize(3).sup();
    const smallBotWord = "OPPONENT".fontsize(3).sup();
    begin.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(botChoice)}`;
}


function resetIfOver(){
    if(userScore >= 5 || botScore >= 5){
        userScore = 0;
        botScore = 0;
    }
}

function game(userChoice) {
    const botChoice = getBotChoice();
    switch (userChoice + botChoice) {
case "rs":
case "pr":
case "sp":
    win(userChoice + botChoice);
    break;
case "rp":
case "ps":
case "ss":
    lose(userChoice + botChoice);
    break;
case "rr":
case "pp":
case "ss":
    draw(userChoice + botChoice);
    }
}


function main() {
    guu_div.addEventListener('click', function(){
    game("r")
    })

    paa_div.addEventListener('click', function(){
        game("p");
    })

    choki_div.addEventListener('click', function(){
        game("s");
    })
}
main();    
