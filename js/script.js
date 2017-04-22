var carousel = jQuery('div#home-carousel');
    carousel.carousel({
      fullWidth: true,
      indicators: true,
      duration: 300,
      onCycleTo : function($current_item, dragged) {
        console.log($current_item);
        stopAutoplay();
        startAutoplay(carousel);
      }
    });

var autoplay_id;
function startAutoplay($carousel) {
   autoplay_id = setInterval(function() {
      $carousel.carousel('next');
    }, 5000); // every 5 seconds
  //console.log("starting autoplay");
}

function stopAutoplay() {
  if(autoplay_id) {
    clearInterval(autoplay_id);
    //console.log("stoping autoplay");
  }
}