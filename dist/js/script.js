//function to change nav bar background color when scrolled down into diff section
$(function () {
    $(document).scroll(function () {
        var $top= $(".top-banner");
        var $header= $("header");
        $header.toggleClass('scrolled', $(this).scrollTop() > $top.height());
        
      });
  });
//function to show back to top arrow
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#arrow_up').fadeIn();
      } else {
        $('#arrow_up').fadeOut();
      }
    });
});

