$(document).ready(function () {
    var screenHeight = $(window).height();
    console.log(screenHeight)
    var controller = new ScrollMagic.Controller();

    var tweenStart = new TweenMax.to('#img-logo-start', 4, {
        scale: 35.00,
        ease: Power2.easeIn
    })

    var sceneStart = new ScrollMagic.Scene({duration: (screenHeight/2), offset: 0})
                        .setTween(tweenStart)
						.setPin("#starting-page")
                        .addIndicators();

    controller.addScene(sceneStart)

    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= (screenHeight/2)) {
                $("#img-logo-start").css("display","none");
                $("#name-start").css("display","none");
                $("body").css("background-color", "#ffffff");
            } else {
                $("#img-logo-start").css("display","inline");
                $("#name-start").css("display","inline");
                $("body").css("background-color", "#5bb9e9")
            }

            // if ($(window).scrollTop() >= (screenHight + 1000)) {
            //     $("#our-thing span").css("display","none");
            // } else {
            //     $("out-thing span").css("display","none")
            // }
        });
    });
})