$(document).ready(function () { 
    let currentFloor = 2;
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let floorPath = $('.home-image path');

    floorPath.on('mouseover', function() { // наводим на этаж - меняется счетчик
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor); 

        floorPath.removeClass('current-floor'); // чтобы не подсвечивался этаж, заданный с помощью стрелок
    });

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
});

