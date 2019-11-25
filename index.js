// To auto-close the burger nav on click
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});


// YouTube Background Music Player -Start
var currentStatus = false;
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
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // event.target.playVideo();
  player.setVolume(10);
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    player.playVideo();
  }
}

function stopVideo() {
  player.stopVideo();
}
// YouTube Background Music Player -End

//Modal 2 Starts
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
function modalDisplay(event) {
  var imgSrc = event.target.src;  
  var modalImg = document.getElementById("img01");
  modalImg.src = imgSrc;  
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//Modal 2 Ends

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}