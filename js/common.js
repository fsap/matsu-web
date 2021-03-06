/*!
 *
 * analytics
 *
 */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83436171-1', 'auto');
  ga('send', 'pageview');

/*!
 *
 * Slider
 *
 */
$(document).ready(function(){
  $('.slideshow').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    pauseOnDotsHover: true
  });
});

/*!
 *
 * Footer
 *
 */
//$(document).ready(function() {
//  $('footer').load('common/footer.html');
//});

/*!
 *
 * Font Size
 *
 */
$(document).ready(function(){
    $('html').css('font-size', '62.5%');
    
    $('#btn_font_s').click(function(){
        $('html').css('font-size', '50.0%');
    });
    $('#btn_font_m').click(function(){
        $('html').css('font-size', '62.5%');
    });
    $('#btn_font_l').click(function(){
        $('html').css('font-size', '80.0%');
    });
});

/*!
 *
 * Scroll
 *
 */
$(document).ready(function() {
  var pagetop = $('.back_to_top');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
