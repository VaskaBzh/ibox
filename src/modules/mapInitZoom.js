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
                center: new Microsoft.Maps.Location(55.793622, 37.860465),
                zoom: 11
            });

// метка на карте, с infobox

    function AddInfoboxBtn_Tapped() {
        map.entities.clear();
        //Создаем метку 
        var car = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(55.794201, 37.933249), {
            icon: '../img/car-zoom1.svg',
            width: 22,
            height: 50
        });
        car.Metadata = {
            htmlContent: '<div class="infobox"><div class="infobox_arrow"></div><img src="../img/copy.svg"></img><div class="infobox__row row"><span class="infobox__title">Координаты: </span><span class="infobox__text">55.785590, 49.124010</span></div><div class="infobox__row row"><span class="infobox__title">Скорость: </span><span class="infobox__text">58 км/ч</span></div><div class="infobox__row row"><span class="infobox__title">Адрес:</span><span class="infobox__text">ул. Четаева, 6, г. Казань, Россия</span></div><div class="infobox__row row"><span class="infobox__title">Дата и время: </span><span class="infobox__text">22/02/2022 10:44:22</span></div></div>'
        };
        //Добавляем событие открытия infobox при нажатии на метку
        Microsoft.Maps.Events.addHandler(car, 'click', OpenInfobox);
        
        Microsoft.Maps.Events.addHandler(map, 'click', CloseInfobox(car));
        //Добавляем метку на карту. 
        map.entities.push(car);
        //клик на глаз (не работает)
    }
    
    // // не работает удаление infobox через display none & .remove(infobox)
    // const infoboxes = document.querySelectorAll('.infobox')
    // function deletInfobox() {
    //     infoboxes.forEach((index) => {
    //         infoboxes[index].style.display = "none"
    //     })
    // }

    function OpenInfobox(e) {
        if (e.target && e.target.getLocation && e.target.Metadata) {
            //Собираем данные о местоположении pushpin 
            let loc = e.target.getLocation();
        //Cоздаем свойства infobox’a 
        let infoboxOptions = { 
            offset: new Microsoft.Maps.Point(-183, -250), 
            htmlContent: e.target.Metadata.htmlContent 
        };
        //Создаем infobox 
        let infobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
        //Добавляем infobox на карту
        map.entities.push(infobox);
        // infoboxes.forEach((index) => {
        //     infoboxes[index].style.display = "flex"
        // })
        // infoboxes.forEach((index) => {
        //     infoboxes[index].addEventListener('click', deletInfobox);
        // })
    }
    }
    function CloseInfobox(e) {
        if (e.target && e.target.getLocation && e.target.Metadata) {
            //Собираем данные о местоположении pushpin 
            let loc = e.target.getLocation();
        //Cоздаем свойства infobox’a 
        let infoboxOptions = { 
            offset: new Microsoft.Maps.Point(-183, -250), 
            htmlContent: e.target.Metadata.htmlContent 
        };
        //Создаем infobox 
        let infobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
        //Добавляем infobox на карту
        map.entities.remove(infobox);
    }
    }
    AddInfoboxBtn_Tapped()

}

// module.exports = mapGet