const data = {
    labels: ["2009/10", "2010/11", "2011/12", "2012/13", "2013/14", "2014/15", "2015/16", "2016/17", "2017/18", "2018/19", "2019/20"],
    datasets: [
      {
        data: [142219, 211783, 266666, 292404, 365577, 440288, 524725, 616961, 710562, 875663, 1022040],
        backgroundColor: '#BF9A93',
        borderColor: '#806762',
        borderWidth: 2
      }
    ]
  };

const options = {
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        fontSize: 24,
        labelString: 'Years'
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        fontSize: 24,
        labelString: 'Number of admissions'
      }
    }]
  },
  title: {
    display: true,
    fontSize: 44,
    text: 'Finished admission episodes with a primary or secondary diagnosis of obesity'
  }
};

const config = {
    type: 'line',
    data: data,
    options: options
};

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, config);

myChart.update();