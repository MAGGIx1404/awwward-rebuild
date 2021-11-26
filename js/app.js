import LocomotiveScroll from "locomotive-scroll";
import { preloader } from "./webgl/perloader";
import Menu from "./webgl/menu";
import { gsap, ScrollTrigger } from "gsap";

// menu (<nav> element)
const menuEl = document.querySelector(".menu");
const scroll__container = document.getElementById("scroll__container");

// preload the images set as data attrs in the menu items
preloader("img").then(() => {
  // initialize the smooth scroll
  // using ajax page transition
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    }, 2000);
  });
  if (document.body.classList.contains("loaded")) {
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
      scroller.on("scroll", (instance) => {
        document
          .getElementById("nav")
          .setAttribute("data-direction", instance.direction);
      });
    });
  }

  //scroller top
  const main = document.getElementById("main");

  document.querySelector(".btn_one").addEventListener("click", function () {
    scroller.scrollTo(main);
  });

  // initialize menu
  new Menu(menuEl);
});
