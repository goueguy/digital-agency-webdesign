$(document).ready(function(){
    
    function itemslider(items,slides_to_show,slides_to_scroll){
        $(items).slick({
            dots: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: slides_to_show,
            slidesToScroll: slides_to_scroll,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: slides_to_show,
            slidesToScroll: slides_to_scroll,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
            }
            
            ]
        });
    }
    
    itemslider(".slider-1",10,10);
    itemslider(".slider-2",3,3);
    itemslider(".slider-3",2,2);
});