"use strict";

const reviews = document.querySelectorAll(".review");

reviews.forEach((review) => {
  const starsEl = document.createElement("div");
  starsEl.classList.add("stars");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    star.src = "images/icon-star.svg";
    star.setAttribute("data-attr", `${i + 1}`);

    starsEl.appendChild(star);
  }

  review.appendChild(starsEl);
});
