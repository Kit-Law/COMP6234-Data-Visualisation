function plotLandUse() {
  
  const dataLandUse = {
      labels: [1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      datasets: [
        {
          label: 'Cropland',
          data: [31444, 31971, 32498, 33025, 33552, 34079, 34606, 35133, 35660, 36190, 37393, 38596, 39799, 41002, 42207, 45369, 48531, 51693, 54855, 58018.208, 58977, 59936, 60895, 61854, 62810.707, 61540, 60269, 58998, 57727, 56456, 55185, 53914, 52643, 51372, 50105, 51058, 52011, 52964, 53917, 54870, 55823, 56776, 57729, 58682, 59635, 60593, 60859, 61125, 61391, 61657, 61923, 62189, 62455, 62721, 62987, 63253, 63517.8, 63518, 63518, 63518],
          backgroundColor: '#5CFF96',
          borderColor: '#32B35F',
          borderWidth: 2
        },
        {
          label: 'Agriculture',
          data: [156959, 160666, 164373, 168080, 171787, 175494, 179201, 182908, 186615, 190328, 193834, 197340, 200846, 204352, 207859, 212780, 217701, 222622, 227543, 232517.208, 234413.8, 236310.6, 238207.4, 240104.2, 241998.707, 240579.2, 239159.4, 237739.6, 236319.8, 234900, 233480.2, 232060.4, 230640.6, 229220.8, 227805, 227908.7, 228012.4, 228116.1, 228219.8, 228323.5, 228427.2, 228530.9, 228634.6, 228738.3, 228842, 228951, 229671.8, 230392.6, 231113.4, 231834.2, 232555, 233275.8, 233996.6, 234717.4, 235438.2, 236159, 236878.6, 236878.801, 236878.801, 236878.801],
          backgroundColor: '#FF6166',
          borderColor: '#FF2D40',
          borderWidth: 2
        }
      ]
    };
  
  const optionsLandUse = {
    responsive: true,
    legend: {
        position: 'right',
        onClick: (e) => e.stopPropagation(),
        labels: {
            fontSize: 18,
            boxWidth: 24
        }
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
          labelString: '1000 ha'
        }
      }]
    },
    title: {
      display: true,
      fontSize: 44,
      text: 'Use of Land in Brazil'
    },
    annotation: {
      annotations: [
        {
          drawTime: "afterDatasetsDraw",
          type: "line",
          mode: "vertical",
          value: 2006,
          borderWidth: 1000,
          borderColor: "#32B35F",
          zIndex: 100,
          label: {
            content: "Cropland Ban",
            enabled: true,
            position: "top"
          }
        }
      ]
    },
  };
  
  const configLandUse = {
      type: 'line',
      data: dataLandUse,
      options: optionsLandUse
  };
  
  const ctxlandUse = document.getElementById('landUse');
  const landUse = new Chart(ctxlandUse, configLandUse);
  
  landUse.update();
}
