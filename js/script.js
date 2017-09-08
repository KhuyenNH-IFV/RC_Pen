$(function() {
    // Paralax
    $('body').parallax("50%", 0.1);
    $('.paralax').parallax("85%", 0.4);
    $('.paralax2').parallax("85%", 0.25);

    // Fade list image
    let offset_1 = $('.section-03').offset().top;
    let offset_2 = $('.section-04').offset().top;
    let offset_3 = $('.section-07').offset().top;
    $(window).scroll(function(event) {
        if ($(this).scrollTop() >= offset_1 - 50) {
            $('.list_fade li').each(function(i) {
                $(this).delay(400 * i).fadeIn(400);
            });
        }
        if ($(this).scrollTop() >= offset_2 - 50) {
            $('.list_fade2 li').each(function(i) {
                $(this).delay(400 * i).fadeIn(400);
            });
        }
        if ($(this).scrollTop() >= offset_3 - 150) {
            $('.fadeTop').addClass('ef-slide');
        }
    });

    // Link scroll
    $('a[href^="#"]').click(function() {
        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 1000);
        return false;
    });

    $('img').hover(function() {
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
    }, function() {
        $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    });


});
