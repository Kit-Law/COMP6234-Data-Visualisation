document.getElementById('app').innerHTML = `<h1 id="title">Vegans Cure Climate Change</h1>`;

var intro = anime.timeline();
var outro = anime.timeline({
  autoplay: false
});

var showTitle = {
  targets: '#title',
  translateY: [ 
    { value: window.innerHeight / 2.8, duration: 1500, easing: 'easeOutSine' }
      ],
  opacity: [
    { value: [0, 1], duration: 600, easing: 'easeInSine' }
      ],
};

var hideTitle = {
  targets: '#title',
  opacity: [
    { value: [1, 0], duration: 500, easing: 'easeOutSine' }
      ],
  complete: function(anim) {
    window.location.href = "obesity.html";
  } 
};

var showButton = {
  targets: '#prev-button',
  opacity: [
    { value: [0, 1], duration: 600, easing: 'easeInSine' }
      ],
};

intro.add(showTitle).add(showButton);
outro.add(hideTitle);

const prevButton = document.querySelector("#prev-button");

 prevButton.addEventListener("click", function () {
  outro.play();
 });