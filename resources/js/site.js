// Alpine.js handles the show/hide of the mobile nav
import 'alpinejs';

document.addEventListener('DOMContentLoaded', (event) => {
  $("a.fadeOut").click(function() {
      $link = $(this).attr("href");
      $(".sticky-footer__content").fadeOut(200);
      setTimeout(function(){
          window.location.replace($link);
      },200);
      return false;
  });
})


// Initialize Slider
window.onload = (event) => {
  // check browser size
  function resizeForm(){
        var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
        if(width > 800){
          // Initiate slider if meets browser width requirement
          $("#content-slider").lightSlider({
            adaptiveHeight:false,
            // vertical:false,
            // verticalHeight:100,
            item: 1,
            autoWidth: true,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 60,
            loop:false,
            keyPress:true,
            gallery: false,
            controls: true,
            pager: false,
            onSliderLoad: function() {
              $('#content-slider').removeClass('hidden');
              $('#loading').addClass('hidden');
            }
          });
          console.log('slider initiated');
        } else {

        }
    }
    // execute browser check on resize (disabled)
    // window.onresize = resizeForm;
    resizeForm();
};
