/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// jQuery for page scrolling feature - requires jQuery Easing plugin
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
// build scene

$(document).ready(function() {

    if (!isMobile) {
        // init controller
        controller = new ScrollMagic.Controller();


        // build tween
        	var tween_5 = TweenMax.from(".portfolio .portfolio-item:nth-child(2)", 0.5,
                        {
                            left: "-50px",
                            alpha: 0,
                            ease: Power1.easeOut
                        }
        							);
        	var tween_6 = TweenMax.from(".portfolio .portfolio-item:nth-child(3)", 0.5,
                        {
                            right: "-50px",
                            alpha: 0,
                            ease: Power1.easeOut
                        }
        							);

        	// build scene
        	var scene_5 = new ScrollMagic.Scene({triggerElement: ".portfolio", offset: -100})
        					.setTween(tween_5)
        					.addTo(controller).reverse(false);
                  
        	var scene_6 = new ScrollMagic.Scene({triggerElement: ".portfolio", offset: -100})
        					.setTween(tween_6)
        					.addTo(controller).reverse(false);
                  
        var tween_1 = TweenMax.from(".package > div:nth-child(1)", 1,
                      {
                          left: "-400px",
                          alpha: 0,
                          ease: Power1.easeOut
                      }
      							);
                    
        var tween_2 = TweenMax.from(".package > div:nth-child(2)", 1,
                      {
                          top: "-400px",
                          alpha: 0,
                          ease: Power1.easeOut
                      }
      							);
        var tween_3 = TweenMax.from(".package > div:nth-child(3)", 1,
                      {
                          bottom: "-400px",
                          alpha: 0,
                          ease: Power1.easeOut
                      }
      							);
                    
        var tween_4 = TweenMax.from(".package > div:nth-child(4)", 1,
                      {
                          right: "-400px",
                          alpha: 0,
                          ease: Power1.easeOut
                      }
      							);
                    
       var scene_1 = new ScrollMagic.Scene({triggerElement: ".package", offset: -100})
                            .setTween(tween_1)
                            .addTo(controller).reverse(false);
                    
       var scene_2 = new ScrollMagic.Scene({triggerElement: ".package", offset: -100})
                            .setTween(tween_2)
                            .addTo(controller).reverse(false);
                            
       var scene_3 = new ScrollMagic.Scene({triggerElement: ".package", offset: -100})
                            .setTween(tween_3)
                            .addTo(controller).reverse(false);
       var scene_4 = new ScrollMagic.Scene({triggerElement: ".package", offset: -100})
                            .setTween(tween_4)
                            .addTo(controller).reverse(false);

  
        
        
    
        
            
        

    }

});


$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {

    var $window = $(window); //Window object

    var scrollTime = 0.3; //Scroll time
    var scrollDistance = 50; //Distance. Use smaller value for shorter scroll and greater value for longer scroll

    $window.on("mousewheel DOMMouseScroll", function(event) {

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {
                y: finalScroll,
                autoKill: true
            },
            ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
            autoKill: true,
            overwrite: 5
        });

    });

});