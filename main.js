const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let Oname, Xname;
let getFormValue = function(nameX, nameO) {
  Xname = document.getElementById("nameX").value;
  Oname = document.getElementById("nameO").value;
};
function contain(index, sym) {
  return document.getElementsByClassName("block")[index].innerHTML == sym;
}

window.onload = function() {
  let startTemplate = document.getElementById("start");
  let startContent = startTemplate.content;
  document.body.prepend(startContent);

  let gameTemplate = document.getElementById("game");
  let gameContent = gameTemplate.content;
  document.body.appendChild(gameContent);

  let move = 0;
  let eventTarget = function(event) {
    if (event.target.innerHTML === "x") {
      return;
    } else if (event.target.innerHTML === "o") {
      return;
    }
    if (event.target.className === "block") {
      if (move % 2 == 0) {
        event.target.innerHTML = "x";
      } else {
        event.target.innerHTML = "o";
      }
      move++;
      findWinner();
    }
  };
  document.getElementById("game_field").addEventListener("click", eventTarget);
};
function findWinner() {
  for (let i = 0; i < win.length; i++) {
    let a = win[i];
    let symX = "x";
    let symO = "o";

    if (contain(a[0], symX) &&
        contain(a[1], symX) &&
        contain(a[2], symX)) 
        {
      alert("Победитель " + Xname + "\n Нажмите ОК, чтобы сыграть еще раз.");
    } else if (
      contain(a[0], symO) &&
      contain(a[1], symO) &&
      contain(a[2], symO)
    ) {
      alert("Победитель " + Oname + "\n Нажмите ОК, чтобы сыграть еще раз.");
    }
  }
}
// window.addEventListener("load", function() {
//   document
//     .getElementById("welcomeForm")
//     .addEventListener("submit", function(event) {
//       event.preventDefault();
//     });
// });

// let formDefault = function (event) {
//     event.preventDefault();
// }
// let ??? = function () {
//     document.getElementById("welcomeForm").addEventListener("submit", formDefault);
// }
// window.addEventListener("load", ???);

// let Xname = document.getElementById("nameX").value;
// let Oname = document.getElementById("nameO").value;

console.log(Xname, Oname);
