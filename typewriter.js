"use strict";

let text = document.querySelector(".typewritten").innerText;
let origin = document.querySelector(".typewritten");

origin.innerHTML = "";

const textArray = [];

for (let i = 0; i < text.length; i++) {
  textArray.push(text.charAt(i));
}

let e = 0;

function init() {
  if (e < textArray.length) {
    origin.innerHTML += textArray[e];
  }
  addLetter(e);
  e++;
}

function addLetter(e) {
  setTimeout(init, 500);
}

init();
