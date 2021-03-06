// const mapGet = () => {
    var map = null;
    var directionsManager;
    var pushpins = [];
    var infobox = null;
    var ppLayer = null;

    const eye = document.querySelector('.modal__info__eye img')
    const stop = document.querySelector('.modal__info__stop')
    const link = document.getElementById('open-element')

    stop.addEventListener('click', () => {
        link.click()
    })

    function GetMap() {
        map = new Microsoft.Maps.Map('#mapDiv',
            {
                credentials: "YOUR_BING_MAPS_KEY",
                center: new Microsoft.Maps.Location(55.8, 37.4),
                zoom: 10
            });

//Load the directions module.
Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
    //Create an instance of the directions manager.
    directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

    //Specify the element in which the itinerary will be rendered.
    directionsManager.setRenderOptions({
        drivingPolylineOptions: {
            strokeColor: 'green',
            strokeThickness: 4
        },
        waypointPushpinOptions: {
            title: '',
            htmlContent: '<span class="red"></span>',
            width: 34,
            height: 34,
            visible: true,
            icon: '../img/red.svg'
        }
    });

    //Create waypoints to route between.
    var startWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'start', location: new Microsoft.Maps.Location(55.811435, 37.388313), isViapoint: true });
    directionsManager.addWaypoint(startWaypoint);

    var endWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'end', location: new Microsoft.Maps.Location(55.806419, 37.941269), isViapoint: true });
    directionsManager.addWaypoint(endWaypoint);

    //Set the request options that avoid highways and uses kilometers.
    directionsManager.setRequestOptions({
        routeMode: Microsoft.Maps.Directions.RouteMode.driving,
        distanceUnit: Microsoft.Maps.Directions.DistanceUnit.km,
        routeAvoidance: Microsoft.Maps.Directions.RouteAvoidance.avoidLimitedAccessHighway
    });


    //Calculate directions.
    directionsManager.calculateDirections();
});


// ?????????? ???? ??????????, ?? infobox

    function AddInfoboxBtn_Tapped() {
        map.entities.clear();
        //?????????????? ?????????? 
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
        var car = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(55.816435, 37.388313), {
            icon: '../img/car.svg',
            width: 22,
            height: 50
        });
        pinMan.Metadata = {
            htmlContent: '<div class="infobox"><div class="infobox_arrow"></div><img src="../img/copy.svg" onclick="copy()"></img><div class="infobox__row row"><span class="infobox__title">????????????????????: </span><input type="text" class="infobox__text" value="55.785590, 49.124010"></div><div class="infobox__row row"><span class="infobox__title">????????????????: </span><span class="infobox__text">58 ????/??</span></div><div class="infobox__row row"><span class="infobox__title">??????????:</span><span class="infobox__text">????. ??????????????, 6, ??. ????????????, ????????????</span></div><div class="infobox__row row"><span class="infobox__title">???????? ?? ??????????: </span><span class="infobox__text">22/02/2022 10:44:22</span></div></div>',
            visible: true
        };
        car.Metadata = {
            htmlContent: '<div class="infobox"><div class="infobox_arrow"></div><img src="../img/copy.svg" onclick="copy()"></img><div class="infobox__row row"><span class="infobox__title">????????????????????: </span><input type="text" class="infobox__text" value="55.785590, 49.124010"></div><div class="infobox__row row"><span class="infobox__title">????????????????: </span><span class="infobox__text">58 ????/??</span></div><div class="infobox__row row"><span class="infobox__title">??????????:</span><span class="infobox__text">????. ??????????????, 6, ??. ????????????, ????????????</span></div><div class="infobox__row row"><span class="infobox__title">???????? ?? ??????????: </span><span class="infobox__text">22/02/2022 10:44:22</span></div></div>',
            visible: true
        };
        //?????????????????? ?????????????? ???????????????? infobox ?????? ?????????????? ???? ??????????
        Microsoft.Maps.Events.addHandler(pin, 'click', OpenInfobox);
        Microsoft.Maps.Events.addHandler(pinMan, 'click', OpenInfobox);
        Microsoft.Maps.Events.addHandler(car, 'click', OpenInfobox);

        //?????????????????? ?????????? ???? ??????????. 
        map.entities.push(pin);
        map.entities.push(pinMan);
        map.entities.push(car);

        //???????? ???? ???????? (???? ????????????????)
        eye.addEventListener('click', ()=> {
            if (eye.getAttribute('src') == '../img/eye-off.svg') {
                eye.setAttribute('src', '../img/eye.svg')
                // OpenInfobox(pinMan)
            } else {
                eye.setAttribute('src', '../img/eye-off.svg')
                // CloseInfobox(pinMan)
            }
        })
    }

    function OpenInfobox(e) {
        if (e.target && e.target.getLocation && e.target.Metadata) {
            //???????????????? ???????????? ?? ???????????????????????????? pushpin 
            let loc = e.target.getLocation();
        //C???????????? ???????????????? infobox???a 
        let infoboxOptions = { 
            offset: new Microsoft.Maps.Point(-183, -250), 
            htmlContent: e.target.Metadata.htmlContent,
            visible: e.target.Metadata.visible
        };
        //?????????????? infobox 
        let infobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
        //?????????????????? infobox ???? ??????????
        infobox.setMap(map)
        // ??????????????
        Microsoft.Maps.Events.addHandler(map, 'click', () => {
            infobox.setMap(null)
        })
    }
    }
    AddInfoboxBtn_Tapped()

}

// module.exports = mapGet