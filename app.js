let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

// Parameter1 ANimation Object
// Parameter2 Animation Duration
// Parameter3 Animation Object Original State
// Parameter4 Animation Object End State
// Parameter5 Specify a relative time for an animation to synchronize multiple animations on the timeline.
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

// Disable the animation-wrapper's mouse events by executing the callback function
// Prevents the user from interacting with the element
setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);
