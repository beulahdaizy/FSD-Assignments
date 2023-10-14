const reviews = document.querySelectorAll(".review");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
}

function prevReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
}

nextButton.addEventListener("click", nextReview);
prevButton.addEventListener("click", prevReview);

showReview(currentIndex);
