$(function() {
	$('.field, textarea').focus(function() {
        if(this.title==this.value) {
            this.value = '';
        }
    }).blur(function(){
        if(this.value=='') {
            this.value = this.title;
        }
    });

    $("#slider").jcarousel({
        scroll: 1,
        auto: 3,
        wrap: 'both',
        vertical: true,
        initCallback: mycarousel_initCallback,        
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemVisibleInCallback: {
            onAfterAnimation: function(c, o, i, s) {
                $('#slider-nav a span.active').css('display', 'none');
                $('#slider-nav a span.fade').css('display', 'block');
                $('#slider-nav a:eq('+ (i-1) +')').find('span.fade').css('display' , 'none');
                $('#slider-nav a:eq('+ (i-1) +')').find('span.active').css('display', 'block'); 
            }
        }       
    });   

    $(".products-slider").jcarousel({
        scroll: 1,
        auto: 3,
        wrap: 'both',
        initCallback : function() {
            if ($.browser.msie && $.browser.version == 6) {
                DD_belatedPNG.fix('.product .img-holder');
            }
        }     
    });

    if ($.browser.msie && $.browser.version == 6) {
        DD_belatedPNG.fix('#logo a, #cart, #slider, #navigation ul li a, #slider-nav .active, #slider-nav .fade, .main-button, .items, .shop-by a, .product, .img-holder, .img-bottom, a.view-button, .products-slider, .jcarousel-prev, .jcarousel-next, .post');
    }
});

function mycarousel_initCallback(carousel) {
    $('#slider-nav a').bind('click', function() {
        $('#slider-nav a').find('span.fade').css('display', 'block');
        $(this).find('span.fade').css('display', 'none');
        $(this).find('span.active').css('display', 'block');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });
} 
Cufon.replace('h2',{
    color: '-linear-gradient(#373737, #535353)',
    textShadow: '-3px 2px #c8ae1d' 
});  