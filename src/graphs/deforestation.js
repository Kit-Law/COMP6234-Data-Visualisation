anychart.onDocumentReady(function() {
    // create map
    var map = anychart.map();
  
    // create data set
    const datasets = [];
    datasets.push([{"id":"BR.AC","value":620}, {"id":"BR.AM","value":1510}, {"id":"BR.AP","value":60}, {"id":"BR.MA","value":2450}, {"id":"BR.MT","value":5140}, {"id":"BR.PA","value":6990}, {"id":"BR.RO","value":2340},{"id":"BR.RR","value":290}, {"id":"BR.TO","value":1650}]);
    datasets.push([{"id":"BR.AC","value":1160}, {"id":"BR.AM","value":2690}, {"id":"BR.AP","value":190}, {"id":"BR.MA","value":3870}, {"id":"BR.MT","value":11100}, {"id":"BR.PA","value":12740}, {"id":"BR.RO","value":3770},{"id":"BR.RR","value":920}, {"id":"BR.TO","value":2380}]);
    datasets.push([{"id":"BR.AC","value":1710}, {"id":"BR.AM","value":3210}, {"id":"BR.AP","value":440}, {"id":"BR.MA","value":4970}, {"id":"BR.MT","value":15120}, {"id":"BR.PA","value":17630}, {"id":"BR.RO","value":5440},{"id":"BR.RR","value":1070}, {"id":"BR.TO","value":2960}]);
    datasets.push([{"id":"BR.AC","value":2090}, {"id":"BR.AM","value":4190}, {"id":"BR.AP","value":850}, {"id":"BR.MA","value":5640}, {"id":"BR.MT","value":17960}, {"id":"BR.PA","value":21410}, {"id":"BR.RO","value":6550},{"id":"BR.RR","value":1490}, {"id":"BR.TO","value":3400}]);
    datasets.push([{"id":"BR.AC","value":2490}, {"id":"BR.AM","value":4989}, {"id":"BR.AP","value":886}, {"id":"BR.MA","value":6775}, {"id":"BR.MT","value":22634}, {"id":"BR.PA","value":25197}, {"id":"BR.RO","value":8815},{"id":"BR.RR","value":1771}, {"id":"BR.TO","value":3809}]);
    datasets.push([{"id":"BR.AC","value":2972}, {"id":"BR.AM","value":5359}, {"id":"BR.AP","value":886}, {"id":"BR.MA","value":7147}, {"id":"BR.MT","value":28854}, {"id":"BR.PA","value":29481}, {"id":"BR.RO","value":11410},{"id":"BR.RR","value":2011}, {"id":"BR.TO","value":4142}]);
    datasets.push([{"id":"BR.AC","value":3454}, {"id":"BR.AM","value":5729}, {"id":"BR.AP","value":886}, {"id":"BR.MA","value":7519}, {"id":"BR.MT","value":35074}, {"id":"BR.PA","value":33765}, {"id":"BR.RO","value":14005},{"id":"BR.RR","value":2251}, {"id":"BR.TO","value":4475}]);
    datasets.push([{"id":"BR.AC","value":4662}, {"id":"BR.AM","value":7843}, {"id":"BR.AP","value":895}, {"id":"BR.MA","value":9264}, {"id":"BR.MT","value":45465}, {"id":"BR.PA","value":41610}, {"id":"BR.RO","value":18735},{"id":"BR.RR","value":2471}, {"id":"BR.TO","value":5272}]);
    datasets.push([{"id":"BR.AC","value":5095}, {"id":"BR.AM","value":8866}, {"id":"BR.AP","value":895}, {"id":"BR.MA","value":10325}, {"id":"BR.MT","value":52008}, {"id":"BR.PA","value":47745}, {"id":"BR.RO","value":21167},{"id":"BR.RR","value":2685}, {"id":"BR.TO","value":5592}]);
    datasets.push([{"id":"BR.AC","value":5453}, {"id":"BR.AM","value":9455}, {"id":"BR.AP","value":913}, {"id":"BR.MA","value":10734}, {"id":"BR.MT","value":57279}, {"id":"BR.PA","value":51884}, {"id":"BR.RO","value":23153},{"id":"BR.RR","value":2869}, {"id":"BR.TO","value":5865}]);
    datasets.push([{"id":"BR.AC","value":5989}, {"id":"BR.AM","value":10125}, {"id":"BR.AP","value":943}, {"id":"BR.MA","value":11746}, {"id":"BR.MT","value":63745}, {"id":"BR.PA","value":57713}, {"id":"BR.RO","value":25194},{"id":"BR.RR","value":3092}, {"id":"BR.TO","value":6441}]);
    datasets.push([{"id":"BR.AC","value":6430}, {"id":"BR.AM","value":10845}, {"id":"BR.AP","value":943}, {"id":"BR.MA","value":12976}, {"id":"BR.MT","value":70708}, {"id":"BR.PA","value":62824}, {"id":"BR.RO","value":27552},{"id":"BR.RR","value":3312}, {"id":"BR.TO","value":6657}]);
    datasets.push([{"id":"BR.AC","value":6977}, {"id":"BR.AM","value":11457}, {"id":"BR.AP","value":943}, {"id":"BR.MA","value":14041}, {"id":"BR.MT","value":77077}, {"id":"BR.PA","value":69495}, {"id":"BR.RO","value":30017},{"id":"BR.RR","value":3565}, {"id":"BR.TO","value":6901}]);
    datasets.push([{"id":"BR.AC","value":7396}, {"id":"BR.AM","value":12091}, {"id":"BR.AP","value":950}, {"id":"BR.MA","value":14999}, {"id":"BR.MT","value":84780}, {"id":"BR.PA","value":74732}, {"id":"BR.RO","value":32690},{"id":"BR.RR","value":3910}, {"id":"BR.TO","value":7090}]);
    datasets.push([{"id":"BR.AC","value":8279}, {"id":"BR.AM","value":12976}, {"id":"BR.AP","value":950}, {"id":"BR.MA","value":16084}, {"id":"BR.MT","value":92672}, {"id":"BR.PA","value":82242}, {"id":"BR.RO","value":35789},{"id":"BR.RR","value":3994}, {"id":"BR.TO","value":7302}]);
    datasets.push([{"id":"BR.AC","value":9357}, {"id":"BR.AM","value":14534}, {"id":"BR.AP","value":975}, {"id":"BR.MA","value":17077}, {"id":"BR.MT","value":103077}, {"id":"BR.PA","value":89387}, {"id":"BR.RO","value":39386},{"id":"BR.RR","value":4433}, {"id":"BR.TO","value":7458}]);
    datasets.push([{"id":"BR.AC","value":10085}, {"id":"BR.AM","value":15766}, {"id":"BR.AP","value":1021}, {"id":"BR.MA","value":17832}, {"id":"BR.MT","value":114891}, {"id":"BR.PA","value":98257}, {"id":"BR.RO","value":43244},{"id":"BR.RR","value":4744}, {"id":"BR.TO","value":7616}]);
    datasets.push([{"id":"BR.AC","value":10677}, {"id":"BR.AM","value":16541}, {"id":"BR.AP","value":1054}, {"id":"BR.MA","value":18754}, {"id":"BR.MT","value":122036}, {"id":"BR.PA","value":104156}, {"id":"BR.RO","value":46488},{"id":"BR.RR","value":4877}, {"id":"BR.TO","value":7887}]);
    datasets.push([{"id":"BR.AC","value":11075}, {"id":"BR.AM","value":17329}, {"id":"BR.AP","value":1084}, {"id":"BR.MA","value":19428}, {"id":"BR.MT","value":126369}, {"id":"BR.PA","value":109815}, {"id":"BR.RO","value":48537},{"id":"BR.RR","value":5108}, {"id":"BR.TO","value":8011}]);
    datasets.push([{"id":"BR.AC","value":11259}, {"id":"BR.AM","value":17939}, {"id":"BR.AP","value":1123}, {"id":"BR.MA","value":20059}, {"id":"BR.MT","value":129047}, {"id":"BR.PA","value":115341}, {"id":"BR.RO","value":50148},{"id":"BR.RR","value":5417}, {"id":"BR.TO","value":8074}]);
    datasets.push([{"id":"BR.AC","value":11513}, {"id":"BR.AM","value":18543}, {"id":"BR.AP","value":1223}, {"id":"BR.MA","value":21330}, {"id":"BR.MT","value":132305}, {"id":"BR.PA","value":120948}, {"id":"BR.RO","value":51284},{"id":"BR.RR","value":5991}, {"id":"BR.TO","value":8181}]);
    datasets.push([{"id":"BR.AC","value":11680}, {"id":"BR.AM","value":18948}, {"id":"BR.AP","value":1293}, {"id":"BR.MA","value":22158}, {"id":"BR.MT","value":133354}, {"id":"BR.PA","value":125229}, {"id":"BR.RO","value":51766},{"id":"BR.RR","value":6112}, {"id":"BR.TO","value":8242}]);
    datasets.push([{"id":"BR.AC","value":11939}, {"id":"BR.AM","value":19543}, {"id":"BR.AP","value":1346}, {"id":"BR.MA","value":22870}, {"id":"BR.MT","value":134225}, {"id":"BR.PA","value":128999}, {"id":"BR.RO","value":52201},{"id":"BR.RR","value":6368}, {"id":"BR.TO","value":8291}]);
    datasets.push([{"id":"BR.AC","value":12219}, {"id":"BR.AM","value":20045}, {"id":"BR.AP","value":1412}, {"id":"BR.MA","value":23266}, {"id":"BR.MT","value":135345}, {"id":"BR.PA","value":132007}, {"id":"BR.RO","value":53066},{"id":"BR.RR","value":6509}, {"id":"BR.TO","value":8331}]);
    datasets.push([{"id":"BR.AC","value":12524}, {"id":"BR.AM","value":20568}, {"id":"BR.AP","value":1439}, {"id":"BR.MA","value":23535}, {"id":"BR.MT","value":136102}, {"id":"BR.PA","value":133748}, {"id":"BR.RO","value":53839},{"id":"BR.RR","value":6633}, {"id":"BR.TO","value":8383}]);
    datasets.push([{"id":"BR.AC","value":12745}, {"id":"BR.AM","value":21151}, {"id":"BR.AP","value":1462}, {"id":"BR.MA","value":23938}, {"id":"BR.MT","value":137241}, {"id":"BR.PA","value":136094}, {"id":"BR.RO","value":54771},{"id":"BR.RR","value":6803}, {"id":"BR.TO","value":8457}]);
    datasets.push([{"id":"BR.AC","value":13054}, {"id":"BR.AM","value":21651}, {"id":"BR.AP","value":1493}, {"id":"BR.MA","value":24195}, {"id":"BR.MT","value":138316}, {"id":"BR.PA","value":137981}, {"id":"BR.RO","value":55455},{"id":"BR.RR","value":7022}, {"id":"BR.TO","value":8507}]);
    datasets.push([{"id":"BR.AC","value":13318}, {"id":"BR.AM","value":22363}, {"id":"BR.AP","value":1518}, {"id":"BR.MA","value":24404}, {"id":"BR.MT","value":139917}, {"id":"BR.PA","value":140134}, {"id":"BR.RO","value":56485},{"id":"BR.RR","value":7178}, {"id":"BR.TO","value":8564}]);
    datasets.push([{"id":"BR.AC","value":13690}, {"id":"BR.AM","value":23492}, {"id":"BR.AP","value":1535}, {"id":"BR.MA","value":24662}, {"id":"BR.MT","value":141406}, {"id":"BR.PA","value":143126}, {"id":"BR.RO","value":57861},{"id":"BR.RR","value":7380}, {"id":"BR.TO","value":8622}]);
    datasets.push([{"id":"BR.AC","value":13947}, {"id":"BR.AM","value":24493}, {"id":"BR.AP","value":1559}, {"id":"BR.MA","value":24927}, {"id":"BR.MT","value":142967}, {"id":"BR.PA","value":145559}, {"id":"BR.RO","value":59104},{"id":"BR.RR","value":7512}, {"id":"BR.TO","value":8653}]);
    datasets.push([{"id":"BR.AC","value":14391}, {"id":"BR.AM","value":25538}, {"id":"BR.AP","value":1583}, {"id":"BR.MA","value":25180}, {"id":"BR.MT","value":144457}, {"id":"BR.PA","value":148303}, {"id":"BR.RO","value":60420},{"id":"BR.RR","value":7707}, {"id":"BR.TO","value":8678}]);
    datasets.push([{"id":"BR.AC","value":15073}, {"id":"BR.AM","value":26972}, {"id":"BR.AP","value":1615}, {"id":"BR.MA","value":25417}, {"id":"BR.MT","value":146159}, {"id":"BR.PA","value":152475}, {"id":"BR.RO","value":61677},{"id":"BR.RR","value":8297}, {"id":"BR.TO","value":8701}]);
    datasets.push([{"id":"BR.AC","value":15779}, {"id":"BR.AM","value":28484}, {"id":"BR.AP","value":1639}, {"id":"BR.MA","value":25753}, {"id":"BR.MT","value":147938}, {"id":"BR.PA","value":157374}, {"id":"BR.RO","value":62950},{"id":"BR.RR","value":8594}, {"id":"BR.TO","value":8726}]);

    var slider = document.getElementById("myRange");


    data = anychart.data.set(datasets[0])
    series = map.choropleth(data);
        
    // set geoIdField to 'id', this field contains in geo data meta properties
    series.geoIdField('id');

    // set map color settings
    series.colorScale(anychart.scales.linearColor('#4A854A', '#800400').minimum(0).maximum(157374));
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