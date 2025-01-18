<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="./assets/CSS/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
    
    <link rel="stylesheet" href="./assets/CSS/style.css">
    <title>Level</title>
</head>
<body>

  <!--MAIN MENU-->

  <nav id="mainNavbar" class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./assets/img/logo.png" alt="Site Logo" class="logo-img">
        <span class="logo-text">Level</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#search">SEARCH</a></li>
          <li class="nav-item"><a class="nav-link" href="#Services">SERVICES</a></li>
          <li class="nav-item"><a class="nav-link" href="#recommends">Recommended</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <!--SEARCH FORM-->

<div id="search" class="hero">
  <div class="container">
    <form action="index.html" method="get" class="search-form">
      
      <div class="form-group" style="flex: 100%;">
        <i class="fa fa-map-marker"></i>
        <input type="text" name="city" class="form-control" placeholder="Type Your Destination">
      </div>
      
      <div class="form-group">
        <i class="fa fa-calendar"></i>
        <input type="text" class="form-control" id="inputCheckIn" placeholder="Check In">
      </div>
    
      <div class="form-group">
        <i class="fa fa-calendar"></i>
        <input type="text" class="form-control" id="inputCheckOut" placeholder="Check Out">
      </div>
    
 

      <div class="form-group">
        <i class="fa fa-bed"></i>
       <select class="form-control">
        <option value="">Rooms</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
       </select>
      </div>
      
      <div class="form-group">
        <i class="fa fa-user"></i>
       <select class="form-control">
        <option value="">Adults</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
       </select>
      </div>

      
          <div class="form-group">
        <i class="fa fa-user"></i>
       <select class="form-control">
        <option value="">Children</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
       </select>
      </div>
      
      
      <div class="form-group">
    <button type="submit" class="btn btn-primary"> Check</button>
      </div>


      <p class="need-help">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, blanditiis!
        <a href="#">Need Help?</a>
      </p>
    </form>

   
  </div>
</div>

  <!--SUBSCRIBE-->

  <section class="section-color">
    <div class="container text-center">
    <h2 class="section-title"> We are here to help you? </h2>
    <p class="sectoin-subtitle">Subscribe to get our NewLettrs</p>

    <a href="#" class="btn btn-white"> Subscribe NewLettrs</a>

    </div>
  </section>
  
  <!--SERVICES-->

  <section id="Services">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="section-down-arrow">

      <polygon fill="var(--color-primary)" points="0,0 100,0 50,50"></polygon> 
    </svg>

    <div class="container">
      <div class="row">
        
        <article class="article col-lg-4">
          <i class="fa fa-legal article-icon"></i>
          <h3 class="article-title">Level HTML Template by Tooplate website</h3>
          <p> You are allowed to download , edit and use this template for your business or client website</p>
          <a href="#" class="btn btn-primary btn-fit">Continue reading</a>
        </article>

        <article class="article col-lg-4">
          <i class="fa fa-plane article-icon"></i>
          <h3 class="article-title">Original Website Template Producer</h3>
          <p> You are NOT Allowed to re-distribute the downloadable template ZIP file on any website. </p>
          <a href="#" class="btn btn-primary btn-fit">Continue reading</a>
        </article>

        <article class="article col-lg-4">
          <i class="fa fa-meetup article-icon"></i>
          <h3 class="article-title"> Contact US if you have any question</h3>
          <p> If you see this template being distruted on any other site , that is illega copy.</p>
          <a href="" class="btn btn-primary btn-fit">Continue reading</a>
        </article>

      </div>
    </div>
  </section>

  <!--SLIDER-->
  <section id="recommends" class="section-gray">
<div class="container">
<div class="row">
  
  <div class="col-lg-8">
    <div class="level-slider">
  
      <article class="level-slider-item">
        <img src="./assets/img/img-01.jpg" alt="Beautiful Landscape">
        <div class="level-slider-item-container">
          <h3>Explore Stunning Landscapes</h3>
          <p>Discover breathtaking views and serene environments perfect for your next adventure.</p>
          <a href="#" class="btn btn-primary btn-fit">Get More Info</a>
        </div>
      </article>
  
      <article class="level-slider-item">
        <img src="./assets/img/img-02.jpg" alt="Modern Architecture">
        <div class="level-slider-item-container">
          <h3>Experience Modern Architecture</h3>
          <p>Immerse yourself in the beauty of contemporary design and innovative structures.</p>
          <a href="#" class="btn btn-primary btn-fit">View Details</a>
        </div>
      </article>
  
      <article class="level-slider-item">
        <img src="./assets/img/img-01.jpg" alt="Nature's Wonders">
        <div class="level-slider-item-container">
          <h3>Uncover Nature's Wonders</h3>
          <p>Join us for a journey to some of the most awe-inspiring natural destinations.</p>
          <a href="#" class="btn btn-primary btn-fit">View Details</a>
        </div>
      </article>
  
      <article class="level-slider-item">
        <img src="./assets/img/img-02.jpg" alt="Cultural Heritage">
        <div class="level-slider-item-container">
          <h3>Dive Into Cultural Heritage</h3>
          <p>Learn about rich traditions and historical landmarks from around the globe.</p>
          <a href="#" class="btn btn-primary btn-fit">View Details</a>
        </div>
      </article>
  
      <article class="level-slider-item">
        <img src="./assets/img/img-01.jpg" alt="Adventure Awaits">
        <div class="level-slider-item-container">
          <h3>Your Next Adventure Awaits</h3>
          <p>Get ready for thrilling activities and unique experiences tailored just for you.</p>
          <a href="#" class="btn btn-primary btn-fit">Get More Info</a>
        </div>
      </article>
  
      <article class="level-slider-item">
        <img src="./assets/img/img-02.jpg" alt="Relax and Unwind">
        <div class="level-slider-item-container">
          <h3>Relax and Unwind</h3>
          <p>Escape the hustle and bustle with our curated retreats designed for ultimate relaxation.</p>
          <a href="#" class="btn btn-primary btn-fit">Get More Info</a>
        </div>
      </article>
  
    </div>
  </div>
  

  <div class="col-lg-4">

    <div class="star-places">

      <div class="star-places-header">
        <h3>Recommended Places</h3>
        <p>Places that we recommend for you </p>
      </div>

      <div class="star-places-body">
        <a href="#">
          <img src="./assets/img/tn-img-01.jpg" alt="place imge">
          <h4>Europ</h4>
        </a>

        <a href="#">
          <img src="./assets/img/tn-img-02.jpg" alt="place imge">
          <h4>Asia</h4>
        </a>
        
        <a href="#">
          <img src="./assets/img/tn-img-03.jpg" alt="place imge">
          <h4>Africa</h4>
        </a>  

        <a href="#">
          <img src="./assets/img/tn-img-04.jpg" alt="place imge">
          <h4>America</h4>
        </a>
      </div> 

    </div>

  </div>


</div>

</div>
  </section>

<!--VIDIO-->
<section class="video">
  <div class="video-overlay">
    <!-- <i class="fa fa-play-circle video-control-play"></i>
    <i class="fa fa-pause-circle video-control-pause"></i> -->
  </div>
  <div class="video-container">
    <video class="level-video" autoplay loop muted>
      <source src="./assets/videos/video.mp4" type="video/mp4">
      <source src="./assets/videos/video.ogg" type="video/ogg">
      Your Browser does not support the video tag.
    </video>
  </div>
</section>

<!--CONTACT-->
<section id="contact">
  <div class="container">

<div class="row">
  <div class="col-lg-6">

<div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130856.29176956738!2d31.66095159495266!3d30.226619646245524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581ab73d4ca47d%3A0x89e1c92d1d007f67!2z2YXYr9mK2YbYqSDYp9mE2LnYqNmI2LHYjCDYp9mE2LnYqNmI2LHYjCDZhdit2KfZgdi42Kkg2KfZhNmC2YTZitmI2KjZitip!5e1!3m2!1sar!2seg!4v1737222751116!5m2!1sar!2seg"
 width="100%" 
 height="100%" 
 style="border:0;" 
 allowfullscreen="" 
 loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade">
</iframe>
</div>

    </div>
  <div class="col-lg-6">

    <form action="" class="contact-form">
      <div class="form-group">
        <input type="text" name="" id="" class="form-control" required placeholder="Name">
        <i class="fa fa-user"></i>
      </div>

      <div class="form-group">
        <input type="email" name="" id="" class="form-control" required placeholder="Email">
        <i class="fa fa-envelope"></i>
      </div>

      <div class="form-group">
        <input type="text" name="" id="" class="form-control" required placeholder="Subject">
        <i class="fa fa-book"></i>
      </div>

      <div class="form-group">
       <textarea type="text" name="" id="" class="form-control" placeholder="Message" required rows="9" > </textarea>
        <i class="fa fa-commenting"></i>
      </div>
      
      <button type="submit" class="btn btn-primary">Send Message Now</button>

    </form>
  </div>
</div>

  </div>
</section>

<!--FOOTER-->

<footer class="footer">
  <div class="container">
    <p>Copyright &copy; 2025 ENG-Mohab Islam -Design- DR.Nour Homsi❤️</p>
  </div>
</footer>


  <script src="./assets/js/bootstrap.bundle.min.js"></script>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
  

  <script src="./assets/js/script.js"></script>

</body>
</html>
