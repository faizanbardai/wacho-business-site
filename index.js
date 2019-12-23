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
var imgModal = document.getElementById("imgModal");

// Get the image and insert it inside the modal
function modalDisplay(event) {
  var imgSrc = event.target.src;  
  var modalImg = document.getElementById("img01");
  modalImg.src = imgSrc;  
  imgModal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("imgClose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  imgModal.style.display = "none";
}
//Modal 2 Ends

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}

// Products
var products = [
  {
    title: "Rice Pitcher",
    image: "./img/p1.jpg",
    variety: "Rkatsiteli",
    color: "Dark brown with golden color",
    aroma: "Meadow flowers",
    taste: "soft",
    alcohol: "13%",
    description:
      '"Rkatsiteli Pitcher" - Made from the ancient Georgian grape variety Rkatsiteli, built on strict sharing of ancestral traditions with whole chacha (clover, grains). After fermentation, we will leave for 4-5 months in our unadulterated pitcher. Dark brown with golden hues. The tones of honey, flowers and roasted walnuts change dynamically, giving it fullness and elegance.'
  },
  {
    title: "Green pitcher",
    image: "./img/p2.jpg",
    variety: "Green",
    color: "Beige, green",
    aroma: "Ripe fruit and various stems",
    taste: "full and velvety",
    alcohol: "13%",
    description:
      '"Green pitcher" comes from the grape variety "Kakhuri Green" grown in Kakheti. Has a light greenish tint. After fermentation we will lose 4-5 months in our uninvolved pitcher. The aroma and taste of the ripe fruit and the different dried fruits are felt, which blend well with each other when tasting. Is complete and velvety.'
  },
  {
    title: "Pitcher pitcher",
    image: "./img/p3.jpg",
    variety: "Khikhvi",
    color: "Green tint, golden",
    aroma: "Meadow flowers",
    taste: "ripe fruit, velvety",
    alcohol: "13%",
    description:
      '"Khikhvi Qvevri" is made from the ancient Khikhvi grape variety. Has a golden-green tint. After fermentation we will lose 4-5 months in our uninvolved pitcher. It is distinguished by the delicate floral aroma, the aroma of the ripe fruit and the taste, it is delicate and velvety. It has high antioxidant healing properties.'
  },
  {
    title: "Kiss the pitcher",
    image: "./img/p4.jpg",
    variety: "Kiss",
    color: "Dark brown",
    aroma: "gentle fruity and fruity aroma",
    taste: "harmonious, soft",
    alcohol: "13%",
    description:
      '"Kiss Qvevri" is made from the ancient Georgian grape variety Qissi. Grapes selected on the grape are pitched 4-5 with careful patronage. It has a dark brown color.'
  },
  {
    title: "Saperavi pitcher",
    image: "./img/p5.jpg",
    variety: "Saperavi",
    color: "Purple, dark pomegranate",
    aroma: "cherry, blackberry, forest berry, plum",
    taste: "cherries, berries, blackberries",
    alcohol: "13%",
    description:
      '"Saperavi pitcher" is made from the ancient Georgian vine variety Saperavi, cultivated in Kakheti. It is characterized by dark pomegranate, violet color.'
  },
];
//get products section
var wineProducts = document.querySelector(".wine-products");
wineProducts.innerHTML = "";
{/* <h5 class="card-title">${product.title}</h5> */}
products.forEach(product => {
  wineProducts.innerHTML += `
      <div class="col col-sm-6 col-md-4">
        <div class="card mb-3">
          <img src=${product.image} class="card-img-top" alt=${product.title}>
          <div class="card-body text-center">
            <button 
              class="btn btn-outline-info stretched-link"
              data-toggle="modal" 
              data-target="#productModal"
              data-title='${product.title}'
              data-image='${product.image}'
              data-variety='${product.variety}'
              data-color='${product.color}'
              data-aroma='${product.aroma}'
              data-taste='${product.taste}'
              data-alcohol='${product.alcohol}'
              data-description='${product.description}'
            >${product.title}</button>
          </div>
        </div>
      </div>
  `;
});
// Modal JS
$("#productModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var title = button.data("title");
  var image = button.data("image");
  var variety = button.data("variety");
  var color = button.data("color");
  var aroma = button.data("aroma");
  var taste = button.data("taste");
  var alcohol = button.data("alcohol");
  var description = button.data("description");
  var modal = $(this);
  modal.find(".modal-title").text(title);
  modal.find(".modal-body").html(`
    <div class="card">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${image}" class="card-img" alt="Rice pitcher">
        </div>
        <div class="col-md-8">
          <div class="card-body">            
            <ul class="list-group list-group-flush">
              <li id="variety" class="list-group-item">Variety: ${variety}</li>
              <li id="color" class="list-group-item">Color: ${color}</li>
              <li id="aroma" class="list-group-item">Aroma: ${aroma}</li>
              <li id="taste" class="list-group-item">The taste is: ${taste}</li>              
            </ul>
            <p id="description" class="card-text">${description}</p>
            <p class="card-text"><small id="alcohol" class="text-muted">Alcohol: ${alcohol}</small></p>
          </div>
        </div>
      </div>
    </div>
  `);
});