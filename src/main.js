document.getElementById('app').innerHTML = `<h1 id="title">Vegans Cause Climate Change</h1>`;

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
};

var showButton = {
  targets: '#next-button',
  opacity: [
    { value: [0, 1], duration: 600, easing: 'easeInSine' }
      ],
};

var hideButton = {
  targets: '#next-button',
  opacity: [
    { value: [1, 0], duration: 500, easing: 'easeInSine' }
      ],
};

intro.add(showTitle).add(showButton);
outro.add(hideTitle);

const nextButton = document.querySelector("#next-button");

nextButton.addEventListener("click", function () {
  anime(hideButton);
  outro.play();
 });

 const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'line',
  data: data
});

myChart.update();