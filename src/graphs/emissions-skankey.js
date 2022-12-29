
    // add data
    const data = [
      {from: "Plants", to: "Cereals", weight: 0.75},
      {from: "Cereals", to: "Cereals Excluding Rice", weight: 0.11},
      {from: "Cereals", to: "Rice", weight: 0.65},
      {from: "Animals", to: "Meat", weight: 90.6},
      {from: "Animals", to: "Eggs and Milk", weight: 8.68},
      {from: "Meat", to: "Sheep", weight: 14.3},
      {from: "Meat", to: "Goats", weight: 20.4},
      {from: "Meat", to: "Cattle", weight: 17.8},
      {from: "Meat", to: "Buffalo", weight: 36.6},
      {from: "Meat", to: "Chicken", weight: 0.33},
      {from: "Meat", to: "Pig Meat", weight: 1.07},
      {from: "Eggs and Milk", to: "Sheep", weight: 3.28},
      {from: "Eggs and Milk", to: "Goats", weight: 1.48},
      {from: "Eggs and Milk", to: "Cattle", weight: 0.57},
      {from: "Eggs and Milk", to: "Buffalo", weight: 0.58},
      {from: "Eggs and Milk", to: "Chicken", weight: 0.33},
      {from: "Eggs and Milk", to: "Cammel Milk", weight: 2.44}
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

    chart.node().tooltip().format("{%value}%");
    chart.flow().tooltip().format("{%value}%");

    chart.node().normal().fill("#FF6166 0.5");
    chart.node().hovered().fill(anychart.color.darken("#FF6166"));

    // add a title
    chart.title('Emission Intensities by Product');
    map.title().fontSize(24);

    // set the chart container id
    chart.container("emissionsSkankey");

    // draw the chart
    chart.draw();
