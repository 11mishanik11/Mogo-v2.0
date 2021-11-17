$(function () {

    var header = $('#header'),
        headerH = $('#header').innerHeight(),
        scrollOffset = $(window).scrollTop();

         
    // Fixed Header
    checkScroll(scrollOffset);
    
    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if ( scrollOffset >= headerH ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed'); 
        }
    }


    // Smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var elementId = $(this).data('scroll'),
            elementOffset = $(elementId).offset().top;

        $('#nav').removeClass('active')
        
        $('html, body').animate({
            scrollTop: elementOffset -25
        }, 700);
    });


    // Menu nav toggle
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();

        $('#nav').toggleClass('active')
    });


    // Collapse
    $('[data-collapse]').on('click', function(event) {
       event.preventDefault(); 

        var elementId = $(this).data('collapse');

        $(elementId).slideToggle();

        $(this).parent().toggleClass('active');
    });

    
    // Slider
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});