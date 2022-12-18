function plotUndernourishment() {

  const data = {
      labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      datasets: [
        {
          data: [32.9, 31.8, 31, 30.1, 29.1, 27.6, 26.9, 25.6, 25, 24.1, 21, 20.9, 20.3, 20.1, 19.9, 20, 20.8, 20.2, 20.4, 21.4, 23.1, 24.3],
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
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10
        },
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
          labelString: '% of the Population'
        }
      }]
    },
    title: {
      display: true,
      fontSize: 44,
      text: 'Undernourishment in Developing Countries'
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              const currentValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return `${currentValue}%`;
          }
      }
    }
  };

  const config = {
      type: 'line',
      data: data,
      options: options
  };

  const ctx = document.getElementById('undernourishmentGraph');
  const undernourishment = new Chart(ctx, config);

  undernourishment.update();

};