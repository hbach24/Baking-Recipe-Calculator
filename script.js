"use strict";

const btn = document.querySelector(".dropdown-btn");
const list = document.querySelector(".dropdown-list");

btn.addEventListener("click", function () {
  if (list.classList.contains("hide")) {
    list.classList.remove("hide");
  } else {
    list.classList.add("hide");
  }
});
