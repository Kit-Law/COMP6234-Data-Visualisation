var intro = anime.timeline();
var outro = anime.timeline({
  autoplay: false
});

var showText = {
  targets: '#text',
  translateY: [ 
    { value: window.innerHeight / 4, duration: 1000, easing: 'easeOutSine' }
      ],
  opacity: [
    { value: [0, 1], duration: 800, easing: 'easeInSine' }
      ],
};

var showGraph = {
  targets: '#container',
  translateY: [ 
    { value: window.innerHeight / 5, duration: 1000, easing: 'easeOutSine' }
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

intro.add(showText).add(showGraph).add(showButton);
outro.add(hideText).add(hideGraph);

const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");

var page;

nextButton.addEventListener("click", function () {
  page = "obesity.html";
  outro.play();
 });

 prevButton.addEventListener("click", function () {
  page = "emissions-skankey.html";
  outro.play();
 });