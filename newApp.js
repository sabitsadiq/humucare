import data from "./js/data.js";
const container = document.querySelector(".training-course-detail");
const wrapper = document.querySelector(".service-slider-container");
const arrowBtns = document.querySelectorAll(".service-dot-container .dot");
const form = document.querySelector(".form");
const firstImageWidth = document.querySelector(
  ".service-slider-img"
).offsetWidth;
console.log(arrowBtns, firstImageWidth, wrapper.scrollLeft);
// console.log(main);
const registerBtn = document.getElementById("registerBtn");

let contents = [...data];
// console.log("contents", contents);

// container.innerHTML = contents
//   .map((content, slideIndex) => {
//     const { img, heading, info } = content;
//     return `<div class="autoSlider-container">

//                 <article>
//                      <div>
//                         <h5>${heading}</h5>
//                         <p>${info}</p>

//                     </div>

//                 </article>
//                 <div class="training-slider-container">
//                     <img class="training-slider-img" src=${img}
//                         alt="Nurse and Patient" />

//                 </div>
//             </div>
//                     `;
//   })
//   .join("");

let currentSlideIndex = 0;
const slides = document.querySelectorAll(
  '[data-component="slideshow2"] .autoSlider-container'
);
const dotsContainer = document.querySelector(".dots-container");

// Create dots
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);

  // Add click event to navigate to the corresponding slide
  dot.addEventListener("click", () => {
    currentSlideIndex = index;
    updateSlides();
  });
});

const dots = document.querySelectorAll(".dot");
dots[currentSlideIndex].classList.add("active");

function showNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  console.log({ currentSlideIndex });
  updateSlides();
}

function updateSlides() {
  slides.forEach((slide, index) => {
    // slide.classList.remove("active", "leaving", "entering");
    if (index === currentSlideIndex) {
      console.log("mayaaaa active");
      slide.classList.add("active");
      // slide.classList.add("entering");
      slide.classList.remove("leaving");
    } else if (slide.classList.contains("active")) {
      console.log("mayaa leaving");
      slide.classList.add("leaving");
      slide.classList.remove("active");
    } else {
      slide.classList.remove("leaving");
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlideIndex);
  });
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

slides.forEach((slide) => {
  slide.addEventListener("animationend", () => {
    slide.classList.remove("leaving", "entering");
  });
});

// arrowBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn.id);
//     console.log(wrapper.scrollLeft);
//     wrapper.scrollLeft +=
//       btn.id === "prev" ? -firstImageWidth : firstImageWidth;
//     console.log(firstImageWidth);
//   });
// });

/* mobile navbar */
const mobileNav = document.getElementById("mobileNav");

console.log(mobileNav);
mobileNav.addEventListener("click", () => {
  let navLink = document.querySelector(".nav-links");
  const about = document.querySelector(".about");
  const hero = document.querySelector(".hero");
  if (navLink.style.transform === "translateX(0%)") {
    navLink.style.transform = "translateX(-100%)";
    about.style.opacity = "1";
    hero.style.opacity = "1";
  } else {
    navLink.style.transform = "translateX(0%)";
    about.style.opacity = "0";
    hero.style.opacity = "0";
  }
});
function toggleNavbar() {}
