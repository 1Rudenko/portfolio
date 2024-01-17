

$(function () {

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 1) {
            $('.menu').addClass('fixed');
            $('.header__content').addClass('fixed');
        }
        else {
            $('.menu').removeClass('fixed');
            $('.header__content').removeClass('fixed');
        }
    });

    $(".menu, .footer, .header__content").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.burger-button').click(function () {
        $('.menu__list').toggleClass('active');
        $('.burger-button').toggleClass('active');
    });


    var mixer = mixitup('.portfolio__content');
})
