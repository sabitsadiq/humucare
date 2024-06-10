import data from "./data.js";
const container = document.querySelector(".container");
console.log(container);

let contents = [...data];
console.log("contents", contents);

container.innerHTML = contents
  .map((content, slideIndex) => {
    const { img, heading, info } = content;
    console.log(content);
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

const slideshows = document.querySelectorAll('[data-component="slideshow2"]');
console.log(slideshows);

slideshows.forEach(initSlideShow);

function initSlideShow(slideshow2) {
  const slides = document.querySelectorAll(
    `#${slideshow2.id} [role="list"] .autoSlider-container`
  ); // Get an array of slides
  console.log(slides);
  var index = 0,
    time = 5000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    //Go over each slide incrementing the index
    index++;

    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
    console.log("index", slides[index]);
  }, time);
}
