/* Service Slider Service Slider */

const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".service-slider-img > img");
const serviceDots = document.querySelectorAll(".service-dots");
const sliderContent = document.querySelector(".service-articles-wrapper");
const totalImages = images.length;

let currentIndex = 0;

prev.addEventListener("click", () => {
  previousImage();
  scrollSlide(0);
});

next.addEventListener("click", () => {
  nextImage();
  scrollSlide(0);
});

function scrollSlide(direction) {
  console.log(sliderContent.children);
  const slideHeight =
    sliderContent.scrollHeight / sliderContent.children.length;
  let newPosition = currentIndex * -slideHeight + direction * slideHeight;
  // Handle circular scrolling
  if (newPosition > 0) {
    currentIndex = 0;
    newPosition = -(sliderContent.scrollHeight - slideHeight);
  } else if (newPosition < -(sliderContent.scrollHeight - slideHeight)) {
    currentIndex = sliderContent.children.length - 1;
    newPosition = 0;
  }

  sliderContent.style.transform = `translateY(${newPosition}px)`;
  updateDots();
}

function updateDots() {
  serviceDots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

serviceDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    scrollSlide(0); // Trigger scroll to the clicked dot's position
  });
});

updateDots(); // Set initial active dot

function nextImage() {
  images[currentIndex].classList.remove("main");
  if (currentIndex == totalImages - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  images[currentIndex].classList.add("main");
}
function previousImage() {
  console.log(currentIndex, "currentIndex");
  images[currentIndex].classList.remove("main");
  if (currentIndex == 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex--;
  }
  images[currentIndex].classList.add("main");
}

/* Training Slider Training Slider */

const content = document.querySelector(".training-course-details");
const item = document.querySelectorAll(".autoSlider-container");
const pBtn = document.querySelector(".pBtn");
const nBtn = document.querySelector(".nBtn");
const dots = document.querySelectorAll(".dot");

let active = 0;
let itemLength = item.length - 1;

nBtn.onclick = function () {
  if (active + 1 > itemLength) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
pBtn.onclick = function () {
  console.log(active - 1);
  if (active - 1 < 0) {
    active = itemLength;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
let refreshSlider = setInterval(() => {
  nBtn.click();
}, 4000);

function reloadSlider() {
  let checkLeft = item[active].offsetLeft;
  content.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".dot.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    nBtn.click();
  }, 4000);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    active = index;
    reloadSlider();
  });
});

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
    about.style.translate = "1s";
    hero.style.translate = "1s";
  } else {
    navLink.style.transform = "translateX(0%)";
    about.style.opacity = "0";
    hero.style.opacity = "0";
  }
});
function toggleNavbar() {}
