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

const size = 3;
const symX = "x";
const symO = "o";

let move = 0;
let playerX = "";
let playerO = "";

const startTemplate = document.getElementById("start").content;
document.body.prepend(startTemplate);

document
  .getElementById("welcomeForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    playerX = document.getElementById("playerX").value;
    playerO = document.getElementById("playerO").value;

    goToGame();
  });

const goToGame = function() {
  hideStartTemplate();
  showGameTemplate();
};

const hideStartTemplate = function() {
  document.getElementById("welcomeScreen").style.display = "none";
};

const showGameTemplate = function() {
  const gameTemplate = document.getElementById("game");
  const gameContent = gameTemplate.content;
  document.body.appendChild(gameContent);

  const cellTpl = document.getElementById("block").content;
  for(let i=0; i< size*size; i++){
    document.getElementById('gameField').prepend(cellTpl.cloneNode(true));
  }

  document.getElementById("gameField").addEventListener("click", eventTarget);
};

const contain = function(index, sym) {
  return document.getElementsByClassName("block")[index].innerHTML === sym;
};


const eventTarget = function(event) {
  if ([symX, symO].includes(event.target.innerHTML)) {
    return;
  }

  if (event.target.classList.contains("block")) {
    event.target.innerHTML = move % 2 ? symO : symX;
    move++;
    findWinner();
  }
};
const findWinner = function() {
  const players = [null, playerO,  playerX];

  for (const combination of winCombs) {
    const winner = players[combination.every((index) => contain(index, symO)) + combination.every((index) => contain(index, symX)) * 2];

    if (winner) {
      msgWinner(winner);
    }
  }
};
const msgWinner = function(name) {
  let paragraph = document.createElement("p");
  paragraph.className = "showWinner";
  paragraph.innerHTML =
    "Победитель " +
    name +
    '.</br>Чтобы сыграть еще раз, нажмите </br>"Начать заново."';
  document.body.append(paragraph);
};
