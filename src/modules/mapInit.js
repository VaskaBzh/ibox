// const mapGet = () => {
    var map = null;
    var pushpins = [];
    var infobox = null;
    var ppLayer = null;

    function GetMap() {
        map = new Microsoft.Maps.Map(document.getElementById("mapDiv"),
            {
                credentials: "YOUR_BING_MAPS_KEY",
                center: new Microsoft.Maps.Location(55.75, 37.3),
                mapTypeId: Microsoft.Maps.MapTypeId.auto,
                zoom: 10
            });
    }

// module.exports = mapGet