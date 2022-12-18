function plotSoyConsumption() {

    const data = {
    labels: [
        'Human',
        'Livestock'
    ],
    datasets: [{
        label: 'Global Soy Consumtion by Species Type',
        data: [20, 80],
        backgroundColor: [
        '#5CFF96',
        '#FF6166'
        ],
        hoverOffset: 4
    }]
    };

    const options = {
        responsive: true,
        legend: {
            position: 'bottom',
            onClick: (e) => e.stopPropagation(),
            reverse: true,
            labels: {
                fontSize: 24,
                boxWidth: 40
            }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex];
                    const total = dataset.data.reduce((acc, cur) => acc + cur);
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                    return `${percentage}%`;
                }
            }
        }
    };

    // centerText plugin block
    const centerText = {
        id: 'centerText',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx } = chart;
            ctx.font = '24px Arial';
            const textHeight = ctx.measureText('M').width; // get height of text

            ctx.fillText(
                'Global',
                chart.width / 2 - ctx.measureText('Global').width / 2, 
                chart.height / 2 - textHeight * 1.5 - 4
            );
            ctx.fillText(
                'Soy Consumption',
                chart.width / 2 - ctx.measureText('Soy Consumption').width / 2, 
                chart.height / 2 - textHeight / 2
            );
            ctx.fillText(
                'by Species Type',
                chart.width / 2 - ctx.measureText('by Species Type').width / 2, 
                chart.height / 2 + textHeight / 2 + 4
            );
        }
    }

    const config = {
        type: 'doughnut',
        data: data,
        options: options,
        plugins: [centerText]
    };

    const ctx = document.getElementById('soyConsumption');
    const soyConsumption = new Chart(ctx, config);

    soyConsumption.update();

};