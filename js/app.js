$(document).foundation();
/*
    D H R U V I L   M O D I
    100727467
    Final Project - Numerics Learnig Module from 0 to 9
    1. standalone svgs with gsap animation in it
    2. unique animation in every numbers
    3. background saved as svg format and called from css instead of html
*/
window.onload = function(){
    
    // play background audio
    let audio = document.getElementById("bgAudio");
    audio.loop = true
    function playBackgrounMusic() {
        audio.play();
    }
    playBackgrounMusic();
    
    // declaring all variables
    let numberZero = document.getElementById("numberZero").contentDocument;
    let numberOne = document.getElementById("numberOne").contentDocument;
    let numberTwo = document.getElementById("numberTwo").contentDocument;
    let numberThree = document.getElementById("numberThree").contentDocument;
    let numberFour = document.getElementById("numberFour").contentDocument;
    let numberfive = document.getElementById("numberfive").contentDocument;
    let numberSix = document.getElementById("numberSix").contentDocument;
    let numberSeven = document.getElementById("numberSeven").contentDocument;
    let numberEight = document.getElementById("numberEight").contentDocument;
    let numberNine = document.getElementById("numberNine").contentDocument;

    // getting ids from svgs
    let svgNum0 = numberZero.getElementById("num0");
    let svgNum1 = numberOne.getElementById("one-3");
    let svgNum2 = numberTwo.getElementById("num2");
    let svgNum3 = numberThree.getElementById("num3");
    let svgNum4 = numberFour.getElementById("num4");
    let svgNum5 = numberfive.getElementById("num5");
    let svgNum6 = numberSix.getElementById("num6");
    let svgNum7 = numberSeven.getElementById("num7-3");
    let svgNum8 = numberEight.getElementById("num8-3");
    let svgNum9 = numberNine.getElementById("num9");

    // setting transofrm origins of all numbers to center
    TweenMax.set(svgNum0, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum1, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum2, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum3, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum4, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum5, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum6, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum7, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum8, {
        transformOrigin: "center center"
    });

    TweenMax.set(svgNum9, {
        transformOrigin: "center center"
    });

    // revealing each numbers at 2 seconds of each delay
    TweenMax.fromTo(svgNum0, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 2
    });

    TweenMax.fromTo(svgNum1, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 4
    });

    TweenMax.fromTo(svgNum2, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 6
    });

    TweenMax.fromTo(svgNum3, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 8
    });

    TweenMax.fromTo(svgNum4, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 10
    });

    TweenMax.fromTo(svgNum5, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 12
    });

    TweenMax.fromTo(svgNum6, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 14
    });

    TweenMax.fromTo(svgNum7, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 16
    });

    TweenMax.fromTo(svgNum8, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 18
    });

    TweenMax.fromTo(svgNum9, 1, {
        scale: 0,
    },{
        scale: 1,
        ease: Power4.easeInOut,
        delay: 20
    });

    // amnimating all numbers to shake
    TweenMax.fromTo(svgNum0, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum1, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum2, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum3, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum4, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum5, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum6, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum7, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum8, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });

    TweenMax.fromTo(svgNum9, 1, {
        rotation: -5
    },{
        rotation: 5,
        ease: Power4.easeInOut,
        yoyo: true,
        repeat: -1,
    });
};
