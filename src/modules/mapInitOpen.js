// const mapGet = () => {
    var map = null;
    var directionsManager;
    var pushpins = [];
    var infobox = null;
    var ppLayer = null;

    const eye = document.querySelector('.modal__info__eye img')
    const play = document.querySelector('.modal__info__play')
    const link = document.getElementById('open-mobile')

    play.addEventListener('click', () => {
        link.click()
    })

    function GetMap() {
        map = new Microsoft.Maps.Map('#mapDiv',
            {
                credentials: "YOUR_BING_MAPS_KEY",
                center: new Microsoft.Maps.Location(55.75, 37.3),
                zoom: 10
            });

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


// метка на карте, с infobox

    function AddInfoboxBtn_Tapped() {
        map.entities.clear();
        //Создаем метку 
        var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(55.880824, 37.438644), {
            icon: '../img/mark-p.svg',
            width: 45,
            height: 38
        });
        var pinMan = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(55.850000, 37.788147), {
            icon: '../img/man-mark.svg',
            width: 45,
            height: 38
        });
        pin.Metadata = {
            htmlContent: '<div class="infobox"><div class="infobox_arrow"></div><img src="../img/copy.svg" onclick="copy()"></img><div class="infobox__row row"><span class="infobox__title">Координаты: </span><input type="text" class="infobox__text" value="55.785590, 49.124010"></div><div class="infobox__row row"><span class="infobox__title">Скорость: </span><span class="infobox__text">58 км/ч</span></div><div class="infobox__row row"><span class="infobox__title">Адрес:</span><span class="infobox__text">ул. Четаева, 6, г. Казань, Россия</span></div><div class="infobox__row row"><span class="infobox__title">Дата и время: </span><span class="infobox__text">22/02/2022 10:44:22</span></div></div>',
            visible: true
        };
        pinMan.Metadata = {
            htmlContent: '<div class="infobox"><div class="infobox_arrow"></div><img src="../img/copy.svg" onclick="copy()"></img><div class="infobox__row row"><span class="infobox__title">Координаты: </span><input type="text" class="infobox__text" value="55.785590, 49.124010"></div><div class="infobox__row row"><span class="infobox__title">Скорость: </span><span class="infobox__text">58 км/ч</span></div><div class="infobox__row row"><span class="infobox__title">Адрес:</span><span class="infobox__text">ул. Четаева, 6, г. Казань, Россия</span></div><div class="infobox__row row"><span class="infobox__title">Дата и время: </span><span class="infobox__text">22/02/2022 10:44:22</span></div></div>',
            visible: true
        };
        //Добавляем событие открытия infobox при нажатии на метку
        Microsoft.Maps.Events.addHandler(pin, 'click', OpenInfobox);
        // Microsoft.Maps.Events.addHandler(pin, 'click', copy);
        Microsoft.Maps.Events.addHandler(pinMan, 'click', OpenInfobox);
        // Microsoft.Maps.Events.addHandler(pinMan, 'click', copy);
        //Добавляем метку на карту. 
        map.entities.push(pin);
        map.entities.push(pinMan);
        //клик на глаз (не работает)
        eye.addEventListener('click', ()=> {
            if (eye.getAttribute('src') == '../img/eye-off.svg') {
                eye.setAttribute('src', '../img/eye.svg')
                // eye.addEventListener('click', OpenInfobox(pinMan))
            } else {
                eye.setAttribute('src', '../img/eye-off.svg')
                // eye.addEventListener('click', CloseInfobox(pinMan))
            }
        })
    }
    function OpenInfobox(e) {
        if (e.target && e.target.getLocation && e.target.Metadata) {
            //Собираем данные о местоположении pushpin 
            let loc = e.target.getLocation();
        //Cоздаем свойства infobox’a 
        let infoboxOptions = { 
            offset: new Microsoft.Maps.Point(-183, -250), 
            htmlContent: e.target.Metadata.htmlContent ,
            visible: e.target.Metadata.visible
        };
        //Создаем infobox 
        let infobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
        //Добавляем infobox на карту
        infobox.setMap(map)
        // Удаляем
        Microsoft.Maps.Events.addHandler(map, 'click', () => {
            infobox.setMap(null)
        })
    }
    }
    AddInfoboxBtn_Tapped()

}

// module.exports = mapGet