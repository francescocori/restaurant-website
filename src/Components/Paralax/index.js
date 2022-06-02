import React from "react";
import "./style.css";
const Paralax = () => {
  let atScroll = false;
  let parallaxTitle = document.querySelectorAll(".parallax-title");

  const scrollProgress = () => {
    atScroll = true;
  };

  const raf = () => {
    if (atScroll) {
      parallaxTitle.forEach((element, index) => {
        element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
      });
      atScroll = false;
    }
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  window.addEventListener("scroll", scrollProgress);
  return (
    <div className="body">
      <div class="smooth-scroll-wrapper">
        <div class="content">
          <div class="container">
            <div class="image-container">
              <h2 class="text text-dark">
                <span class="parallax-title">we live in the details</span>
              </h2>
            </div>

            <h2 class="text">
              <span class="parallax-title">we live in the details</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
