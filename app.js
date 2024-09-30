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

// Disable EnterKey in our web
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

// Prevent the Button inside the Form from handing over the form.
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Change the select Color for ABCDEF Level
let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    // console.log(e.target.value); //Console can see the value
    changeColor(e.target);
  });
});
function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B+" ||
    target.value == "B" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C+" ||
    target.value == "C" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D+" ||
    target.value == "D" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "White";
  }
}
function setGPA() {}
