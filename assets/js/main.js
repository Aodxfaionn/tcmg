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

//прикрепляем клик по заголовкам acc-head
$(".individual__row .individual__item").on("click", f_acc);

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $(".individual__row .individual__content").not($(this).next()).slideUp(1000);
  // открываем или скрываем блок под заголовком, по которому кликнули
  $(this).next().slideToggle(1000);
}

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

gsap.fromTo(
  ".two__img img",
  {
    scale: 2,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".one",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    scale: 0.8,
    opacity: 1,
  }
);

gsap.fromTo(
  ".two__img img",
  {
    scale: 0.8,
  },
  {
    scrollTrigger: {
      trigger: ".one",
      // markers: true,
      start: "bottom top",
      scrub: true,
    },
    scale: 1,
  }
);

gsap.from(".two__img-bg", {
  scrollTrigger: {
    trigger: ".one",
    // markers: true,
    start: "bottom top",
    scrub: true,
  },
  stagger: {
    from: "center",
    amount: 0.5,
  },
  opacity: 0,
  scale: 0.8,
  delay: 2,
});

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

gsap.from(".three__item", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "-70%",
    end: "-20%",
  },
  opacity: 0,
  y: -100,
});

gsap.from(".three__img", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "-70%",
    end: "-20%",
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
    start: "-70%",
    end: "-20%",
  },
  opacity: 0,
  x: -100,
});

gsap.from(".three__hr", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "-70%",
    end: "-20%",
  },
  opacity: 0,
  x: -100,
});

gsap.from(".three__text", {
  scrollTrigger: {
    trigger: ".three",
    // markers: true,
    start: "-70%",
    end: "-20%",
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
      markers: true,
      scrub: true,
    },
    opacity: 0,
    y: -200,
    duration: 1,
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
      scrub: true,
    },
    opacity: 0,
    y: -200,
    duration: 2,
    delay: 2,
    stagger: 0.1,
  });
}

// let textFive = new SplitType(".five .title-absolute", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(textFive.chars, {
//   scrollTrigger: {
//     trigger: ".five",
//     start: "+=300px center",
//     end: "+=500px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: -200,
//   stagger: 0.1,
// });

// let textSix = new SplitType(".six .title-absolute", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(textSix.chars, {
//   scrollTrigger: {
//     trigger: ".five",
//     start: "+=950px top",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: -200,
//   duration: 1,
//   stagger: 0.1,
// });

// let textSeven = new SplitType(".seven .title-absolute", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(textSeven.chars, {
//   scrollTrigger: {
//     trigger: ".seven",
//     start: "-=300px top",
//     end: "+=200px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: -200,
//   duration: 0.5,
//   stagger: 0.1,
// });

// let textEight = new SplitType(".eight .title-absolute", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(textEight.chars, {
//   scrollTrigger: {
//     trigger: ".seven",
//     start: "+=200px top",
//     end: "+=200px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: -200,
//   duration: 0.5,
//   stagger: 0.1,
// });

// let textReview = new SplitType(".review .title-absolute", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(textReview.chars, {
//   scrollTrigger: {
//     trigger: ".review",
//     start: "-=150px top",
//     end: "+=100px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: -200,
//   duration: 1,
//   stagger: 0.1,
// });

// let textShorts = new SplitType(".shorts .title-absolute", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(textShorts.chars, {
//   scrollTrigger: {
//     trigger: ".shorts",
//     start: "-=100px top",
//     end: "+=100px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: -200,
//   duration: 1,
//   stagger: 0.1,
// });

// gsap.from(".four__bg-top", {
//   scrollTrigger: {
//     trigger: ".three",
//     start: "top top",
//     end: "+=1000px",
//     // markers: true,
//     scrub: true,
//   },
//   x: -700,
// });

// gsap.from(".four__bg-bottom", {
//   scrollTrigger: {
//     trigger: ".three",
//     start: "top top",
//     end: "+=600px",
//     // markers: true,
//     scrub: true,
//   },
//   x: 700,
// });

// gsap.from(".five__item_last", {
//   scrollTrigger: {
//     trigger: ".four",
//     start: "+=50px top",
//     end: "+=100px",
//     // markers: true,
//     scrub: true,
//   },
//   y: -350,
// });

// gsap.from(".five__item svg", {
//   scrollTrigger: {
//     trigger: ".four",
//     start: "+=250px top",
//     end: "+=200px",
//     // markers: true,
//     scrub: true,
//   },
//   y: 100,
//   opacity: 0,
// });

// let five = new SplitType(".five__title", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(five.chars, {
//   opacity: 0.3,
//   ease: "power1.out",
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".four",
//     start: "+=150px top",
//     end: "+=350px",
//     // markers: true,
//     scrub: true,
//   },
// });

// gsap.from(".individual__item", {
//   scrollTrigger: {
//     trigger: ".five",
//     start: "-=100px top",
//     end: "top +=600px",
//     // markers: true,
//   },
//   opacity: 0,
//   x: -70,
// });

// gsap.from(".five__bg-bottom", {
//   scrollTrigger: {
//     trigger: ".five",
//     start: "top",
//     // markers: true,
//     scrub: true,
//   },
//   x: 170,
// });

// gsap.from(".team__item", {
//   scrollTrigger: {
//     trigger: ".five",
//     start: "+900px top",
//     // markers: true,
//   },
//   stagger: 0.1,
//   opacity: 0,
//   y: -1000,
// });

// gsap.from(".team__title", {
//   scrollTrigger: {
//     trigger: ".five",
//     start: "+=950px top",
//     // markers: true,
//     scrub: true,
//   },
//   stagger: 0.1,
//   x: -100,
//   opacity: 0,
// });

// gsap.from(".events__item", {
//   scrollTrigger: {
//     trigger: ".six",
//     start: "center",
//     end: "bottom",
//     // markers: true,
//   },
//   x: 30,
//   opacity: 0,
// });

// gsap.from(".clients__row", {
//   scrollTrigger: {
//     trigger: ".seven",
//     start: "top center",
//     // markers: true,
//     scrub: true,
//   },
//   x: -300,
// });

// gsap.from(".review__bg-text", {
//   scrollTrigger: {
//     trigger: ".review",
//     start: "-=500px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   x: 170,
// });

// gsap.from(".review__input", {
//   scrollTrigger: {
//     trigger: ".review",
//     start: "-=300px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   y: 30,
//   opacity: 0,
// });

// gsap.from(".shorts__bg-text", {
//   scrollTrigger: {
//     trigger: ".review",
//     start: "-=250px top",
//     // markers: true,
//     scrub: true,
//   },
//   x: 170,
// });

// gsap.from(".shorts__item", {
//   scrollTrigger: {
//     trigger: ".review",
//     start: "+=500px center",
//     bottom: "+=300px bottom",
//     // markers: true,
//     scrub: true,
//   },
//   x: -50,
//   opacity: 0,
// });

// gsap.from(".about-us__bg-text", {
//   scrollTrigger: {
//     trigger: ".shorts",
//     start: "+=150px top",
//     // markers: true,
//     scrub: true,
//   },
//   x: 170,
// });

// gsap.from(".about-us__one__img", {
//   scrollTrigger: {
//     trigger: ".shorts",
//     start: "top",
//     // markers: true,
//     scrub: true,
//   },
//   y: -100,
//   opacity: 0,
// });

// let text1 = new SplitType(".about-us__one__title", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(text1.chars, {
//   scrollTrigger: {
//     trigger: ".about-us__bg-text",
//     start: "-=300px top",
//     end: "+=150px",
//     // markers: true,
//     scrub: true,
//   },
//   x: -200,
//   opacity: 0,
//   duration: 0.5,
//   stagger: 0.1,
// });

// let text2 = new SplitType(".about-us__two__title", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(text2.chars, {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "+=200px top",
//     end: "500px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   x: -200,
//   duration: 0.5,
//   stagger: 0.1,
// });

// gsap.from(".about-us__one__content p", {
//   scrollTrigger: {
//     trigger: ".about-us__bg-text",
//     start: "-=200px top",
//     // markers: true,
//     scrub: true,
//   },
//   stagger: 1,
//   x: -50,
//   opacity: 0,
// });

// gsap.from(".about-us__two__content p", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "+=200px top",
//     // markers: true,
//     scrub: true,
//   },
//   stagger: 1,
//   x: -50,
//   opacity: 0,
// });

// gsap.from(".about-us__two-bg-text", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=150px top",
//     end: "700px",
//     // markers: true,
//     scrub: true,
//   },
//   x: 170,
// });

// gsap.from(".about-us__two__img img", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "+=200px top",
//     end: "1100px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   y: 300,
// });

// gsap.from(".about-us__three-line", {
//   scrollTrigger: {
//     trigger: ".about-us__two",
//     start: "+=150px top",
//     end: "500px",
//     // markers: true,
//     scrub: true,
//   },
//   rotation: 90,
// });

// let about_us = new SplitType(".about-us__three__title", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(about_us.words, {
//   opacity: 0.3,
//   duration: 0.1,
//   stagger: 0.1,

//   scrollTrigger: {
//     trigger: ".about-us__two",
//     start: "+=200px top",
//     end: "+=500px",
//     // markers: true,
//     scrub: true,
//   },
// });

// let about_us_p = new SplitType(".about-us__three__text", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(about_us_p.lines, {
//   y: "100%",
//   opacity: 0,
//   duration: 0.5,
//   ease: "none.out",
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".about-us__two",
//     start: "+=200px top",
//     end: "+=500px",
//     // markers: true,
//     scrub: true,
//   },
// });

// gsap.from(".application__bg-text", {
//   scrollTrigger: {
//     trigger: ".about-us__two",
//     start: "+=350px top",
//     end: "1500px",
//     // markers: true,
//     scrub: true,
//   },
//   x: 170,
// });

// gsap.from(".application__row", {
//   scrollTrigger: {
//     trigger: ".about-us__two",
//     start: "+=500px top",
//     end: "1300px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
// });

// gsap.from(".footer__bg-3", {
//   scrollTrigger: {
//     trigger: ".application__row",
//     start: "-=250px top",
//     end: "700px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   x: -300,
// });

// gsap.from(".footer__bg-1", {
//   scrollTrigger: {
//     trigger: ".application__row",
//     start: "-=250px top",
//     end: "700px",
//     // markers: true,
//     scrub: true,
//   },
//   opacity: 0,
//   x: 100,
// });

// let footer_text_1 = new SplitType(".footer__contacts__title", {
//   types: "lines, words, chars",
//   tagName: "span",
// });

// gsap.from(footer_text_1.chars, {
//   y: "100%",
//   opacity: 0,
//   duration: 0.5,
//   ease: "none.out",
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".application__row",
//     start: "top top",
//     // markers: true,
//     scrub: true,
//   },
// });

// gsap.from(".footer__contacts__tel", {
//   scrollTrigger: {
//     trigger: ".application__row",
//     start: "top top",
//     // markers: true,
//     scrub: true,
//   },
//   y: "100%",
//   opacity: 0,
//   duration: 0.5,
// });

// gsap.from(".footer__contacts__email", {
//   scrollTrigger: {
//     trigger: ".application__row",
//     start: "+=300px top",
//     // markers: true,
//     scrub: true,
//   },
//   y: "100%",
//   opacity: 0,
//   duration: 0.5,
// });

// gsap.from(".footer__nav a", {
//   scrollTrigger: {
//     trigger: ".application__row",
//     pin: true,
//     start: "+=300px",
//     // markers: true,
//     scrub: true,
//   },
//   x: -50,
//   opacity: 0,
//   stagger: 0.1,
// });

// gsap.to(".header__line div", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=100px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   background: "#fff",
// });

// gsap.registerPlugin(CSSRulePlugin);

// var rule = CSSRulePlugin.getRule(".header__line-left::before"); //get the rule
// gsap.to(rule, {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=100px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   background: "#fff",
// });

// gsap.to(".header a", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=100px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   color: "#fff",
// });

// gsap.to(".header", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=100px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   color: "#fff",
// });

// gsap.to(".burger__line", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=100px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   background: "#fff",
// });

// gsap.to(".header__logo path", {
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "-=100px top",
//     end: "top",
//     // markers: true,
//     scrub: true,
//   },
//   fill: "#fff",
// });
