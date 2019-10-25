$(".not_cross").click(function() {
    $('.not_cross').hide();
    $('.cross').show();

    $('.mobile_menu').addClass("show");
})


$(".cross").click(function() {
    $('.cross').hide();
    $('.not_cross').show();

    $('.mobile_menu').removeClass("show");
})