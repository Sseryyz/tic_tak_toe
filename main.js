window.onload = function() {

    for (let i=0; i<9; i++) {

//      Создание блоков
        document.getElementById('game').innerHTML+='<div class="block" id="block"></div>';
    }

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

    function findWinner() {
        let allblock = document.getElementsByClassName('block');
//      Крестики
        if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') alert('Победитель X');
        if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') alert('Победитель X');
        if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Победитель X');

        if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') alert('Победитель X');
        if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') alert('Победитель X');
        if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Победитель X');

        if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Победитель X');
        if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') alert('Победитель X');

//      Нолики
        if (allblock[0].innerHTML=='o' && allblock[1].innerHTML=='o' && allblock[2].innerHTML=='o') alert('Победитель O');
        if (allblock[3].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[5].innerHTML=='o') alert('Победитель O');
        if (allblock[6].innerHTML=='o' && allblock[7].innerHTML=='o' && allblock[8].innerHTML=='o') alert('Победитель O');

        if (allblock[0].innerHTML=='o' && allblock[3].innerHTML=='o' && allblock[6].innerHTML=='o') alert('Победитель O');
        if (allblock[1].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[7].innerHTML=='o') alert('Победитель O');
        if (allblock[2].innerHTML=='o' && allblock[5].innerHTML=='o' && allblock[8].innerHTML=='o') alert('Победитель O');

        if (allblock[0].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[8].innerHTML=='o') alert('Победитель O');
        if (allblock[2].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[6].innerHTML=='o') alert('Победитель O');
    }

}
