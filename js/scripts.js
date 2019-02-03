jQuery(document).ready(function() {
    let options, sliderContainer;
    jQuery(window).on('hashchange', function() {
        let hash = window.location.hash.substr(1);
        if(hash) {
            let activeLink = jQuery('.nav-link.'+ hash);
            if(activeLink.length) {
                activeLink.parents('.menu:first').find('.nav-item').removeClass('active');
                activeLink.parents('.nav-item:first').addClass('active');
            }
        }
    });
    if(window.location.hash) {
        jQuery(window).trigger('hashchange');
    }
    options = {
        $Loop: 1,
        $DragOrientation: 3,
        $SlideDuration: 500,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 2,
            $AutoCenter: 2,
            $Steps: 1
        }
    };
    sliderContainer = new $JssorSlider$('slider-container', options);
    ScaleSlider();
    jQuery(window).bind("load", ScaleSlider);
    jQuery(window).bind("resize", ScaleSlider);
    jQuery(window).bind("orientationchange", ScaleSlider);

    function ScaleSlider() {
        let parentWidth = jQuery('#slider-container').parent().width();
        if(parentWidth) {
            parentWidth = Math.min(parentWidth*.8, 756);
            sliderContainer.$ScaleWidth(parentWidth);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
});