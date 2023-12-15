// ANIMATION LIBRARIES USED IN THIS PROJECT :
// locomotive .js for smooth scroll
// gsap to animate & Shery.js



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".nlink",{
stagger: .2,
y: 10,
duration: 3,
ease: Power2,
opacity: 0
})

Shery.textAnimate(".headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 30,
    delay: 0.4,
    duration: 4.6,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.3,
  });

  gsap.from(".anim2",{
    y:40,
opacity:0,
duration:2,
stagger:.3,
ease:Expo
})

Shery.imageEffect(".imgandtext img", {
    style: 4,
    debug: false,
    config:{"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":3.4,"range":[0,5]},"uFrequency":{"value":5.04,"range":[0,10]},"geoVertex":{"range":[1,64],"value":11.16},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":0.7444130351787914},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":-0.048648648648648596,"y":-0.027027027027026973}},"shapeScale":{"value":{"x":1,"y":0.97}},"shapeEdgeSoftness":{"value":0.5,"range":[0,0.5]},"shapeRadius":{"value":2,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.19,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });

  Shery.imageEffect(".imgeff img", {
    style: 5,
    debug: false,
    config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.56,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7332898822839192},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.010204081632652962,"y":-0.04081632653061229}},"shapeScale":{"value":{"x":0.98,"y":0.5}},"shapeEdgeSoftness":{"value":0.5,"range":[0,0.5]},"shapeRadius":{"value":0.12,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })
  gsap.from(".imgandtext img",{
    y:50,
    opacity:0,
x:20
  })

  Shery.imageEffect(".bannerimg",{
    style:5,
    // debug:true,
    gooey:true,
    config: {"a":{"value":1.83,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.209475877176724},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, gooey:true,
  })


  document.querySelector(".ftext button ").addEventListener("mouseover",function(){
gsap.to(".future video",{
    opacity:1,
    duration:1,
    ease:Power2

})
  })

  
  document.querySelector(".ftext button ").addEventListener("mouseleave",function(){
    gsap.to(".future video",{
        opacity:0,
        duration:1,
        ease:Power2
    
    })
  })

  // responsible
  