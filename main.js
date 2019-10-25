const winCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let startTemplate,
  startContent,
  gameTemplate,
  gameContent,
  findWinner,
  move,
  eventTarget,
  playerX,
  playerO;
const symX = "x";
const symO = "o";

startTemplate = document.getElementById("start");
startContent = startTemplate.content;
document.body.prepend(startContent);

document
  .getElementById("welcomeForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    playerX = document.getElementById("playerX").value;
    playerO = document.getElementById("playerO").value;

    goToGame();
  });

let goToGame = function() {
  hideStartTemplate();
  showGameTemplate();
};

let hideStartTemplate = function() {
  document.getElementById("welcomeScreen").style.display = "none";
};

let showGameTemplate = function() {
  gameTemplate = document.getElementById("game");
  gameContent = gameTemplate.content;
  document.body.appendChild(gameContent);

  document.getElementById("gameField").addEventListener("click", eventTarget);
};
const contain = function(index, sym) {
  return document.getElementsByClassName("block")[index].innerHTML === sym;
};
move = 0;

eventTarget = function(event) {
  if (event.target.innerHTML === symX) {
    return;
  } else if (event.target.innerHTML === symO) {
    return;
  }
  if (event.target.className === "block") {
    if (move % 2 === 0) {
      event.target.innerHTML = symX;
    } else {
      event.target.innerHTML = symO;
    }
    move++;
    findWinner();
  }
};
findWinner = function() {
  for (let i = 0; i < winCombs.length; i++) {
    if (
      contain(winCombs[i][0], symX) &&
      contain(winCombs[i][1], symX) && 
      contain(winCombs[i][2], symX)) 
      {
      msgWinnerX();
    } else if (
      contain(winCombs[i][0], symO) &&
      contain(winCombs[i][1], symO) &&
      contain(winCombs[i][2], symO)
    ) {
      msgWinnerO();
    }
  }
};
let msgWinnerX = function() {
  let paragraph = document.createElement("p");
  paragraph.className = "showWinner";
  paragraph.innerHTML =
    "Победитель " +
    playerX +
    '.</br>Чтобы сыграть еще раз, нажмите </br>"Начать заново."';
  document.body.append(paragraph);
};
let msgWinnerO = function() {
  let paragraph = document.createElement("p");
  paragraph.className = "showWinner";
  paragraph.innerHTML =
    "Победитель " +
    playerO +
    '.</br>Чтобы сыграть еще раз, нажмите </br>"Начать заново."';
  document.body.append(paragraph);
};
