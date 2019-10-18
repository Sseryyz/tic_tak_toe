const win = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ];

function contain(index, sym) {

    return document.getElementsByClassName('block')[index].innerHTML==sym;
}

function findWinner() {

    for (let i = 0; i < win.length; i++) {
        let a = win[i];
        let symX = 'x';
        let symO = 'o';

        if (contain(a[0], symX) && contain(a[1], symX) && contain(a[2], symX)) {
            setTimeout(function () {
                if (alert('Победитель X\nНажмите ОК, чтобы сыграть еще раз.')){}
                window.location.reload()
            },100)
        }
        else if (contain(a[0], symO) && contain(a[1], symO) && contain(a[2], symO)) {
            setTimeout(function () {
                if (alert('Победитель O\nНажмите ОК, чтобы сыграть еще раз.')){}
                window.location.reload()
            },100)
        }
    }
}
window.onload = function () {


    let t = document.querySelector('#template');
    t.content.querySelector('template');
    document.body.appendChild(t.content.cloneNode(true));

    let move = 0;

    let eventTarget = function(event) {

        if (event.target.innerHTML === 'x') {
            return;
        } else if (event.target.innerHTML === 'o') {
            return;
        }

        if (event.target.className === 'block') {

            if (move%2==0) {
                event.target.innerHTML = 'x';
            }
            else {
                event.target.innerHTML = 'o';
            }

            move++;
            findWinner();
        }
    }
    let el = document.getElementsByClassName('game');

    el.addEventListener("click", eventTarget);
}