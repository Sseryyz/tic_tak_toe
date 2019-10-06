window.onload = function() {

    let move = 0;

    document.getElementById('game').onclick = function(event) {

        console.log(event);

        if (event.target.className == 'block') {
            if (move%2==0) {
                event.target.innerHTML = 'X';
            }
            else {
                event.target.innerHTML = 'O';
            }
            move++;
        }

    }

}
