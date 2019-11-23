// To auto-close the burger nav on click
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

var currentStatus = true;
var src = document.getElementById("background-music").src;
function playPauseAudio() {
    if (currentStatus) {
        currentStatus = false;
        document.getElementById("playPauseIcon").innerHTML = '<i class="fa fa-volume-off"></i>';
        document.getElementById("background-music").src = "";
    } else {
        currentStatus = true;
        document.getElementById("playPauseIcon").innerHTML = '<i class="fa fa-volume-up"></i>';
        document.getElementById("background-music").src = "https://www.youtube-nocookie.com/embed/scE8kZUv7hM?controls=1&autoplay=1";
    }
}