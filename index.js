const firstContainer = document.querySelector(".first-content");
const secondContainer = document.querySelector(".second-content");
const ratingOptions = document.querySelectorAll(".rating-button");
const submitButton = document.getElementById("submit-button");
const finalRating = document.getElementById("customer-rating");

submitButton.addEventListener("click", () => {
  secondContainer.classList.remove("hidden");
  firstContainer.classList.add("hidden");
});

ratingOptions.forEach((options) => {
  options.addEventListener("click", () => {
    finalRating.innerHTML = options.innerHTML;
  });
});

ratingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    ratingOptions.forEach((el) => el.classList.remove("selected"));
    option.classList.add("selected");
  });
});
