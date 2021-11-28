import LocomotiveScroll from "locomotive-scroll";
import { preloader } from "./webgl/perloader";
import Menu from "./webgl/menu";
import { gsap, TweenMax, Expo } from "gsap";

// menu (<nav> element)
const menuEl = document.querySelector(".menu");
const scroll__container = document.getElementById("scroll__container");

// preload the images set as data attrs in the menu items
preloader("img").then(() => {
  // initialize the smooth scroll
  document.body.classList.add("loaded");
  // using ajax page transition
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

      // load animation
      TweenMax.to(".overlay__main", 1, {
        x: "-100%",
        ease: Expo.easeInOut,
      });
      TweenMax.from("a", 1, {
        opacity: 0,
        delay: 0.4,
        ease: Expo.easeInOut,
      });

      //scroller top
      const main = document.getElementById("main");

      document.querySelector(".btn_one").addEventListener("click", function () {
        scroller.scrollTo(main);
      });
    });
  }

  // initialize menu
  new Menu(menuEl);
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

    TweenMax.to("a", 1, {
      opacity: 0,
      y: 30,
      ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay__main", 1, {
      delay: 0.3,
      x: 0,
      ease: Expo.easeInOut,
    });

    setTimeout(() => {
      window.location.href = target;
    }, 2500);
  });
}

// hamb

const menu__btn = document.querySelectorAll("menu__btn");
const hamb__btn = document.querySelector(".hamb");
const hamb__menu = document.querySelector(".hamb__menu");

hamb__btn.addEventListener("click", function () {
  if (hamb__menu.classList.contains("active")) {
    outIn();
    setTimeout(() => {
      hamb__btn.classList.remove("active");
      hamb__menu.classList.remove("active");
    }, 1800);
  } else {
    hamb__menu.classList.add("active");
    hamb__btn.classList.add("active");
    inOut();
  }
});

function inOut() {
  TweenMax.staggerTo(
    ".menu__btn",
    1,
    {
      opacity: 1,
      delay: 0.2,
      ease: Expo.easeInOut,
    },
    0.2
  );
  TweenMax.staggerTo(
    ".webgl__box",
    1,
    {
      scaleX: "100%",
      ease: Expo.easeInOut,
    },
    0.2
  );
}

function outIn() {
  TweenMax.staggerTo(
    ".menu__btn",
    1,
    {
      opacity: 0,
      ease: Expo.easeInOut,
    },
    0.2
  );
  TweenMax.staggerTo(
    ".webgl__box",
    1,
    {
      delay: 0.2,
      scaleX: "0%",
      ease: Expo.easeInOut,
    },
    0.2
  );
}

// window resize

window.addEventListener("resize", function () {
  scroller.update();
});

// print label

console.log(`

🅳🅴🆂🅸🅶🅽 🅰🅽🅳 🅲🆁🅰🅵🆃🅴🅳 🅱🆈:


MMMMMMMM               MMMMMMMM                                                           iiii
M:::::::M             M:::::::M                                                          i::::i
M::::::::M           M::::::::M                                                           iiii
M:::::::::M         M:::::::::M
M::::::::::M       M::::::::::M  aaaaaaaaaaaaa     ggggggggg   ggggg   ggggggggg   gggggiiiiiii
M:::::::::::M     M:::::::::::M  a::::::::::::a   g:::::::::ggg::::g  g:::::::::ggg::::gi:::::i
M:::::::M::::M   M::::M:::::::M  aaaaaaaaa:::::a g:::::::::::::::::g g:::::::::::::::::g i::::i
M::::::M M::::M M::::M M::::::M           a::::ag::::::ggggg::::::ggg::::::ggggg::::::gg i::::i
M::::::M  M::::M::::M  M::::::M    aaaaaaa:::::ag:::::g     g:::::g g:::::g     g:::::g  i::::i
M::::::M   M:::::::M   M::::::M  aa::::::::::::ag:::::g     g:::::g g:::::g     g:::::g  i::::i
M::::::M    M:::::M    M::::::M a::::aaaa::::::ag:::::g     g:::::g g:::::g     g:::::g  i::::i
M::::::M     MMMMM     M::::::Ma::::a    a:::::ag::::::g    g:::::g g::::::g    g:::::g  i::::i
M::::::M               M::::::Ma::::a    a:::::ag:::::::ggggg:::::g g:::::::ggggg:::::g i::::::i
M::::::M               M::::::Ma:::::aaaa::::::a g::::::::::::::::g  g::::::::::::::::g i::::::i
M::::::M               M::::::M a::::::::::aa:::a gg::::::::::::::g   gg::::::::::::::g i::::::i
MMMMMMMM               MMMMMMMM  aaaaaaaaaa  aaaa   gggggggg::::::g     gggggggg::::::g iiiiiiii
                                                            g:::::g             g:::::g
                                                gggggg      g:::::g gggggg      g:::::g
                                                g:::::gg   gg:::::g g:::::gg   gg:::::g
                                                 g::::::ggg:::::::g  g::::::ggg:::::::g
                                                  gg:::::::::::::g    gg:::::::::::::g
                                                    ggg::::::ggg        ggg::::::ggg
                                                       gggggg              gggggg

https://github.com/MAGGIx1404
`);
