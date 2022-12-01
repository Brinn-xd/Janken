const userLabel = document.querySelector('#user-label');
const botLabel = document.querySelector('#bot-label');
const userScore = document.querySelector('#user-score');
const userbot = document.querySelector('#bot-score');
const button = document.querySelectorAll;('.buttons');

let user;
let bot;
let result;

button.forEach(buttons => buttons.addEventListener("click",() =>
{
    user =buttons.textContent;
    botTurn();
    userLabel.textContent = 'user: ${You}';
    botLabel.textContent = 'bot: ${Opponent}';
    result.textContent = checkWinner();
}
));

function botTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1: bot = "Guu";
        break;
        case 2: bot = "Paa";
        break;
        case 3: bot ="Choki";
        break;
    }
}
function checkWinner(){
    if(user == bot) {
        return "Draw!";
    }
    else if(bot == "Guu") {
        return (user == "Paa") ? "Round WIN!" : "Round LOST!";
    }
    else if(bot == "Guu") {
        return (user == "Choki") ? "Round WIN!" : "Round LOST!";
    }
    else if(bot == "Choki") {
        return (user == "Choki") ? "Round WON!" : "Round LOST!";
    }
}
