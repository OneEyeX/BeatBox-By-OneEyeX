document.addEventListener('keydown', function (event) {
    var audioId = document.getElementById('' + event.keyCode);
    if (audioId == null) {
        return;
    }
    var keypressed = document.getElementById('k' + event.keyCode).classList;

    keypressed.add('play');
    audioId.currentTime = 0;
    audioId.play();
    setTimeout(function () {
        keypressed.remove('play');
    }, 150);

})

// mazel na9sa
// document.addEventListener('click', function (event) {
//     var audioId = document.getElementById('' + event.keyCode);
//     if (audioId == null) {
//         return;
//     }
//     var keypressed = document.getElementById('k' + event.keyCode).classList;

//     keypressed.add('play');
//     audioId.currentTime = 0;
//     audioId.play();
//     setTimeout(function () {
//         keypressed.remove('play');
//     }, 150);

// })
