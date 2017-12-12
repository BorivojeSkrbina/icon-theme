$(document).ready(function () {

    $('.navbar-nav a, .landing .container > a').click(function () {
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



    //CIRCLE PROJECT
    $(window).scroll(function () {
        percent();
    });
    percent();


    function percent() {
        var vh = $(window).height();
        var scroll = $(window).scrollTop();

        $('.cont').each(function () {
            var position = $(this).offset().top;

            if (position < vh + scroll - 100) {
                var val = parseInt($(this).attr('data-pct'));
                var $circle = $(this).find('.svg .bar');


                var r = $circle.attr('r');
                var c = Math.PI * (r * 2);



                var pct = ((100 - val) / 100) * c;

                $circle.css({strokeDashoffset: pct});
            }



            //$('#cont').attr('data-pct',val);

        });
    }

    if ($('.owl-carousel').length > 0) {
        $('.team').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            navText: ['<', '>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
        

    }


});