/* ===================================================================
 * Transcend - Main JS
 *
 * ------------------------------------------------------------------- */
(function ($, Drupal) {

  'use strict';
  /* CODE GOES HERE */
      var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
    var clPreloader = function() {
        
        $("html").addClass('cl-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');
        
        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {
        
        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


   /* OffCanvas Menu
    * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                siteBody.removeClass('menu-is-open');
            }
        });

    };


   /* photoswipe
    * ----------------------------------------------------- */
 
    

  

   /* Initialize
    * ------------------------------------------------------ */
     (function clInit() {
        
        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
  
        
    })();

     $(document).ready(function() {
         $(".field--name-field-invest-content .field__item").click(function(e) {
           e.preventDefault();
           $(this).siblings(".field__item.active").removeClass("active");
           $(this).addClass("active");
           var index = $(this).index();
           $(".field--name-field-invest-image .field__item .invest-image").removeClass("active");
           $(".field--name-field-invest-image .field__item .invest-image").eq(index).addClass("active");
         });
         });
       $(document).ready(function() {
         $(".field--name-field-analytic-title .field__item").click(function(e) {
           e.preventDefault();
           $(this).siblings(".field__item.active").removeClass("active");
           $(this).addClass("active");
           var index = $(this).index();
           $(".field--name-field-analytics-content .field__item .analytic-content").removeClass("active");
           $(".field--name-field-analytics-content .field__item .analytic-content").eq(index).addClass("active");
         });
         });
    $(document).ready(function(){
           $(".currency_year").hide();
             $("#radio1").click(function(){
                 $(".currency_year").hide();
                 $(".currency_month").show();
             });
             $("#radio2").click(function(){
                 $(".currency_month").hide();
                 $(".currency_year").show();
             });
         });
         
          $('.tabs_label').click(function(){
                      $('.tabs_label').removeClass('active_t');
                      $(this).addClass('active_t');
         
                  });

         $(".field--name-field-invest-image .field__item .invest-image:first").addClass("active");
         $(".field--name-field-invest-content .field__item:first").addClass("active");
         $(".field--name-field-analytics-content .field__item .analytic-content:first").addClass("active");
         $(".field--name-field-analytic-title .field__item:first").addClass("active");

        jQuery(document).ready(function( $ ) {
       $('.popup-youtube').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,
       fixedContentPos: false
        });


});

})(jQuery, Drupal);


    
