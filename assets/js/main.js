// бургерное меню
const burger = document.querySelector(".burger"),
  modalMenu = document.querySelector(".modal-menu");

burger.addEventListener("click", () => openModal(modalMenu));

// модальные окна с формой заявки
const btnForm = document.querySelectorAll(".js-form"),
  modalForm = document.querySelector(".modal-form");

btnForm.forEach((btn) => {
  btn.addEventListener("click", () => openModal(modalForm));
});

function openModal(modal) {
  modal.classList.add("open");
  modal.addEventListener("click", function (e) {
    const close = modal.querySelector(".close");
    if (e.target == modal) modal.classList.remove("open");
    if (e.target == close) modal.classList.remove("open");
  });
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 1 && screen.width >= 979) {
    $("header").css({
      position: "fixed",
    });
  } else if ($(this).scrollTop() < 140) {
    $("header").css({
      position: "",
    });
  }
});

$(".events__row").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  variableHeight: true,
  touchThreshold: 15,
});

$(".clients__row").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  touchThreshold: 15,
});

$(".review__row").slick({
  variableWidth: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  variableHeight: true,
  touchThreshold: 15,
});

$(".shorts__row").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  touchThreshold: 15,
});

const itemHead = document.querySelectorAll(
  ".individual__row .individual__item"
);

itemHead.forEach((item) => {
  item.addEventListener("click", function () {
    const classNames = this.className.split(" ");
    for (item of itemHead) {
      item.classList.remove("active");
      item.nextElementSibling.classList.remove("active");
      item.parentNode.classList.remove("active");
    }
    if (classNames.includes("active")) {
      this.classList.remove("active");
      this.nextElementSibling.classList.remove("active");
      this.parentNode.classList.remove("active");
    } else {
      this.classList.add("active");
      this.nextElementSibling.classList.add("active");
      this.parentNode.classList.add("active");
    }
  });
});

gsap.from(".one-bg__skulptura", {
  x: -200,
  duration: 1.5,
});

gsap.from(".one-bg__skulptura-shadow", {
  x: -300,
  duration: 1.8,
});

gsap.from(".one-bg__text", {
  x: 50,
  duration: 1.5,
});

gsap.from(".one-bg__glow", {
  x: -150,
  duration: 1,
});

gsap.fromTo(
  ".h1__title span",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.2,
  }
);

gsap.fromTo(
  ".h1__name span",
  {
    y: -50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    delay: 0.5,
  }
);

gsap.from(".circle__fixed_h1", {
  opacity: 0,
  duration: 1,
  delay: 0.1,
});

gsap.from(".circle__fixed_h1 .line__fixed", {
  width: 0,
  delay: 0.3,
  duration: 1,
});

gsap.from(".circle__fixed_sign-up", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from(".circle__fixed_sign-up .line__fixed", {
  width: 0,
  delay: 0.7,
  duration: 1,
});

gsap.from(".one__sign-up__btn", {
  opacity: 1,
  x: -100,
  duration: 1,
});

gsap.from(".one__sign-up__text", {
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  delay: 1,
});

gsap.to(".two__circle-one", {
  scrollTrigger: {
    trigger: ".one",
    // markers: true,
    start: "top",
    end: "2000px",
    scrub: true,
  },
  rotation: -10,
});

gsap.to(".two__circle-two", {
  scrollTrigger: {
    trigger: ".one",
    // markers: true,
    start: "500px",
    end: "1700px",
    scrub: true,
  },
  rotation: 70,
});

gsap.from(".two__img img", {
  scrollTrigger: {
    trigger: ".one",
    // markers: true,
    start: "bottom center",
  },
  scale: 2,
  opacity: 0,
});

gsap.from(".two__img-bg", {
  scrollTrigger: {
    trigger: ".one",
    // markers: true,
    start: "bottom",
    scrub: true,
  },
  opacity: 0,
  scale: 0,
  delay: 2,
});

if (window.innerWidth > 743) {
  gsap.from(".two__text", {
    scrollTrigger: {
      trigger: ".one",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    opacity: 0,
    duration: 2,
    delay: 2,
  });

  gsap.from(".two__text_one", {
    scrollTrigger: {
      trigger: ".one",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    x: 300,
    duration: 2,
    delay: 2,
  });

  gsap.from(".two__text_two", {
    scrollTrigger: {
      trigger: ".one",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    x: -300,
    duration: 2,
    delay: 2,
  });
} else {
  gsap.from(".two__text", {
    scrollTrigger: {
      trigger: ".two",
      start: "-=300px top",
      end: "-=100px top",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    duration: 2,
    delay: 2,
  });

  gsap.from(".two__text_one", {
    scrollTrigger: {
      trigger: ".two",
      start: "-=300px top",
      end: "-=100px top",
      // markers: true,
      scrub: true,
    },
    x: 300,
    duration: 2,
    delay: 2,
  });

  gsap.from(".two__text_two", {
    scrollTrigger: {
      trigger: ".two",
      start: "-=300px top",
      end: "-=100px top",
      // markers: true,
      scrub: true,
    },
    x: -300,
    duration: 2,
    delay: 2,
  });
}

gsap.from(".three__item", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "top bottom",
  },
  opacity: 0,
  y: -100,
});

gsap.from(".three__img img", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "top bottom",
  },
  opacity: 0,
  rotation: -15,
  scale: 4,
  x: -70,
});

gsap.from(".three__title", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "top bottom",
  },
  opacity: 0,
  x: -100,
});

gsap.from(".three__hr", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "top bottom",
  },
  opacity: 0,
  x: -100,
});

gsap.from(".three__text", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "top bottom",
  },
  opacity: 0,
  x: -100,
});

let textAbs = new SplitType(".title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

if (window.innerWidth > 1365) {
  gsap.from(textAbs.chars, {
    scrollTrigger: {
      trigger: ".three",
      start: "-=50px center",
      end: "center",
      // markers: true,
    },
    opacity: 0,
    y: -200,
    delay: 1,
    stagger: 0.1,
  });
} else {
  gsap.from(textAbs.chars, {
    scrollTrigger: {
      trigger: ".three",
      start: "-40%",
      end: "-10%",
      // markers: true,
    },
    opacity: 0,
    y: -200,
    delay: 1,
    stagger: 0.1,
  });
}

gsap.from(".four__bg-top", {
  scrollTrigger: {
    trigger: ".three",
    start: "center center",
    // markers: true,
    scrub: true,
  },
  x: -700,
});

gsap.from(".four__bg-bottom", {
  scrollTrigger: {
    trigger: ".three",
    start: "center center",
    // markers: true,
    scrub: true,
  },
  x: 700,
});

gsap.from(".five__item_last", {
  scrollTrigger: {
    trigger: ".four",
    start: "top",
    end: "center",
    // markers: true,
  },
  y: -350,
  opacity: 0,
});

gsap.from(".five__item svg", {
  scrollTrigger: {
    trigger: ".four",
    start: "top",
    end: "center",
    // markers: true,
  },
  y: 100,
  opacity: 0,
});

let five = new SplitType(".five__title", {
  types: "lines, words, chars",
  tagName: "span",
});

if (window.innerWidth > 743) {
gsap.from(five.chars, {
  scrollTrigger: {
    trigger: ".four",
    start: "top",
    end: "center",
    // markers: true,
  },
  opacity: 0.3,
  ease: "power1.out",
  stagger: 0.1,
});
} else {
  gsap.from(five.chars, {
    scrollTrigger: {
      trigger: ".four",
      start: "top",
      end: "-=50px center",
      // markers: true,
    },
    opacity: 0.3,
    ease: "power1.out",
    stagger: 0.1,
  });
}

if (window.innerWidth > 743) {
  gsap.from(".individual__item", {
    scrollTrigger: {
      trigger: ".five",
      start: "top center",
      end: "top bottom",
      // markers: true,
    },
    opacity: 0,
    x: -70,
  });
} else {
  gsap.from(".individual__item_one", {
    scrollTrigger: {
      trigger: ".five",
      start: "center center",
      // markers: true,
    },
    opacity: 0,
    x: -70,
  });
  gsap.from(".individual__item_two", {
    scrollTrigger: {
      trigger: ".five",
      start: "center center",
      // markers: true,
    },
    opacity: 0,
    x: -70,
    delay: 0.5,
  });
  gsap.from(".individual__item_three", {
    scrollTrigger: {
      trigger: ".five",
      start: "center center",
      // markers: true,
    },
    opacity: 0,
    x: -70,
    delay: 1,
  });
}

let textFive = new SplitType(".five .title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(textFive.chars, {
  scrollTrigger: {
    trigger: ".five",
    start: "top center",
    end: "center center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 1,
  stagger: 0.1,
});

gsap.to(".five__bg-bottom", {
  scrollTrigger: {
    trigger: ".five",
    start: "center top",
    // markers: true,
    scrub: true,
  },
  x: -270,
  opacity: 0,
});

gsap.from(".team__title", {
  scrollTrigger: {
    trigger: ".six",
    start: "top center",
    // markers: true,
  },
  x: -1000,
  opacity: 0,
  duration: 1,
});

gsap.from(".team__item", {
  scrollTrigger: {
    trigger: ".six",
    start: "top center",
    // markers: true,
  },
  stagger: 0.1,
  opacity: 0,
  y: -610,
  delay: 1,
  duration: 1.5,
});

let textSix = new SplitType(".six .title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(textSix.chars, {
  scrollTrigger: {
    trigger: ".six",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 1,
  stagger: 0.1,
});

gsap.from(".events__item", {
  scrollTrigger: {
    trigger: ".seven",
    start: "top bottom",
    // markers: true,
  },
  x: 30,
  opacity: 0,
});

let textSeven = new SplitType(".seven .title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(textSeven.chars, {
  scrollTrigger: {
    trigger: ".seven",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 1,
  stagger: 0.1,
});

gsap.from(".clients__row", {
  scrollTrigger: {
    trigger: ".eight",
    start: "top bottom",
    // markers: true,
  },
  opacity: 0,
  x: -300,
});

let textEight = new SplitType(".eight .title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(textEight.chars, {
  scrollTrigger: {
    trigger: ".eight",
    start: "top bottom",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 0.5,
  stagger: 0.1,
});

gsap.from(".review__bg-text", {
  scrollTrigger: {
    trigger: ".review",
    start: "top bottom",
    // markers: true,
    scrub: true,
  },
  x: 300,
});

gsap.from(".review__input", {
  scrollTrigger: {
    trigger: ".review",
    start: "top center",
    // markers: true,
  },
  y: 30,
  opacity: 0,
});

let textReview = new SplitType(".review .title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(textReview.chars, {
  scrollTrigger: {
    trigger: ".review",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 1,
  stagger: 0.1,
});

gsap.from(".shorts__bg-text", {
  scrollTrigger: {
    trigger: ".shorts",
    start: "top bottom",
    // markers: true,
    scrub: true,
  },
  x: 300,
});

gsap.from(".shorts__item", {
  scrollTrigger: {
    trigger: ".shorts",
    start: "top center",
    // markers: true,
  },
  x: -100,
  opacity: 0,
});

let textShorts = new SplitType(".shorts .title-absolute", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(textShorts.chars, {
  scrollTrigger: {
    trigger: ".shorts",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  y: -200,
  delay: 1,
  stagger: 0.1,
});

gsap.from(".about-us__bg-text", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top bottom",
    // markers: true,
  },
  x: 300,
});

if (window.innerWidth > 743) {
  gsap.from(".about-us__one__img", {
    scrollTrigger: {
      trigger: ".about-us",
      start: "top top",
      // markers: true,
    },
    y: 300,
    opacity: 0,
  });
} else {
  gsap.from(".about-us__one__img", {
    scrollTrigger: {
      trigger: ".about-us",
      start: "-=200px top",
      end: "top",
      // markers: true,
    },
    y: 300,
    opacity: 0,
  });
}

gsap.from(".about-us__one__content", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top center",
    // markers: true,
  },
  y: -300,
  opacity: 0,
});

let text1 = new SplitType(".about-us__one__title", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(text1.chars, {
  scrollTrigger: {
    trigger: ".about-us",
    start: "top center",
    // markers: true,
  },
  x: -50,
  opacity: 0,
  delay: 0.5,
  stagger: 0.1,
});

let text2 = new SplitType(".about-us__two__title", {
  types: "lines, words, chars",
  tagName: "span",
});

if (window.innerWidth > 800) {
  gsap.from(text2.chars, {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top center",
      // markers: true,
    },
    x: -50,
    opacity: 0,
    delay: 0.5,
    stagger: 0.1,
  });

  gsap.from(".about-us__two-bg-text", {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top bottom",
      // markers: true,
    },
    x: 300,
  });

  gsap.from(".about-us__two__content", {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top center",
      // markers: true,
    },
    y: -300,
    opacity: 0,
  });

  gsap.from(".about-us__two__img img", {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top center",
      // markers: true,
      scrub: true,
    },
    opacity: 0,
    y: 300,
  });
} else {
  gsap.from(text2.chars, {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top center",
      // markers: true,
    },
    x: -50,
    opacity: 0,
    delay: 0.5,
    stagger: 0.1,
  });

  gsap.from(".about-us__two-bg-text", {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top bottom",
      // markers: true,
    },
    x: 300,
  });

  gsap.from(".about-us__two__content", {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top top",
      // markers: true,
    },
    y: -300,
    opacity: 0,
  });

  gsap.from(".about-us__two__img img", {
    scrollTrigger: {
      trigger: ".about-us__two",
      start: "top bottom",
      // markers: true,
    },
    opacity: 0,
    y: 300,
  });
}

gsap.from(".about-us__three-line", {
  scrollTrigger: {
    trigger: ".about-us__three",
    start: "top center",
    // markers: true,
  },
  rotation: 90,
});

let about_us = new SplitType(".about-us__three__title", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(about_us.words, {
  scrollTrigger: {
    trigger: ".about-us__three",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  duration: 0.1,
  stagger: 0.1,
});

let about_us_p = new SplitType(".about-us__three__text", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(about_us_p.lines, {
  scrollTrigger: {
    trigger: ".about-us__three",
    start: "top center",
    // markers: true,
  },
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "none.out",
  stagger: 0.1,
});

gsap.from(".application__bg-text", {
  scrollTrigger: {
    trigger: ".application",
    start: "top center",
    scrub: true,
    // markers: true,
  },
  x: 300,
  duration: 0.5,
});

gsap.from(".application__row", {
  scrollTrigger: {
    trigger: ".application",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  delay: 0.5,
});

gsap.from(".footer__bg-3", {
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  x: -300,
});

gsap.from(".footer__bg-1", {
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    // markers: true,
  },
  opacity: 0,
  x: 300,
});

let footer_text_1 = new SplitType(".footer__contacts__title", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(footer_text_1.chars, {
  x: -50,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    // markers: true,
  },
});

gsap.from(".footer__contacts__tel", {
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    // markers: true,
  },
  y: "100%",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".footer__contacts__email", {
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    // markers: true,
  },
  y: "100%",
  opacity: 0,
  duration: 0.5,
});

gsap.from(".footer__nav a", {
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    // markers: true,
  },
  x: -50,
  opacity: 0,
});

gsap.to(".header__line div", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "-=100px top",
    end: "top",
    // markers: true,
    scrub: true,
  },
  background: "#fff",
});

gsap.registerPlugin(CSSRulePlugin);

var rule = CSSRulePlugin.getRule(".header__line-left::before"); //get the rule
gsap.to(rule, {
  scrollTrigger: {
    trigger: ".about-us",
    start: "-=100px top",
    end: "top",
    // markers: true,
    scrub: true,
  },
  background: "#fff",
});

gsap.to(".header a", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "-=100px top",
    end: "top",
    // markers: true,
    scrub: true,
  },
  color: "#fff",
});

gsap.to(".header", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "-=100px top",
    end: "top",
    // markers: true,
    scrub: true,
  },
  color: "#fff",
});

gsap.to(".burger__line", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "-=100px top",
    end: "top",
    // markers: true,
    scrub: true,
  },
  background: "#fff",
});

gsap.to(".header__logo path", {
  scrollTrigger: {
    trigger: ".about-us",
    start: "-=100px top",
    end: "top",
    // markers: true,
    scrub: true,
  },
  fill: "#fff",
});
