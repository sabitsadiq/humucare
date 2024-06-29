import data from "./js/data.js";
const container = document.querySelector(".container");
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

container.innerHTML = contents
  .map((content, slideIndex) => {
    const { img, heading, info } = content;
    // console.log(content);
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === content.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }

    //   <article class="">
    //                 <h5>${heading}</h5>
    //                 <p>${info}</p>
    //             </article>
    //             <div class="service-slider-container">
    //                 <img class="service-slider-img" src=${img}
    //                         alt="Nurse and Patient" />
    //                 <div class="dot-container">
    //                     <div class="dot" id="current"></div>
    //                     <div class="dot"></div>
    //                     <div class="dot"></div>
    //                 </div>
    //             </div>
    return `<div class="autoSlider-container">
                
                <article>
                     <div>
                        <h5>${heading}</h5>
                        <p>${info}</p>

                    </div>
                    
                </article>
                <div class="training-slider-container">
                    <img class="training-slider-img" src=${img}
                        alt="Nurse and Patient" />
                    
                </div>
            </div>
                    `;
  })
  .join("");

// const slideshows = document.querySelectorAll('[data-component="slideshow2"]');
// console.log(slideshows);

// slideshows.forEach(initSlideShow);

function initSlideShow(slideshow2) {
  const slides = document.querySelectorAll(
    `#${slideshow2.id} [role="list"] .autoSlider-container`
  ); // Get an array of slides
  // console.log(slides);
  var index = 0,
    time = 6000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    //Go over each slide incrementing the index
    index++;

    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
    // console.log("index", slides[index]);
  }, time);
}

let currentIndex = 0;
const slides = document.querySelectorAll(
  '[data-component="slideshow2"] .autoSlider-container'
);

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  slides[currentIndex].classList.add("leaving");

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.remove("leaving");
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000);

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
    console.log(wrapper.scrollLeft);
    wrapper.scrollLeft +=
      btn.id === "prev" ? -firstImageWidth : firstImageWidth;
    console.log(firstImageWidth);
  });
});

const handleShowRegistration = () => {
  body.classList.add(blur);
  console.log("show register");
  console.log(body);
};
const classNames = [
  "hero",
  "about",
  "testimonials",
  "why-humucare",
  "training-course",
  "form",
];

const addHideClass = () => {
  // classNames.forEach((className) => {
  //   document.querySelectorAll(`.${className}`).forEach((element) => {
  //     element.classList.add("hide");
  //   });
  // });
  form.classList.add("show");
  sessionStorage.setItem("form", "show");
};

registerBtn.addEventListener("click", addHideClass);
