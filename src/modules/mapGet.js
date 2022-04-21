// const mapGet = () => {
    var map = null;
    var pushpins = [];
    var infobox = null;
    var ppLayer = null;

    function GetMap() {
        map = new Microsoft.Maps.Map(document.getElementById("mapDiv"),
            {
                credentials: "YOUR_BING_MAPS_KEY",
                center: new Microsoft.Maps.Location(55.7521203, 37.6176651),
                mapTypeId: Microsoft.Maps.MapTypeId.auto,
                zoom: 11
            });
    //     function AddPushpinBtn_Tapped() {
    //         map.entities.clear();
    //         var center = map.getCenter();
    //         // Создаем Pushpin            
    //         var pin = new Microsoft.Maps.Pushpin(center, {
    //             icon: '../img/mark.svg',
    //             width: 45,
    //             height: 38
    //             // htmlContent: '<span style="color:red;font-weight:bold;">Привет, Habr!</span>'
    //         });
    //         map.entities.push(pin)
    // }
    // AddPushpinBtn_Tapped()

    function AddInfoboxBtn_Tapped() {
        map.entities.clear();
        var center = map.getCenter();
        //Создаем метку 
        var pin = new Microsoft.Maps.Pushpin(center);
        pin.Metadata = {
            title: 'Привет, хабр!',
            description: 'Я нахожусь здесь.'
        };
        //Добавляем событие открытия infobox при нажатии на метку
        Microsoft.Maps.Events.addHandler(pin, 'click', OpenInfobox);
        //Добавляем метку на карту. 
        map.entities.push(pin);
    }
    function OpenInfobox(e) {
        if (e.target && e.target.getLocation && e.target.Metadata) {
            //Собираем данные о местоположении pushpin 
            var loc = e.target.getLocation();
        //Cоздаем свойства infobox’a 
        var infoboxOptions = { 
            offset: new Microsoft.Maps.Point(0, 15), 
            title: e.target.Metadata.title, 
            description: e.target.Metadata.description, 
        };
        //Создаем infobox 
        var infobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
        //Добавляем infobox на карту
        map.entities.push(infobox);
    }
    }
    AddInfoboxBtn_Tapped()
}

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

    // function AddPushpinBtn_Tapped() {
    //     map.entities.clear();
    //     var center = map.getCenter();
    //     // Создаем Pushpin            
    //     var pin = new Microsoft.Maps.Pushpin(center, {
    //         icon: '../img/mark.svg',
    //         width: 45,
    //         height: 38,
    //         text: '1'
    //     });
    // }}
// }

// module.exports = mapGet