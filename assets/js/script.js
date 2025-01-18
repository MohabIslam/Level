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

  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    const stickyOffset = navbar.offsetTop;
  
    // Add sticky class on scroll
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > stickyOffset) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  
    // Smooth scrolling for links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  
  
