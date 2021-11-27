import LocomotiveScroll from "locomotive-scroll";
import { preloadImages } from "./webgl/utils";
import { gsap, TweenMax, Expo, ScrollTrigger, Bounce } from "gsap/all";

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
  //   load animation

  TweenMax.to(".overlay", 1, {
    x: "-100%",
    ease: Expo.easeInOut,
  });
  TweenMax.staggerFrom(
    ".nav__links a",
    1,
    {
      delay: 0.2,
      y: "-10",
      opacity: 0,
      ease: Expo.easeInOut,
    },
    0.05
  );
  TweenMax.from(".title", 1, {
    delay: 0.4,
    x: "-100",
    opacity: 0,
    ease: Expo.easeInOut,
  });

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

// page transition using loop and gsap

const anchors = document.querySelectorAll(".transition__btn");

for (let i = 0; i < anchors.length; i++) {
  const anchor = anchors[i];

  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;

    if (target.nodeName === "SPAN") {
      target = target.parentElement.href;
    }

    setTimeout(() => {
      window.location.href = target;
    }, 2500);
  });
}

// skew

gsap.registerPlugin(ScrollTrigger);

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#scroll__container", {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

/* ADD LOCOSCROLL */

/* ADD SKEW SECTION */

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skew__element", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  scroller: "#scroll__container",
  trigger: ".scroll__container",

  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.4,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });

/* ADD BACKGROUND COLOR */
//gsap.utils.toArray(".color").forEach(function (elem) {
//
//    var color = elem.getAttribute('data-color');
//
//    ScrollTrigger.create({
//        trigger: elem,
//        scroller: "#viewport",
//        start: 'top 50%',
//        end: 'bottom 50%',
//        onEnter: () => gsap.to('main', {
//            backgroundColor: color
//        }),
//        onLeave: () => gsap.to('main', {
//            backgroundColor: 'white'
//        }),
//        onLeaveBack: () => gsap.to('main', {
//            backgroundColor: 'white'
//        }),
//        onEnterBack: () => gsap.to('main', {
//            backgroundColor: color
//        }),
//    });
//
//});

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();
