function plotDeforestation() {
    // create map
    var map = anychart.map();
  
    // create data set
    const datasets = [];
    datasets.push([{"id":"BR.AC","value":0.378}, {"id":"BR.AM","value":0.92}, {"id":"BR.AP","value":0.037}, {"id":"BR.MA","value":1.493}, {"id":"BR.MT","value":3.132}, {"id":"BR.PA","value":4.259}, {"id":"BR.RO","value":1.426},{"id":"BR.RR","value":0.177}, {"id":"BR.TO","value":1.005}]);
    datasets.push([{"id":"BR.AC","value":0.707}, {"id":"BR.AM","value":1.639}, {"id":"BR.AP","value":0.116}, {"id":"BR.MA","value":2.358}, {"id":"BR.MT","value":6.763}, {"id":"BR.PA","value":7.762}, {"id":"BR.RO","value":2.297},{"id":"BR.RR","value":0.561}, {"id":"BR.TO","value":1.45}]);
    datasets.push([{"id":"BR.AC","value":1.042}, {"id":"BR.AM","value":1.956}, {"id":"BR.AP","value":0.268}, {"id":"BR.MA","value":3.028}, {"id":"BR.MT","value":9.213}, {"id":"BR.PA","value":10.742}, {"id":"BR.RO","value":3.315},{"id":"BR.RR","value":0.652}, {"id":"BR.TO","value":1.804}]);
    datasets.push([{"id":"BR.AC","value":1.273}, {"id":"BR.AM","value":2.553}, {"id":"BR.AP","value":0.518}, {"id":"BR.MA","value":3.436}, {"id":"BR.MT","value":10.943}, {"id":"BR.PA","value":13.045}, {"id":"BR.RO","value":3.991},{"id":"BR.RR","value":0.908}, {"id":"BR.TO","value":2.072}]);
    datasets.push([{"id":"BR.AC","value":1.517}, {"id":"BR.AM","value":3.04}, {"id":"BR.AP","value":0.54}, {"id":"BR.MA","value":4.128}, {"id":"BR.MT","value":13.791}, {"id":"BR.PA","value":15.353}, {"id":"BR.RO","value":5.371},{"id":"BR.RR","value":1.079}, {"id":"BR.TO","value":2.321}]);
    datasets.push([{"id":"BR.AC","value":1.811}, {"id":"BR.AM","value":3.265}, {"id":"BR.AP","value":0.54}, {"id":"BR.MA","value":4.355}, {"id":"BR.MT","value":17.581}, {"id":"BR.PA","value":17.963}, {"id":"BR.RO","value":6.952},{"id":"BR.RR","value":1.225}, {"id":"BR.TO","value":2.524}]);
    datasets.push([{"id":"BR.AC","value":2.105}, {"id":"BR.AM","value":3.491}, {"id":"BR.AP","value":0.54}, {"id":"BR.MA","value":4.581}, {"id":"BR.MT","value":21.371}, {"id":"BR.PA","value":20.573}, {"id":"BR.RO","value":8.533},{"id":"BR.RR","value":1.372}, {"id":"BR.TO","value":2.727}]);
    datasets.push([{"id":"BR.AC","value":2.841}, {"id":"BR.AM","value":4.779}, {"id":"BR.AP","value":0.545}, {"id":"BR.MA","value":5.645}, {"id":"BR.MT","value":27.702}, {"id":"BR.PA","value":25.353}, {"id":"BR.RO","value":11.415},{"id":"BR.RR","value":1.506}, {"id":"BR.TO","value":3.212}]);
    datasets.push([{"id":"BR.AC","value":3.104}, {"id":"BR.AM","value":5.402}, {"id":"BR.AP","value":0.545}, {"id":"BR.MA","value":6.291}, {"id":"BR.MT","value":31.688}, {"id":"BR.PA","value":29.091}, {"id":"BR.RO","value":12.897},{"id":"BR.RR","value":1.636}, {"id":"BR.TO","value":3.407}]);
    datasets.push([{"id":"BR.AC","value":3.323}, {"id":"BR.AM","value":5.761}, {"id":"BR.AP","value":0.556}, {"id":"BR.MA","value":6.54}, {"id":"BR.MT","value":34.9}, {"id":"BR.PA","value":31.613}, {"id":"BR.RO","value":14.107},{"id":"BR.RR","value":1.748}, {"id":"BR.TO","value":3.574}]);
    datasets.push([{"id":"BR.AC","value":3.649}, {"id":"BR.AM","value":6.169}, {"id":"BR.AP","value":0.575}, {"id":"BR.MA","value":7.157}, {"id":"BR.MT","value":38.84}, {"id":"BR.PA","value":35.164}, {"id":"BR.RO","value":15.351},{"id":"BR.RR","value":1.884}, {"id":"BR.TO","value":3.924}]);
    datasets.push([{"id":"BR.AC","value":3.918}, {"id":"BR.AM","value":6.608}, {"id":"BR.AP","value":0.575}, {"id":"BR.MA","value":7.906}, {"id":"BR.MT","value":43.082}, {"id":"BR.PA","value":38.279}, {"id":"BR.RO","value":16.787},{"id":"BR.RR","value":2.018}, {"id":"BR.TO","value":4.056}]);
    datasets.push([{"id":"BR.AC","value":4.251}, {"id":"BR.AM","value":6.981}, {"id":"BR.AP","value":0.575}, {"id":"BR.MA","value":8.555}, {"id":"BR.MT","value":46.963}, {"id":"BR.PA","value":42.343}, {"id":"BR.RO","value":18.289},{"id":"BR.RR","value":2.172}, {"id":"BR.TO","value":4.205}]);
    datasets.push([{"id":"BR.AC","value":4.506}, {"id":"BR.AM","value":7.367}, {"id":"BR.AP","value":0.579}, {"id":"BR.MA","value":9.139}, {"id":"BR.MT","value":51.656}, {"id":"BR.PA","value":45.534}, {"id":"BR.RO","value":19.918},{"id":"BR.RR","value":2.382}, {"id":"BR.TO","value":4.32}]);
    datasets.push([{"id":"BR.AC","value":5.044}, {"id":"BR.AM","value":7.906}, {"id":"BR.AP","value":0.579}, {"id":"BR.MA","value":9.8}, {"id":"BR.MT","value":56.465}, {"id":"BR.PA","value":50.11}, {"id":"BR.RO","value":21.806},{"id":"BR.RR","value":2.434}, {"id":"BR.TO","value":4.449}]);
    datasets.push([{"id":"BR.AC","value":5.701}, {"id":"BR.AM","value":8.856}, {"id":"BR.AP","value":0.594}, {"id":"BR.MA","value":10.405}, {"id":"BR.MT","value":62.805}, {"id":"BR.PA","value":54.463}, {"id":"BR.RO","value":23.998},{"id":"BR.RR","value":2.701}, {"id":"BR.TO","value":4.544}]);
    datasets.push([{"id":"BR.AC","value":6.145}, {"id":"BR.AM","value":9.606}, {"id":"BR.AP","value":0.622}, {"id":"BR.MA","value":10.865}, {"id":"BR.MT","value":70.003}, {"id":"BR.PA","value":59.868}, {"id":"BR.RO","value":26.349},{"id":"BR.RR","value":2.891}, {"id":"BR.TO","value":4.64}]);
    datasets.push([{"id":"BR.AC","value":6.505}, {"id":"BR.AM","value":10.078}, {"id":"BR.AP","value":0.642}, {"id":"BR.MA","value":11.427}, {"id":"BR.MT","value":74.356}, {"id":"BR.PA","value":63.462}, {"id":"BR.RO","value":28.325},{"id":"BR.RR","value":2.972}, {"id":"BR.TO","value":4.806}]);
    datasets.push([{"id":"BR.AC","value":6.748}, {"id":"BR.AM","value":10.559}, {"id":"BR.AP","value":0.66}, {"id":"BR.MA","value":11.837}, {"id":"BR.MT","value":76.997}, {"id":"BR.PA","value":66.91}, {"id":"BR.RO","value":29.574},{"id":"BR.RR","value":3.112}, {"id":"BR.TO","value":4.881}]);
    datasets.push([{"id":"BR.AC","value":6.86}, {"id":"BR.AM","value":10.93}, {"id":"BR.AP","value":0.684}, {"id":"BR.MA","value":12.222}, {"id":"BR.MT","value":78.628}, {"id":"BR.PA","value":70.277}, {"id":"BR.RO","value":30.555},{"id":"BR.RR","value":3.301}, {"id":"BR.TO","value":4.919}]);
    datasets.push([{"id":"BR.AC","value":7.015}, {"id":"BR.AM","value":11.298}, {"id":"BR.AP","value":0.745}, {"id":"BR.MA","value":12.996}, {"id":"BR.MT","value":80.613}, {"id":"BR.PA","value":73.694}, {"id":"BR.RO","value":31.247},{"id":"BR.RR","value":3.65}, {"id":"BR.TO","value":4.985}]);
    datasets.push([{"id":"BR.AC","value":7.117}, {"id":"BR.AM","value":11.545}, {"id":"BR.AP","value":0.788}, {"id":"BR.MA","value":13.501}, {"id":"BR.MT","value":81.252}, {"id":"BR.PA","value":76.302}, {"id":"BR.RO","value":31.541},{"id":"BR.RR","value":3.724}, {"id":"BR.TO","value":5.022}]);
    datasets.push([{"id":"BR.AC","value":7.274}, {"id":"BR.AM","value":11.908}, {"id":"BR.AP","value":0.82}, {"id":"BR.MA","value":13.935}, {"id":"BR.MT","value":81.783}, {"id":"BR.PA","value":78.599}, {"id":"BR.RO","value":31.806},{"id":"BR.RR","value":3.88}, {"id":"BR.TO","value":5.052}]);
    datasets.push([{"id":"BR.AC","value":7.445}, {"id":"BR.AM","value":12.213}, {"id":"BR.AP","value":0.86}, {"id":"BR.MA","value":14.176}, {"id":"BR.MT","value":82.466}, {"id":"BR.PA","value":80.432}, {"id":"BR.RO","value":32.333},{"id":"BR.RR","value":3.966}, {"id":"BR.TO","value":5.076}]);
    datasets.push([{"id":"BR.AC","value":7.631}, {"id":"BR.AM","value":12.532}, {"id":"BR.AP","value":0.877}, {"id":"BR.MA","value":14.34}, {"id":"BR.MT","value":82.927}, {"id":"BR.PA","value":81.493}, {"id":"BR.RO","value":32.804},{"id":"BR.RR","value":4.041}, {"id":"BR.TO","value":5.108}]);
    datasets.push([{"id":"BR.AC","value":7.766}, {"id":"BR.AM","value":12.887}, {"id":"BR.AP","value":0.891}, {"id":"BR.MA","value":14.585}, {"id":"BR.MT","value":83.621}, {"id":"BR.PA","value":82.922}, {"id":"BR.RO","value":33.372},{"id":"BR.RR","value":4.145}, {"id":"BR.TO","value":5.153}]);
    datasets.push([{"id":"BR.AC","value":7.954}, {"id":"BR.AM","value":13.192}, {"id":"BR.AP","value":0.91}, {"id":"BR.MA","value":14.742}, {"id":"BR.MT","value":84.276}, {"id":"BR.PA","value":84.072}, {"id":"BR.RO","value":33.789},{"id":"BR.RR","value":4.278}, {"id":"BR.TO","value":5.183}]);
    datasets.push([{"id":"BR.AC","value":8.115}, {"id":"BR.AM","value":13.626}, {"id":"BR.AP","value":0.925}, {"id":"BR.MA","value":14.869}, {"id":"BR.MT","value":85.251}, {"id":"BR.PA","value":85.384}, {"id":"BR.RO","value":34.416},{"id":"BR.RR","value":4.374}, {"id":"BR.TO","value":5.218}]);
    datasets.push([{"id":"BR.AC","value":8.341}, {"id":"BR.AM","value":14.314}, {"id":"BR.AP","value":0.935}, {"id":"BR.MA","value":15.027}, {"id":"BR.MT","value":86.159}, {"id":"BR.PA","value":87.207}, {"id":"BR.RO","value":35.255},{"id":"BR.RR","value":4.497}, {"id":"BR.TO","value":5.253}]);
    datasets.push([{"id":"BR.AC","value":8.498}, {"id":"BR.AM","value":14.924}, {"id":"BR.AP","value":0.95}, {"id":"BR.MA","value":15.188}, {"id":"BR.MT","value":87.11}, {"id":"BR.PA","value":88.689}, {"id":"BR.RO","value":36.012},{"id":"BR.RR","value":4.577}, {"id":"BR.TO","value":5.272}]);
    datasets.push([{"id":"BR.AC","value":8.768}, {"id":"BR.AM","value":15.56}, {"id":"BR.AP","value":0.965}, {"id":"BR.MA","value":15.342}, {"id":"BR.MT","value":88.018}, {"id":"BR.PA","value":90.361}, {"id":"BR.RO","value":36.814},{"id":"BR.RR","value":4.696}, {"id":"BR.TO","value":5.287}]);
    datasets.push([{"id":"BR.AC","value":9.184}, {"id":"BR.AM","value":16.434}, {"id":"BR.AP","value":0.984}, {"id":"BR.MA","value":15.487}, {"id":"BR.MT","value":89.055}, {"id":"BR.PA","value":92.903}, {"id":"BR.RO","value":37.58},{"id":"BR.RR","value":5.055}, {"id":"BR.TO","value":5.302}]);
    datasets.push([{"id":"BR.AC","value":9.614}, {"id":"BR.AM","value":17.355}, {"id":"BR.AP","value":0.999}, {"id":"BR.MA","value":15.691}, {"id":"BR.MT","value":90.138}, {"id":"BR.PA","value":95.888}, {"id":"BR.RO","value":38.355},{"id":"BR.RR","value":5.236}, {"id":"BR.TO","value":5.317}]);
    
    var slider = document.getElementById("myRange");

    data = anychart.data.set(datasets[0])
    series = map.choropleth(data);
        
    // set geoIdField to 'id', this field contains in geo data meta properties
    series.geoIdField('id');

    // set map color settings
    series.colorScale(anychart.scales.linearColor('#72C963', '#5D0300').minimum(0).maximum(100));


    // set geo data, you can find this map in our geo maps collection
    // https://cdn.anychart.com/#maps-collection
    map.geoData(anychart.maps['brazil']);

    //set map container id (div)
    map.container('container');

    //initiate map drawing
    map.draw();

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        for (let i = 0; i < datasets[this.value].length; i++)
        {
            data.remove(0);
            data.append(datasets[this.value][i]);
        }
    }
};