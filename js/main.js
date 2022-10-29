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
        opacity: '100%'
    })

    var sceneAboutTitle = new ScrollMagic.Scene({duration: (screenHeight/3), offset: (screenHeight/2)})
                        .setTween(tweenAboutTitle)
                        .addIndicators();

    controller.addScene(sceneStart)
    controller.addScene(sceneAboutTitle)
}

$(document).ready(function () {
    animation()

    $('#js-holder-about').append('<h2 id="js-our-thing" class="text-centered">Making Software is kind of our thing</h2>')
    $('#our-thing').addClass('hidden')
    

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= (screenHeight/2)) {
                $("#img-logo-start").css("display","none");
                $("#name-start").css("display","none");
                $("body").css("background-color", "#ffffff");
                $("#js-holder-about").removeClass('hidden')
            } else {
                $("#img-logo-start").css("display","inline");
                $("#name-start").css("display","inline");
                $("body").css("background-color", "#5bb9e9")
                $("#js-holder-about").addClass("hidden")
            }

            // if ($(window).scrollTop() >= (screenHight + 1000)) {
            //     $("#our-thing span").css("display","none");
            // } else {
            //     $("out-thing span").css("display","none")
            // }
        });
    });
})