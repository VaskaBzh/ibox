// const mapGet = () => {
    var map = null;
    var directionsManager;
    var pushpins = [];
    var infobox = null;
    var ppLayer = null;

    function GetMap() {
        map = new Microsoft.Maps.Map('#mapDiv',
            {
                credentials: "YOUR_BING_MAPS_KEY",
                center: new Microsoft.Maps.Location(55.75, 37.3),
                zoom: 10
            });
            
// метка на карте (не работает htmlContent)

    //     function AddPushpinBtn_A() {
    //         map.entities.clear();
    //         let center = new Microsoft.Maps.Location(55.821647, 37.324455);
    //         // Создаем Pushpin            
    //         let pin = new Microsoft.Maps.Pushpin(center, {
    //             icon: '../img/mark.svg',
    //             width: 45,
    //             height: 38
    //             // htmlContent: '<span style="color:red;font-weight:bold;">Привет, Habr!</span>'
    //         });
    //         map.entities.push(pin)
    // }
    // AddPushpinBtn_A()
//Load the directions module.
Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
    //Create an instance of the directions manager.
    directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

    //Create waypoints to route between.
    var startWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'start', location: new Microsoft.Maps.Location(55.811435, 37.388313) });
    directionsManager.addWaypoint(startWaypoint);

    var endWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'end', location: new Microsoft.Maps.Location(55.806419, 37.941269) });
    directionsManager.addWaypoint(endWaypoint);

    //Set the request options that avoid highways and uses kilometers.
    directionsManager.setRequestOptions({
        routeMode: Microsoft.Maps.Directions.RouteMode.transit,
        distanceUnit: Microsoft.Maps.Directions.DistanceUnit.km,
        routeAvoidance: Microsoft.Maps.Directions.RouteAvoidance.avoidLimitedAccessHighway
    });

    //Specify the element in which the itinerary will be rendered.
    directionsManager.setRenderOptions({
        drivingPolylineOptions: {
            strokeColor: '#FF4365',
            strokeThickness: 4
        },
        waypointPushpinOptions: {
            title: ''
        }
    });

    //Calculate directions.
    directionsManager.calculateDirections();
});
}


// метка на карте, с infobox

    // function AddInfoboxBtn_Tapped() {
    //     map.entities.clear();
    //     var center = map.getCenter();
    //     //Создаем метку 
    //     var pin = new Microsoft.Maps.Pushpin(center, {
    //         icon: '../img/mark.svg',
    //         width: 45,
    //         height: 38
    //     });
    //     pin.Metadata = {
    //         title: 'Привет',
    //         description: 'Я нахожусь здесь'
    //     };
    //     //Добавляем событие открытия infobox при нажатии на метку
    //     Microsoft.Maps.Events.addHandler(pin, 'click', OpenInfobox);
    //     //Добавляем метку на карту. 
    //     map.entities.push(pin);
    // }
    // function OpenInfobox(e) {
    //     if (e.target && e.target.getLocation && e.target.Metadata) {
    //         //Собираем данные о местоположении pushpin 
    //         var loc = e.target.getLocation();
    //     //Cоздаем свойства infobox’a 
    //     var infoboxOptions = { 
    //         offset: new Microsoft.Maps.Point(0, 45), 
    //         title: e.target.Metadata.title, 
    //         description: e.target.Metadata.description, 
    //     };
    //     //Создаем infobox 
    //     var infobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
    //     //Добавляем infobox на карту
    //     map.entities.push(infobox);
    // }
    // }
    // AddInfoboxBtn_Tapped()
    
// }

// Базовая инициализация карты, с помощью Microsoft documentation

    // let map = null;
    // let pushpins = [];
    // let infobox = null;
    // let ppLayer = null;

    // function GetMap() {
    // var options = {
    //     credentials: "AmUck2_xxxx_jSCm",
    //     center: new Microsoft.Maps.Location(55.7521203, 37.6176651),
    //     mapTypeId: Microsoft.Maps.MapTypeId.auto,
    //     zoom: 11, enableClickableLogo: false, showCopyright: false
    // };
    
    // var mapDiv = document.getElementById("mapDiv");
    // map = new Microsoft.Maps.Map(mapDiv, options);
    // infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0),
    // { visible: false, offset: new window.Microsoft.Maps.Point(0,0) });
    // infobox.setMap(map);

    // ppLayer = new Microsoft.Maps.Layer();
    // var cpp = new Microsoft.Maps.Pushpin(map.getCenter(), {
    //     icon: '../img/mark.svg',
    //     htmlContent: '<span style="color:red;font-weight:bold;width:200px;height:200px;">Привет, Habr!</span>'
    // });
    // ppLayer.add(cpp);
    // map.layers.insert(ppLayer);
// }

// module.exports = mapGet