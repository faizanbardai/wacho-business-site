// To auto-close the burger nav on click
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});


// YouTube Background Music Player -Start
var currentStatus = true;
// var src = document.getElementById("background-music").src;
function playPauseAudio() {
    if (currentStatus) {
        currentStatus = false;
        document.getElementById("playPauseIcon").innerHTML = '<i class="fa fa-volume-off"></i>';
        player.pauseVideo();
    } else {
        currentStatus = true;
        document.getElementById("playPauseIcon").innerHTML = '<i class="fa fa-volume-up"></i>';
        player.playVideo();
    }
}

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'scE8kZUv7hM',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.setVolume(10);
}

function stopVideo() {
  player.stopVideo();
}
// YouTube Background Music Player -End