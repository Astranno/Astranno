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

    var tweenAboutStart = new TimelineMax()
                        .fromTo("#our-thing span", 1, {opacity: "100%"}, {opacity: "0%", ease: Linear.easeNone})

    var sceneAboutStart = new ScrollMagic.Scene({triggerElement:'#about-us', duration: 100, offset: 0})
                        .setTween(tweenAboutStart)
						.setPin("#about-us")
                        .addIndicators();

    var tweenAboutMove = new TimelineMax()
                        .fromTo("#our-thing", 1, {x: "0%"}, {x:"-50%"})

    var sceneAboutMove = new ScrollMagic.Scene({triggerElement:'#about-us', duration: 100, offset: 100})
                        .setTween(tweenAboutMove)
						.setPin("#about-us")
                        .addIndicators();

    controller.addScene(sceneStart)
    controller.addScene(sceneAboutStart)
    controller.addScene(sceneAboutMove)

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