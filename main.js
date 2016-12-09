function arrowBounce() {
    TweenMax.to(".arrow-down", 0.5, {
        bottom: "1"
        , repeat: -1
        , yoyo: true
    });
}
var tl = new TimelineLite();
tl.from(".textovervideo", 2.5, {
    ease: Power2.easeOut
    , autoAlpha: 0
}).from(".arrow-down", 1, {
    autoAlpha: 0
    , bottom: -5
}).call(arrowBounce);