anychart.onDocumentReady(function () {
  
    // add data
    const data = [
      {from: "Plants", to: "Cereals", weight: 23.4},
      {from: "Cereals", to: "Cereals Excluding Rice", weight: 7.52},
      {from: "Cereals", to: "Rice", weight: 15.9},
      {from: "Animals", to: "Meat", weight: 75.1},
      {from: "Animals", to: "Eggs and Milk", weight: 24.8},
      {from: "Meat", to: "Sheep", weight: 4.57},
      {from: "Meat", to: "Goats", weight: 4.04},
      {from: "Meat", to: "Cattle", weight: 39.0},
      {from: "Meat", to: "Buffalo", weight: 4.95},
      {from: "Meat", to: "Chicken", weight: 1.27},
      {from: "Meat", to: "Pig Meat", weight: 3.79},
      {from: "Eggs and Milk", to: "Sheep", weight: 1.12},
      {from: "Eggs and Milk", to: "Goats", weight: 0.98},
      {from: "Eggs and Milk", to: "Cattle", weight: 13.2},
      {from: "Eggs and Milk", to: "Buffalo", weight: 2.53},
      {from: "Eggs and Milk", to: "Chicken", weight: 0.913},
      {from: "Eggs and Milk", to: "Cammel Milk", weight: 0.24}
    ];

    // create a sankey diagram instance
    let chart = anychart.sankey();

    // load the data to the sankey diagram instance
    chart.data(data);

    chart.node().tooltip().format(function() {
        return this.outcome[i] + "%";
      });

    // set the chart's padding
    chart.padding(20, 60);

    // add a title
    chart.title('Emissions by Product');

    // set the chart container id
    chart.container("container");

    // draw the chart
    chart.draw();

  });