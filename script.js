function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locoScroll();


function cursorEffect(){
    var page1Content = document.querySelector('#page1-content');
    var cursor = document.querySelector('#playCursor');

page1Content.addEventListener('mousemove', function(detail){
    gsap.to(cursor,{
        x:detail.x,
        y:detail.y
    })
})
page1Content.addEventListener('mouseenter', function(detail){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener('mouseleave', function(detail){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}

cursorEffect();

function cursorEffectOnCount(){
  var page5Content = document.querySelector('#page5-content');
  var cursor = document.querySelector('#takeCursor');

  page5Content.addEventListener('mousemove', function(detail){
  gsap.to(cursor,{
      x:detail.x,
      y:detail.y
  })
})
page5Content.addEventListener('mouseenter', function(detail){
  gsap.to(cursor,{
      scale:1,
      opacity:1
  })
})
page5Content.addEventListener('mouseleave', function(detail){
  gsap.to(cursor,{
      scale:0,
      opacity:0
  })
})
}

cursorEffectOnCount();

// function page2Animation(){
//     gsap.from('.ele h1',{
//         y:120,
//         stagger:0.2,
//         duration:1,
//         scrollTrigger:  {
//             trigger:'#page2',
//             scrollbar:"#main",
//              start:'top 35%',
//              end:'top 30%',
//             scrub:2
//         }
//     })
// }

// page2Animation();

function swipper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
  },
  speed: 2000,
  effect: "slide",
  easing: 'easeInOutQuart', 
  });
}

swipper();

var timeline = gsap.timeline()

timeline.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})
timeline.to("#loader h3",{
  opacity:0,
  x:-40,
  duration:.5,
  stagger:0.1
})
timeline.to("#loader",{
  opacity:0
})
timeline.to("#loader",{
  display:"none"
})

// for rejouice heading animation

timeline.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})


timeline.from("#page8-down h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5
})

