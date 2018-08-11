$(document).ready(function() {
    // slick
    $(".criptos-menu").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }); 
});