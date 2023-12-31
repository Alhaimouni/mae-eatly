"use strict";

// section one words

let word = document.querySelector("#c-title");
let wordCount = 1;
const values = ["Eating", "Lifestyle", "Sleeping"];
setInterval(() => {
  if (wordCount == 3) {
    word.textContent = values[wordCount];
    word.classList.add("ali");
    wordCount = 0;
  }
  word.textContent = values[wordCount];
  word.classList.add("ali");
  wordCount++;
}, 3000);

//section two slider

const [back2, next2] = document.querySelectorAll(
  ".sec-two .container .btns button"
);

let bdy2 = document.querySelector(".sec-two .container .body");
let items2 = document.querySelectorAll(".sec-two .container .body .item");

next2.addEventListener("click", () => {
  bdy2.removeChild(items2[0]);
  bdy2.appendChild(items2[0]);
  items2 = document.querySelectorAll(".sec-two .container .body .item");
  bdy2 = document.querySelector(".sec-two .container .body");
});

back2.addEventListener("click", () => {
  items2 = document.querySelectorAll(".sec-two .container .body .item");
  bdy2.removeChild(items2[items2.length - 1]);
  bdy2.prepend(items2[items2.length - 1]);
  bdy2 = document.querySelector(".sec-two .container .body");
});

//section five slider

const [back5, next5] = document.querySelectorAll(".slide-5 .btns button");
const pds = document.querySelectorAll(".slide-5 .pd");

let head = 0;
back5.disabled = true;

next5.addEventListener("click", () => {
  if (head > pds.length - 3) {
    next5.disabled = true;
    return;
  }
  back5.disabled = false;
  pds[head].style.display = "none";
  head++;
});

back5.addEventListener("click", () => {
  if (head < 1) {
    back5.disabled = true;
    for (let i = 0; i < pds.length; i++) {
      pds[i].style.display = "inline-block";
    }
    head = 0;
    return;
  }
  next5.disabled = false;
  for (let i = 0; i < pds.length; i++) {
    pds[i].style.display = "none";
  }
  pds[head - 1].style.display = "inline-block";
  pds[head].style.display = "inline-block";
  head--;
});

//section six slider
let currentCardIndex = 0;
const totalCards = document.querySelectorAll(".card").length;

function showCard(index) {
  const cards = document.querySelectorAll(".card");
  const [back, next] = document.querySelectorAll(".slider button");
  if (index >= 0 && index < totalCards) {
    cards.forEach((card) => (card.style.display = "none"));
    cards[index].style.display = "block";
    currentCardIndex = index;
    if (index == 0) {
      back.style.opacity = "0.2";
      back.disabled = true;
    } else {
      back.style.opacity = "1";
      back.disabled = false;
    }
    if (index == totalCards - 1) {
      next.style.opacity = "0.2";
      next.disabled = true;
    } else {
      next.style.opacity = "1.0";
      next.disabled = false;
    }
  }
}

function swapCards(offset) {
  const newIndex = (currentCardIndex + offset + totalCards) % totalCards;
  showCard(newIndex);
}

showCard(currentCardIndex);
