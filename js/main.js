$(document).ready(function(){
    
    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    
    
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
        } else {
            $('header').removeClass('py-2');
        }
    });
    
});