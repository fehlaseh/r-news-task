

$(document).ready(function() {
    // navbar active link
    $(".nav-list .nav-link").click(function ( e ) {
        e.preventDefault();
        $(".nav-list .nav-link.active").removeClass("active"); 
        $(this).addClass("active"); 
    });

    // navbar on small screen size show / hide menu
    $(".nav-sm-btn").click(function(e){
        e.preventDefault();
        $(".nav-list").slideDown("slow");
    });

    // close btn
    $(".close-link").click(function(e){
        e.preventDefault();
        $(".nav-list").slideUp("slow");
    });

    // news-side-sec Tabs
    $(".news-tab-item .news-tab-link").click(function(e) {
        let val = $(this).attr("href");
        e.preventDefault();
        $(".news-tab-item .news-tab-link.active").removeClass("active"); 
        $(".tab-cont.active").removeClass("active"); 
        $(this).addClass("active"); 
        $(val).addClass("active");
        
    });


    
    // Swiper Plugin For Mob Roya News Page
     
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1130: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });


    
});