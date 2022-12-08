let userScore = 0;
let botScore = 0;
const beginning = document.getElementById("begin");
const guuOp = document.getElementById("r");
const paaOp = document.getElementById("p");
const chokiOp = document.getElementById("s");
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const rButton = document.querySelector(".middle > button");
const cards = document.querySelector(".choiceboard");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randNum = Math.floor(Math.random() * choices.length);
    return choices [randNum];
}
function convertToWord(letter) {
  if (letter === "r") return "Guu";
  if (letter === "p") return "Paa";
  return "Choki"; 
}
function buttonPop() {
  cards.style.pointerEvents = "none";
  rButton.addEventListener('click', function (){
    cards.style.pointerEvents = "all";
    rButton.style.display = "none";
    beginning.innerHTML = `BEGIN!`;
    userScore = 0;
    userScore_span.innerHTML = userScore;
    botScore = 0;
    botScore_span.innerHTML = botScore;
  })
  }

function winCheck(userScore,botScore) {
  if (userScore === 5) {
    beginning.innerHTML = `GAME SET! YOU WIN!`;
    rButton.style.display = "inline";
    buttonPop();

  }
  else if (botScore === 5) {
    beginning.innerHTML = `GAME SET! OPPONENT WINS!`;
    rButton.style.display = "inline";
    buttonPop();
  }
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    beginning.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}`
    winCheck(userScore,botScore);
}
function loss(userChoice, computerChoice) {
  botScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  beginning.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}`
  winCheck(userScore,botScore);
}
function draw(userChoice, computerChoice) {
beginning.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}`
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
      case "pr":
        case "sp":
          win(userChoice,computerChoice);
          break;
    case "rp":
      case "ps":
        case "sr":
          loss(userChoice,computerChoice);
          break;
    case "rr":
      case "pp":
        case "ss":
          draw(userChoice,computerChoice);
          break;
  }
}
game();

function main() {
    guuOp.addEventListener('click', function(){
    game("r")
    })

    paaOp.addEventListener('click', function(){
    game("p");
    })

    chokiOp.addEventListener('click', function(){
    game("s");
    })
}   

main();
