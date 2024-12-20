// ========= mobile hamburg menu Start============
const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// ========= mobile hamburg menu End============

// ==============================================
//  sticky Header
// ==============================================

let lastScrollTop = 0;
const headerSticy = document.getElementById("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY; // Use scrollY instead of pageYOffset

  // Hide the header on scroll down, show on scroll up
  if (scrollTop > lastScrollTop) {
    headerSticy.classList.add("hidden");
  } else {
    headerSticy.classList.remove("hidden");
  }

  // Add solid background on scroll
  if (scrollTop > 50) {
    headerSticy.classList.add("solid");
  } else {
    headerSticy.classList.remove("solid");
  }

  lastScrollTop = scrollTop;
});



// ========== counter number section ===========

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});

// ========== counter number section end ===========

// ========= slider ===============

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// ========= slider end ===============

// ===========testimonial swiper========
var swiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperContainerTestimo = document.querySelector(".testimonials-swiper");
swiperContainerTestimo.addEventListener("mouseenter", () =>
  swiper.autoplay.stop()
);
swiperContainerTestimo.addEventListener("mouseleave", () =>
  swiper.autoplay.start()
);

// ===========testimonial swiper end========

// =========================================
//           counter section
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // Lower value = faster animation

  const updateCounter = (counter) => {
    const target = +counter.getAttribute("data-number");
    const count = +counter.innerText.replace("+", "");

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment) + "+";
      setTimeout(() => updateCounter(counter), 20); // 20ms interval for smooth animation
    } else {
      counter.innerText = target + "+"; // Ensure it displays the final value
    }
  };

  const observerOptions = {
    root: null, // Use the viewport
    threshold: 0.5, // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target
          .querySelectorAll(".counter")
          .forEach((counter) => updateCounter(counter));
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    });
  }, observerOptions);

  const counterSection = document.querySelector(".counter-section");
  observer.observe(counterSection); // Observe the section containing the counters
}); // Form Validation // Form Validation // Form Validation

