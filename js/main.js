$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var tweenStart = new TweenMax.to('#img-logo-start', 4, {
        scale: 35.00,
        ease: Linear.easeNone
    })

    var sceneStart = new ScrollMagic.Scene({duration: 500, offset: 0})
                        .setTween(tweenStart)
						.setPin("#starting-page");

    controller.addScene(sceneStart)
})