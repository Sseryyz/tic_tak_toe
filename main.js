window.onload = function() {
    document.getElementById('game').onclick = function(event) {
        console.log(event);
        if (event.target.className == 'block') {
            event.target.innerHTML = '0';
        }
    }
}
