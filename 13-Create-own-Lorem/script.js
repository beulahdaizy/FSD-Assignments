const text = [
  `The cat napped peacefully on the windowsill as the rain pattered outside.`,
  "In the quiet forest, the leaves rustled softly with the whisper of the wind.",
  "She found an old, weathered map in the attic, hinting at hidden treasures.",
  "The aroma of freshly baked bread wafted through the cozy kitchen.",
  "Beneath the starry night sky, campers gathered around the crackling campfire.",
  "The antique bookstore was a labyrinth of forgotten stories and dusty tomes.",
  "A burst of laughter echoed from the children playing in the sun-drenched park.",
  "As the sun dipped below the horizon, the city skyline lit up with a golden glow.",
  "The scientist meticulously examined the intricate patterns under the microscope.",
  "Lost in thought, he absentmindedly strolled along the pebbled beach, listening to the waves.",
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
