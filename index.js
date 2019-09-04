/* PRELOADER */
$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
})

/* CREDITS */
/* https://stackoverflow.com */
/* https://codepen.com */
