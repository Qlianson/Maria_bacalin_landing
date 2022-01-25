$(document).ready(function(){

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
  
      });
    $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut();
    });

    // smooth scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href =$(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
});