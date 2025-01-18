$(function () {
    // Initialize datepickers
    $("#inputCheckIn").datepicker();
    $("#inputCheckOut").datepicker();
  
    // Initialize Slick slider
    $('.level-slider').slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
    });
  
    // Video control logic
    const video = $('.level-video').get(0);
  
    function videoToggle() {
      if (video.paused) {
        video.play();
        $('.video-control-play').hide();
        $('.video-control-pause').show();
      } else {
        video.pause();
        $('.video-control-play').show();
        $('.video-control-pause').hide();
      }
    }
  
    // Ensure video starts playing on page load
    video.play();
  
    $('.video-control-play').click(function () {
      videoToggle();
    });
  
    $('.video-control-pause').click(function () {
      videoToggle();
    });
  });
  