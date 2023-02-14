const section1 = document.querySelector("#section--1");
const btnToScrool = document.querySelector(".btn--scroll-to");
const navLinks = document.querySelector(".nav__links");
const footerNav = document.querySelector(".footer__nav");
const nav = document.querySelector(".nav");
const logos = document.querySelectorAll(".logo__simform");
////////////////////////////scrool effect/////////////////////////////
logos.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#header").scrollIntoView({ behavior: "smooth" });
  });
});
btnToScrool.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});
navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
footerNav.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("footer__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//////////////////////////Image slider///////////////////////////
const slide = function () {
  const slidLeft = document.querySelector(".slider__btn--left");
  const slidRight = document.querySelector(".slider__btn--right");
  const slide = document.querySelectorAll(".slide");
  const total = slide.length;
  let current = 0;
  slidRight.addEventListener("click", () => {
    current = (current + 1) % total;
    slide.forEach((e, index) => {
      e.style.transform = `translateX(${(index - current) * 100}%)`;
    });
  });
  slidLeft.addEventListener("click", () => {
    if (current < 1) {
      current = (total - current - 1) % total;
    } else {
      current = (current - 1) % total;
    }
    slide.forEach((e, index) => {
      e.style.transform = `translateX(${(index - current) * 100}%)`;
    });
  });
};
slide();

///////////////////////sticky navbar//////////////////////

const header = document.querySelector(".header");
const navbarHeight = nav.getBoundingClientRect().height;

const makeSticky = (e) => {
  const [obj] = e;
  if (obj.isIntersecting) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
};

const headerObserver = new IntersectionObserver(makeSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight}px`,
});

headerObserver.observe(header);
