$(function() {
    // Fade list image
    let offset_1 = $('.section-03').offset().top;
    let offset_2 = $('.section-04').offset().top;
    $(window).scroll(function(event) {
        if ($(this).scrollTop() >= offset_1) {
            $('.list_fade li').each(function(i) {
                $(this).delay(400 * i).fadeIn(400);
            });
        }
        if ($(this).scrollTop() >= offset_2) {
            $('.list_fade2 li').each(function(i) {
                $(this).delay(400 * i).fadeIn(400);
            });
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

});
