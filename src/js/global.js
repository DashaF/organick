

$(document).ready(function () {
  //scroll animation
  AOS.init();
  window.addEventListener('load', AOS.refresh);

  //open sub menu
  $('.JS-has-children').on({
    mouseenter: function() {
        $(this).addClass('open').find('.JS-sub-menu').addClass('active');
    },
    mouseleave: function() {
        $(this).removeClass('open').find('.JS-sub-menu').removeClass('active');
    }
  });
  
  //open main menu
  $('.JS-menu-btn').on({
    click: function() {  
      $(this).toggleClass('active');
      $('.JS-menu').toggleClass('active');
      if($('.JS-sub-menu-toggle').hasClass('active')) {
        $('.JS-sub-menu-toggle').removeClass('active')
        $('.JS-sub-menu').delay(400).slideUp(50);
      }
      if (window.innerWidth < 1200) {
          
        $('body').toggleClass('overflow-hidden');
      }
    }
  });

  //open sub menu on mobile
  $('.JS-sub-menu-toggle').on({
    click: function() {
      $(this).toggleClass('active');
      $(this).parent().siblings('.JS-sub-menu').slideToggle(400);
    }
  });
});

$(window).on('resize', function(){
  if (window.innerWidth >= 1200) {
    $('body').removeClass('overflow-hidden');
  } else {
    if($('.JS-menu').hasClass('active')) {
      $('body').addClass('overflow-hidden');
    }
  }
});