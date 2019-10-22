const winCombs = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
let startTemplate, startContent,
    gameTemplate, gameContent,
    findWinner,
    move,
    eventTarget;

let showGameTemplate = function() {
  gameTemplate = document.getElementById("game");
  gameContent = gameTemplate.content;
  document.body.appendChild(gameContent);

  document.getElementById("gameField").addEventListener("click", eventTarget);
}


const contain = function (index, sym) {
  return document.getElementsByClassName("block")[index].innerHTML === sym;
}
window.onload = function() {

  startTemplate = document.getElementById("start");
  startContent = startTemplate.content;
  document.body.prepend(startContent);

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
};
findWinner = function () {
  for (let i = 0; i < winCombs.length; i++) {
    let a = winCombs[i];
    let symX = "x";
    let symO = "o";

    if (contain(a[0], symX) &&
        contain(a[1], symX) &&
        contain(a[2], symX)) 
        {
      alert('Победитель ' + 'playerX');
    } else if (
        contain(a[0], symO) &&
        contain(a[1], symO) &&
        contain(a[2], symO)
    ) {
      alert('Победитель ' + 'playerO');
    }
  }
}
