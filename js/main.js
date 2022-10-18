$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var tweenStart = new TweenMax.to('#img-logo-start', 4, {
        scale: 35.00,
        ease: Sine.easeIn
    })

    var sceneStart = new ScrollMagic.Scene({duration: 1000, offset: 0})
                        .setTween(tweenStart)
						.setPin("#starting-page");
                        // .addIndicators()

    controller.addScene(sceneStart)

    var button = $(window).height(); //get offset of second div
    console.log(button)
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= button) {
                $("#img-logo-start").css("display","none");
                $("#name-start").css("display","none");
                $("body").css("background-color", "#ffffff")
            } else {
                $("#img-logo-start").css("display","inline");
                $("#name-start").css("display","inline");
                $("body").css("background-color", "#5bb9e9")
            }
        });
    });
})