
// ready handler
$(document).on('ready', function() {
    
    
    // TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:

    var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
    });

    var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
    });

    var mapLayers = {
        "Satellite": satLayer,
        "Map View": drawLayer,
        "Open Street Maps": osm
    }

    var map = L.map('map-container').setView([48.6542, -122.9383], 10 );

    L.control.layers(mapLayers).addTo(map);
    satLayer.addTo(map);

// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. 

    var marker = L.marker([48.6542, -122.9383]).addTo(map);
    marker.bindPopup("<b>Orcas Island</b><br>Home of Camp Orkiss!");
    
    var marker = L.marker([48.6967, -122.9042]).addTo(map);
    marker.bindPopup("<b>Eastsound, WA</b>");
    
    var marker = L.marker([48.6776, -122.8312]).addTo(map);
    marker.bindPopup("<b>Mt. Constitution</b><br>Moran State Park");
    
     // Bootstrap Tooltips
    $('label span.glyphicon').tooltip();
    
});// End .on ready function