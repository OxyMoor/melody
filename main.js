$(document).ready(function () { 
    let currentFloor = 2;
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let floorPath = $('.home-image path');
    let modal = $('.modal');
    let modalCloseButton = $('.modal-close-button');
    let viewFlatsButton = $('.view-flats');
    let flatPath = $('.flats path');
    let flatLinks = $('.flat-link');

    floorPath.on('mouseover', function() { // наводим на этаж - меняется счетчик
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor); 

        floorPath.removeClass('current-floor'); // чтобы не подсвечивался этаж, заданный с помощью стрелок
    });

    floorPath.on('click', toggleModal); // открыть модальное окно по картинке
    viewFlatsButton.on('click', toggleModal); // открыть модальное окно кнопкой

    modalCloseButton.on('click', toggleModal); // закрыть модальное окно

    counterUp.on('click', function() { // кнопка вверх 
        if (currentFloor < 18) {
            // 1) увеличение счетчика
            currentFloor++;
            // форматируем номер этажа, чтобы он был в формате 0Х, а не просто Х
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    
            $('.counter').text(usCurrentFloor);

            // 2) подсветка этажа
            floorPath.removeClass('current-floor'); // убираем подсветку остальных этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        } 
    });

    // подсветка квартир на картинке при наведении на ссылку
    flatLinks.on('mouseover', function() {
        flatPath.removeClass('current-flat'); 

        let currentFlat = $(this).attr('data-flat');
        $(`[data-flat=${currentFlat}]`).toggleClass('current-flat');
    });

    flatLinks.on('mouseleave', function() {
        flatPath.removeClass('current-flat'); 
    });

    // подсветка ссылки на квартиру при наведении на картинку
    flatPath.on('mouseover', function() {
        flatLinks.removeClass('current-flat-link'); 

        let currentFlatLink = $(this).attr('data-flat');
        $(`[data-flat=${currentFlatLink}]`).toggleClass('current-flat-link');
    });

    flatPath.on('mouseleave', function() {
        flatLinks.removeClass('current-flat-link'); 
    });

    counterDown.on('click', function() { // кнопка вниз 
        if (currentFloor > 2) {
            // 1) уменьшение счетчика
            currentFloor--;
            // форматируем номер этажа, чтобы он был в формате 0Х, а не просто Х
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    
            $('.counter').text(usCurrentFloor);

            // 2) подсветка этажа
            floorPath.removeClass('current-floor'); // убираем подсветку остальных этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        } 
    });

    function toggleModal() { // закрыть/открыть модальное окно
        modal.toggleClass('is-open');
    }
});
