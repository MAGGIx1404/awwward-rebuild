import LocomotiveScroll from "locomotive-scroll";
import { preloadImages } from "./webgl/utils";
// import { gsap, TweenMax, Expo, ScrollTrigger, Bounce } from "gsap/all";
import Menu from "./webgl/menu";

const menuEl = document.querySelector(".menu");

// when all image load page open
preloadImages("img").then(
  () => document.body.classList.remove("loading"),
  document.body.classList.add("loaded")
);

const scroll__container = document.getElementById("scroll__container");
const scroller = new LocomotiveScroll({
  el: scroll__container, //scroll element (scroll container)
  smooth: true, // smooth scroll enabled
  getDirection: true, // display scoll direction (up & down)
  lerp: 0.05, //scroll smoothness
  smartphone: {
    smooth: true, //smooth scroll enabled for mobile
  },
  tablet: {
    smooth: true, //smooth scroll enabled for tablet & ipad
  },
});

window.addEventListener("load", function () {
  scroller.destroy();
  scroller.init();

  // initialize menu
  new Menu(menuEl);
  //   load animation

  //   TweenMax.to(".overlay", 1, {
  //     x: "-100%",
  //     ease: Expo.easeInOut,
  //   });
  //   TweenMax.staggerFrom(
  //     ".nav__links a",
  //     1,
  //     {
  //       delay: 0.2,
  //       y: "-10",
  //       opacity: 0,
  //       ease: Expo.easeInOut,
  //     },
  //     0.05
  //   );
  //   TweenMax.from(".title", 1, {
  //     delay: 0.4,
  //     x: "-100",
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //   });

  scroller.on("scroll", (instance) => {
    document
      .getElementById("nav")
      .setAttribute("data-direction", instance.direction);
  });
});

//scroller top
const main = document.getElementById("banner");

document.querySelector(".btn_one").addEventListener("click", function () {
  scroller.scrollTo(main);
});
