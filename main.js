TweenMax.from(".arrow-down", 0.5, {
    ease: Expo.easeOut
    , scaleX: 0
    , scaleY: 0
    , borderTopColor: "rgba(255, 255, 255, 0)"
});
TweenMax.to(".arrow-down", 0.5, {
    bottom: "1"
    , repeat: -1
    , yoyo: true
});