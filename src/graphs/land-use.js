  const dataLandUse = {
      labels: [1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      datasets: [
        {
          label: 'Cropland',
          data: [31444, 31971, 32498, 33025, 33552, 34079, 34606, 35133, 35660, 36190, 37393, 38596, 39799, 41002, 42207, 45369, 48531, 51693, 54855, 58018.208, 58977, 59936, 60895, 61854, 62810.707, 61540, 60269, 58998, 57727, 56456, 55185, 53914, 52643, 51372, 50105, 51058, 52011, 52964, 53917, 54870, 55823, 56776, 57729, 58682, 59635, 60593, 60859, 61125, 61391, 61657, 61923, 62189, 62455, 62721, 62987, 63253, 63517.8, 63518, 63518, 63518],
          backgroundColor: '#70d45f',
          borderColor: '#32B35F',
          borderWidth: 2
        },
        {
          label: 'Pasture',
          data: [125515,128695,131875,135055,138235,141415,144595,147775,150955,154138,156441,158744,161047,163350,165652,167411,169170,170929,172688,174499,175436.8,176374.6,177312.4,178250.2,179188,179039.2,178890.4,178741.6,178592.8,178444,178295.2,178146.4,177997.6,177848.8,177700,176850.7,176001.4,175152.1,174302.8,173453.5,172604.2,171754.9,170905.6,170056.3,169207,168358,168812.8,169267.6,169722.4,170177.2,170632,171086.8,171541.6,171996.4,172451.2,172906,173360.8,173360.801,173360.801,173360.801],
          backgroundColor: '#FF6166',
          borderColor: '#FF2D40',
          borderWidth: 2
        }
      ]
    };
  
  const optionsLandUse = {
    responsive: true,
    legend: {
        reverse: true,
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
