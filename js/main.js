var screenHeight = $(window).height();

// Here is where the animation on scroll will be kept
function animation() {
    var controller = new ScrollMagic.Controller();

    var tweenStart = new TweenMax.to('#img-logo-start', 4, {
        scale: 35.00,
        ease: Power2.easeIn
    })

    var sceneStart = new ScrollMagic.Scene({duration: (screenHeight/2), offset: 0})
                        .setTween(tweenStart)
						.setPin("#starting-page")
                        .addIndicators();

    var tweenAboutTitle = new TweenMax.to('#js-holder-about', 4, {
        opacity: '100%',
        ease: Power2.easeIn
    })

    var sceneAboutTitle = new ScrollMagic.Scene({duration: (screenHeight/3), offset: (screenHeight/2)})
                        .setTween(tweenAboutTitle)
                        .addIndicators();

    controller.addScene(sceneStart)
    controller.addScene(sceneAboutTitle)
}

$(document).ready(function () {
    animation()

    $('#js-holder-about').append('<h2 id="js-our-thing" class="text-centered"><span>Making Software</span> is kind of our thing</h2>')
    $('#our-thing').addClass('hidden')
    
    var position = 0;
    $(function () {
        $(window).scroll(function () {
            if (($(window).scrollTop() >= (screenHeight/2)) && ($(window).scrollTop() < (3*screenHeight/2)) && position != 1) {
                $("#img-logo-start").css("display","none");
                $("#name-start").css("display","none");
                $("body").css("background-color", "#ffffff");
                $("#js-holder-about").removeClass('hidden').addClass('fullheight-container')
                position = 1
            } else if (($(window).scrollTop() < (screenHeight/2)) && position != 0) {
                $("#img-logo-start").css("display","inline");
                $("#name-start").css("display","inline");
                $("body").css("background-color", "#5bb9e9")
                $("#js-holder-about").addClass("hidden")
                position = 0
            } else if (($(window).scrollTop() >= (3*screenHeight/2)) && position != 2) {
                $("#js-holder-about").addClass("hidden")
                position = 2
            }

            // if ($(window).scrollTop() >= (screenHight + 1000)) {
            //     $("#our-thing span").css("display","none");
            // } else {
            //     $("out-thing span").css("display","none")
            // }
        });
    });
})