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
    if(index ===1 ) {
        return ;
    }

    return document.getElementsByClassName('block')[index].innerHTML==sym
}


function findWinner() {

    for (let i = 0; i < win.length; i++) {
        let a = win[i];
        console.log(a);
        let symX = 'x';
        let symO = 'o';

        if (contain(a[0], symX) && contain(a[1], symX) && contain(a[2], symX))
            alert('Победитель X');
        if (contain(a[0], symO) && contain(a[1], symO) && contain(a[2], symO))
            alert('Победитель O');
    }
}

window.onload = function () {

    let move = 0;

    document.getElementById('game').onclick = function(event) {

        if (event.target.innerHTML === 'x') {
            return;
        } else if (event.target.innerHTML === 'o') {
            return;
        }


        console.log(event);

        if (event.target.className == 'block') {

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
}