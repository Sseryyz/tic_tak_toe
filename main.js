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
  if (event.target.innerHTML === "x") {
    return;
  } else if (event.target.innerHTML === "o") {
    return;
  }
  if (event.target.className === "block") {
    if (move % 2 === 0) {
      event.target.innerHTML = "x";
    } else {
      event.target.innerHTML = "o";
    }
    move++;
    findWinner();
  }
};
findWinner = function() {
  for (let i = 0; i < winCombs.length; i++) {
    let a = winCombs[i];
    let symX = "x";
    let symO = "o";
    if (
      contain(a[0], symX) &&
      contain(a[1], symX) && 
      contain(a[2], symX)) 
      {
      msgWinnerX();
    } else if (
      contain(a[0], symO) &&
      contain(a[1], symO) &&
      contain(a[2], symO)
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
