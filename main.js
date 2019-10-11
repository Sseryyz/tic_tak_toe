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

function findWinner() {
    let allblock = document.getElementsByClassName('block');

    for (i = 0; i < win.length; i++) {
        let a = win[i];
        console.log(a);
        if (allblock[a[0]].innerHTML=='x' && allblock[a[1]].innerHTML=='x' && allblock[a[2]].innerHTML=='x')
            alert('Победитель X');
        if (allblock[a[0]].innerHTML=='o' && allblock[a[1]].innerHTML=='o' && allblock[a[2]].innerHTML=='o')
            alert('Победитель O');
    }
}

window.onload = function () {

    let move = 0;

    document.getElementById('game').onclick = function(event) {

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