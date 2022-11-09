var screenHeight = $(window).height();
var animationLength = Math.max(screenHeight, "800")
var logoHidden = false;

// Here is where the animation on scroll will be kept
function animation() {
    var controller = new ScrollMagic.Controller();

    var tweenStart = new TweenMax.to('#img-logo-start', 4, {
        scale: 35.00,
        ease: Power2.easeIn
    })

    var sceneStart = new ScrollMagic.Scene({duration: (animationLength/2), offset: 0})
                        .setTween(tweenStart)
						.setPin("#starting-page")
                        .addIndicators();

    var tweenAboutTitleIn = new TweenMax.to('#js-holder-about', 4, {
        opacity: '100%',
        ease: Power2.easeIn
    })

    var tweenAboutTitleOut = new TweenMax.to('#js-holder-about', 4, {
        opacity: '0%',
        ease: Power2.easeOut
    })

    var sceneAboutTitleIn = new ScrollMagic.Scene({duration: (animationLength/3), offset: (animationLength/2)})
                        .setTween(tweenAboutTitleIn)
                        .addIndicators();

    var sceneAboutTitleOut = new ScrollMagic.Scene({duration: (animationLength/3), offset: (5*animationLength/6)})
                        .setTween(tweenAboutTitleOut)
                        .addIndicators();

    controller.addScene(sceneStart)
    controller.addScene(sceneAboutTitleIn)
    // controller.addScene(sceneAboutTitleOut)
}

$(document).ready(function () {
    animation()

    console.log(screenHeight)
    console.log(animationLength)

    $('#js-holder-about').append('<h2 id="js-our-thing" class="text-centered"><span>Making Software</span> is kind of our thing</h2>')
    $('#our-thing').addClass('hidden')
    
    var position = 0;
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= (3*animationLength/2)) {
                if (position != 3) {
                    // $("#js-holder-about").addClass("hidden")
                    position = 3
                }
            } else if ($(window).scrollTop() >= (5*animationLength/6)) {
                if (position != 2) {
                    $("#js-holder-about").css("opacity", "100%");
                    position = 2
                }
            }
            
            if (($(window).scrollTop() < (animationLength/2)) && logoHidden) {
                $("#img-logo-start").css("display","inline");
                $("#name-start").css("display","inline");
                $("body").css("background-color", "#5bb9e9")
                $("#js-holder-about").addClass("hidden")
                logoHidden = false
            } else if (($(window).scrollTop() >= (animationLength/2)) && !logoHidden) {
                    $("#img-logo-start").css("display","none");
                    $("#name-start").css("display","none");
                    $("body").css("background-color", "#ffffff");
                    $("#js-holder-about").removeClass('hidden').addClass('fullheight-container')
                    logoHidden = true
            }



            // if ($(window).scrollTop() >= (screenHight + 1000)) {
            //     $("#our-thing span").css("display","none");
            // } else {
            //     $("out-thing span").css("display","none")
            // }
        });
    });
})