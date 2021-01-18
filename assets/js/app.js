$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) { /* создаем функцию при клике по data атрибуту(элементы навигации в шапке) */
        event.preventDefault(); /* отмена стандартного поведения ссылки */


        var $this = $(this), /* кэшируем текущее значение в переменную */
            blockId = $this.data('scroll'), /* получаем текущее значение data атрибута при клике */
			blockOffset = $(blockId).offset().top; /* получаем координаты текущего data атрибута */
			
        $("#nav a").removeClass("active"); /* убераем активное состояние у всех элементов шапки сайта */
        $this.addClass("active"); /* оставляем активное состояние текущего элемента шапки сайта */

        $("html, body").animate({ /* задаем команду скрола на нужный раздел шапки сайта при клике */
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */ /* вызываем функцию по клику кнопки меню шапки сайта на мобильной версии */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault(); /* отмена стандартного поведения кнопки */

        $(this).toggleClass("active"); /* добавляем/убераем кнопку крестик/гамбургер */
        $("#nav").toggleClass("active"); /* добавляем/убераем класс active */
    });



    /* Collapse */ /* вызываем функцию при клике аккордиона в секции we do */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();/* отмена стандартного поведения кнопки */

        var $this = $(this),
            blockId = $this.data('collapse'); /* получаем текущий раздел аккордиона */

        $this.toggleClass("active"); /* раскрываем/скрываем содержимое текущего раздела аккордиона */
    });


    /* Slider */ /* подключаем слайдеры  */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
