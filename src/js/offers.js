$(document).ready(function() {
    // menu cryptos
    $(".cripto").click(function() {
        $(".cripto").removeClass("cripto-active");
        $(this).addClass("cripto-active");
    });
    // offers
    $("#ofertas").click(function() {
        $('html, body').animate({
            scrollTop: $("#offers").offset().top
        }, 1000);
    });
});