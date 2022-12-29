var intro = anime.timeline();
var outro = anime.timeline({
  autoplay: false
});

var showText = {
  targets: '#text',
  opacity: [
    { value: [0, 1], duration: 800, easing: 'easeInSine' }
      ],
};

var showGraph = {
  targets: '#container',
  translateY: [ 
    { value: window.innerHeight / 10, duration: 1000, easing: 'easeOutSine' }
      ],
  opacity: [
    { value: [0, 1], duration: 800, easing: 'easeInSine' }
      ],
};

var showButton = {
  targets: '#prev-button',
  opacity: [
    { value: [0, 1], duration: 600, easing: 'easeInSine' }
      ],
};

var hideText = {
  targets: '#text',
  opacity: [
    { value: [1, 0], duration: 500, easing: 'easeOutSine' }
      ],
};

var hideGraph = {
  targets: '#container',
  opacity: [
    { value: [1, 0], duration: 500, easing: 'easeOutSine' }
      ],
  complete: function(anim) {
    window.location.href = page;
  } 
};

intro.add(showText).add(showGraph);
outro.add(hideText).add(hideGraph);

const prevButton = document.querySelector("#prev-button");

var page;

 prevButton.addEventListener("click", function () {
  page = "undernourishment.html";
  outro.play();
 });