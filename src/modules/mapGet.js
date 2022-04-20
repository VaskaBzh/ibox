// const mapGet = () => {
    let map = null;
    let pushpins = [];
    let infobox = null;
    let ppLayer = null;
    let drawingManager = null;
    let drawnShapes = null;
    function GetMap() {
    var options = {
        credentials: "AmUck2_xxxx_jSCm",
        center: new Microsoft.Maps.Location(45.50, -122.50),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 10, enableClickableLogo: false, showCopyright: false
    };
    var mapDiv = document.getElementById("mapDiv");
    map = new window.Microsoft.Maps.Map(mapDiv, options);
    infobox = new window.Microsoft.Maps.Infobox(new window.Microsoft.Maps.Location(0, 0),
    { visible: false, offset: new window.Microsoft.Maps.Point(0,0) });
    infobox.setMap(map);
    ppLayer = new window.Microsoft.Maps.Layer();
    var cpp= new window.Microsoft.Maps.Pushpin(map.getCenter(), null);
    ppLayer.add(cpp);
    map.layers.insert(ppLayer);
    window.Microsoft.Maps.loadModule('Microsoft.Maps.DrawingTools', function() {
        var tools = new window.Microsoft.Maps.DrawingTools(map);
        tools.showDrawingManager(AddDrawControlEvents);
    });
    }
    function AddDrawControlEvents(manager)
    {
    window.Microsoft.Maps.Events.addHandler(manager, 'drawingStarted',
        function(e) { WriteLn('Drawing has started'); });
    window.Microsoft.Maps.Events.addHandler(manager, 'drawingEnded',
        function(e) { WriteLn('Drawing has ended \n'); });
    drawingManager = manager;
    }
    function WriteLn(txt)
    {
    var existing = msgArea.value;
    msgArea.value = existing + txt + "\n";
    }
// }

// module.exports = mapGet