anychart.onDocumentReady(function() {
    // create map
    var map = anychart.map();
  
    // create data set
    const datasets = [];
    datasets.push([{"id":"BR.AC","value":620}, {"id":"BR.AM","value":1510}, {"id":"BR.AP","value":60}, {"id":"BR.MA","value":2450}, {"id":"BR.MT","value":5140}, {"id":"BR.PA","value":6990}, {"id":"BR.RO","value":2340},{"id":"BR.RR","value":290}, {"id":"BR.TO","value":1650}]);
    datasets.push([{"id":"BR.AC","value":540}, {"id":"BR.AM","value":1180}, {"id":"BR.AP","value":130}, {"id":"BR.MA","value":1420}, {"id":"BR.MT","value":5960}, {"id":"BR.PA","value":5750}, {"id":"BR.RO","value":1430},{"id":"BR.RR","value":630}, {"id":"BR.TO","value":730}]);
    datasets.push([{"id":"BR.AC","value":550}, {"id":"BR.AM","value":520}, {"id":"BR.AP","value":250}, {"id":"BR.MA","value":1100}, {"id":"BR.MT","value":4020}, {"id":"BR.PA","value":4890}, {"id":"BR.RO","value":1670},{"id":"BR.RR","value":150}, {"id":"BR.TO","value":580}]);
    datasets.push([{"id":"BR.AC","value":380}, {"id":"BR.AM","value":980}, {"id":"BR.AP","value":410}, {"id":"BR.MA","value":670}, {"id":"BR.MT","value":2840}, {"id":"BR.PA","value":3780}, {"id":"BR.RO","value":1110},{"id":"BR.RR","value":420}, {"id":"BR.TO","value":440}]);
    datasets.push([{"id":"BR.AC","value":400}, {"id":"BR.AM","value":799}, {"id":"BR.AP","value":36}, {"id":"BR.MA","value":1135}, {"id":"BR.MT","value":4674}, {"id":"BR.PA","value":3787}, {"id":"BR.RO","value":2265},{"id":"BR.RR","value":281}, {"id":"BR.TO","value":409}]);
    datasets.push([{"id":"BR.AC","value":482}, {"id":"BR.AM","value":370}, {"id":"BR.AP","value":0}, {"id":"BR.MA","value":372}, {"id":"BR.MT","value":6220}, {"id":"BR.PA","value":4284}, {"id":"BR.RO","value":2595},{"id":"BR.RR","value":240}, {"id":"BR.TO","value":333}]);
    datasets.push([{"id":"BR.AC","value":482}, {"id":"BR.AM","value":370}, {"id":"BR.AP","value":0}, {"id":"BR.MA","value":372}, {"id":"BR.MT","value":6220}, {"id":"BR.PA","value":4284}, {"id":"BR.RO","value":2595},{"id":"BR.RR","value":240}, {"id":"BR.TO","value":333}]);
    datasets.push([{"id":"BR.AC","value":1208}, {"id":"BR.AM","value":2114}, {"id":"BR.AP","value":9}, {"id":"BR.MA","value":1745}, {"id":"BR.MT","value":10391}, {"id":"BR.PA","value":7845}, {"id":"BR.RO","value":4730},{"id":"BR.RR","value":220}, {"id":"BR.TO","value":797}]);
    datasets.push([{"id":"BR.AC","value":433}, {"id":"BR.AM","value":1023}, {"id":"BR.AP","value":0}, {"id":"BR.MA","value":1061}, {"id":"BR.MT","value":6543}, {"id":"BR.PA","value":6135}, {"id":"BR.RO","value":2432},{"id":"BR.RR","value":214}, {"id":"BR.TO","value":320}]);
    datasets.push([{"id":"BR.AC","value":358}, {"id":"BR.AM","value":589}, {"id":"BR.AP","value":18}, {"id":"BR.MA","value":409}, {"id":"BR.MT","value":5271}, {"id":"BR.PA","value":4139}, {"id":"BR.RO","value":1986},{"id":"BR.RR","value":184}, {"id":"BR.TO","value":273}]);
    datasets.push([{"id":"BR.AC","value":536}, {"id":"BR.AM","value":670}, {"id":"BR.AP","value":30}, {"id":"BR.MA","value":1012}, {"id":"BR.MT","value":6466}, {"id":"BR.PA","value":5829}, {"id":"BR.RO","value":2041},{"id":"BR.RR","value":223}, {"id":"BR.TO","value":576}]);
    datasets.push([{"id":"BR.AC","value":441}, {"id":"BR.AM","value":720}, {"id":"BR.AP","value":0}, {"id":"BR.MA","value":1230}, {"id":"BR.MT","value":6963}, {"id":"BR.PA","value":5111}, {"id":"BR.RO","value":2358},{"id":"BR.RR","value":220}, {"id":"BR.TO","value":216}]);
    datasets.push([{"id":"BR.AC","value":547}, {"id":"BR.AM","value":612}, {"id":"BR.AP","value":0}, {"id":"BR.MA","value":1065}, {"id":"BR.MT","value":6369}, {"id":"BR.PA","value":6671}, {"id":"BR.RO","value":2465},{"id":"BR.RR","value":253}, {"id":"BR.TO","value":244}]);
    datasets.push([{"id":"BR.AC","value":419}, {"id":"BR.AM","value":634}, {"id":"BR.AP","value":7}, {"id":"BR.MA","value":958}, {"id":"BR.MT","value":7703}, {"id":"BR.PA","value":5237}, {"id":"BR.RO","value":2673},{"id":"BR.RR","value":345}, {"id":"BR.TO","value":189}]);
    datasets.push([{"id":"BR.AC","value":883}, {"id":"BR.AM","value":885}, {"id":"BR.AP","value":0}, {"id":"BR.MA","value":1085}, {"id":"BR.MT","value":7892}, {"id":"BR.PA","value":7510}, {"id":"BR.RO","value":3099},{"id":"BR.RR","value":84}, {"id":"BR.TO","value":212}]);
    datasets.push([{"id":"BR.AC","value":1078}, {"id":"BR.AM","value":1558}, {"id":"BR.AP","value":25}, {"id":"BR.MA","value":993}, {"id":"BR.MT","value":10405}, {"id":"BR.PA","value":7145}, {"id":"BR.RO","value":3597},{"id":"BR.RR","value":439}, {"id":"BR.TO","value":156}]);
    datasets.push([{"id":"BR.AC","value":728}, {"id":"BR.AM","value":1232}, {"id":"BR.AP","value":46}, {"id":"BR.MA","value":755}, {"id":"BR.MT","value":11814}, {"id":"BR.PA","value":8870}, {"id":"BR.RO","value":3858},{"id":"BR.RR","value":311}, {"id":"BR.TO","value":158}]);
    datasets.push([{"id":"BR.AC","value":592}, {"id":"BR.AM","value":775}, {"id":"BR.AP","value":33}, {"id":"BR.MA","value":922}, {"id":"BR.MT","value":7145}, {"id":"BR.PA","value":5899}, {"id":"BR.RO","value":3244},{"id":"BR.RR","value":133}, {"id":"BR.TO","value":271}]);
    datasets.push([{"id":"BR.AC","value":398}, {"id":"BR.AM","value":788}, {"id":"BR.AP","value":30}, {"id":"BR.MA","value":674}, {"id":"BR.MT","value":4333}, {"id":"BR.PA","value":5659}, {"id":"BR.RO","value":2049},{"id":"BR.RR","value":231}, {"id":"BR.TO","value":124}]);
    datasets.push([{"id":"BR.AC","value":184}, {"id":"BR.AM","value":610}, {"id":"BR.AP","value":39}, {"id":"BR.MA","value":631}, {"id":"BR.MT","value":2678}, {"id":"BR.PA","value":5526}, {"id":"BR.RO","value":1611},{"id":"BR.RR","value":309}, {"id":"BR.TO","value":63}]);
    datasets.push([{"id":"BR.AC","value":254}, {"id":"BR.AM","value":604}, {"id":"BR.AP","value":100}, {"id":"BR.MA","value":1271}, {"id":"BR.MT","value":3258}, {"id":"BR.PA","value":5607}, {"id":"BR.RO","value":1136},{"id":"BR.RR","value":574}, {"id":"BR.TO","value":107}]);
    datasets.push([{"id":"BR.AC","value":167}, {"id":"BR.AM","value":405}, {"id":"BR.AP","value":70}, {"id":"BR.MA","value":828}, {"id":"BR.MT","value":1049}, {"id":"BR.PA","value":4281}, {"id":"BR.RO","value":482},{"id":"BR.RR","value":121}, {"id":"BR.TO","value":61}]);
    datasets.push([{"id":"BR.AC","value":259}, {"id":"BR.AM","value":595}, {"id":"BR.AP","value":53}, {"id":"BR.MA","value":712}, {"id":"BR.MT","value":871}, {"id":"BR.PA","value":3770}, {"id":"BR.RO","value":435},{"id":"BR.RR","value":256}, {"id":"BR.TO","value":49}]);
    datasets.push([{"id":"BR.AC","value":280}, {"id":"BR.AM","value":502}, {"id":"BR.AP","value":66}, {"id":"BR.MA","value":396}, {"id":"BR.MT","value":1120}, {"id":"BR.PA","value":3008}, {"id":"BR.RO","value":865},{"id":"BR.RR","value":141}, {"id":"BR.TO","value":40}]);
    datasets.push([{"id":"BR.AC","value":305}, {"id":"BR.AM","value":523}, {"id":"BR.AP","value":27}, {"id":"BR.MA","value":269}, {"id":"BR.MT","value":757}, {"id":"BR.PA","value":1741}, {"id":"BR.RO","value":773},{"id":"BR.RR","value":124}, {"id":"BR.TO","value":52}]);
    datasets.push([{"id":"BR.AC","value":221}, {"id":"BR.AM","value":583}, {"id":"BR.AP","value":23}, {"id":"BR.MA","value":403}, {"id":"BR.MT","value":1139}, {"id":"BR.PA","value":2346}, {"id":"BR.RO","value":932},{"id":"BR.RR","value":170}, {"id":"BR.TO","value":74}]);
    datasets.push([{"id":"BR.AC","value":309}, {"id":"BR.AM","value":500}, {"id":"BR.AP","value":31}, {"id":"BR.MA","value":257}, {"id":"BR.MT","value":1075}, {"id":"BR.PA","value":1887}, {"id":"BR.RO","value":684},{"id":"BR.RR","value":219}, {"id":"BR.TO","value":50}]);
    datasets.push([{"id":"BR.AC","value":264}, {"id":"BR.AM","value":712}, {"id":"BR.AP","value":25}, {"id":"BR.MA","value":209}, {"id":"BR.MT","value":1601}, {"id":"BR.PA","value":2153}, {"id":"BR.RO","value":1030},{"id":"BR.RR","value":156}, {"id":"BR.TO","value":57}]);
    datasets.push([{"id":"BR.AC","value":372}, {"id":"BR.AM","value":1129}, {"id":"BR.AP","value":17}, {"id":"BR.MA","value":258}, {"id":"BR.MT","value":1489}, {"id":"BR.PA","value":2992}, {"id":"BR.RO","value":1376},{"id":"BR.RR","value":202}, {"id":"BR.TO","value":58}]);
    datasets.push([{"id":"BR.AC","value":257}, {"id":"BR.AM","value":1001}, {"id":"BR.AP","value":24}, {"id":"BR.MA","value":265}, {"id":"BR.MT","value":1561}, {"id":"BR.PA","value":2433}, {"id":"BR.RO","value":1243},{"id":"BR.RR","value":132}, {"id":"BR.TO","value":31}]);
    datasets.push([{"id":"BR.AC","value":444}, {"id":"BR.AM","value":1045}, {"id":"BR.AP","value":24}, {"id":"BR.MA","value":253}, {"id":"BR.MT","value":1490}, {"id":"BR.PA","value":2744}, {"id":"BR.RO","value":1316},{"id":"BR.RR","value":195}, {"id":"BR.TO","value":25}]);
    datasets.push([{"id":"BR.AC","value":682}, {"id":"BR.AM","value":1434}, {"id":"BR.AP","value":32}, {"id":"BR.MA","value":237}, {"id":"BR.MT","value":1702}, {"id":"BR.PA","value":4172}, {"id":"BR.RO","value":1257},{"id":"BR.RR","value":590}, {"id":"BR.TO","value":23}]);
    datasets.push([{"id":"BR.AC","value":706}, {"id":"BR.AM","value":1512}, {"id":"BR.AP","value":24}, {"id":"BR.MA","value":336}, {"id":"BR.MT","value":1779}, {"id":"BR.PA","value":4899}, {"id":"BR.RO","value":1273},{"id":"BR.RR","value":297}, {"id":"BR.TO","value":25}]);

    var slider = document.getElementById("myRange");


    data = anychart.data.set(datasets[0])
    series = map.choropleth(data);
        
    // set geoIdField to 'id', this field contains in geo data meta properties
    series.geoIdField('id');

    // set map color settings
    series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
    series.hovered().fill('#addd8e');

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
});