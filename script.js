document.addEventListener("DOMContentLoaded", function () {
    const ratingsContainer = document.getElementById("ratings-container");
    const button = document.getElementById("button");
    const mainContainer = document.getElementById("main-container");
  
    let selectedRating = "";
  
    ratingsContainer.addEventListener("click", (event) => {
      const ratingElement = event.target.closest(".ratings");
      if (ratingElement) {
        selectedRating = ratingElement.querySelector("p").textContent;
        resetActive();
        ratingElement.classList.add("active");
      }
    });
  
    button.addEventListener("click", () => {
      if (selectedRating) {
        mainContainer.innerHTML = `
          <h1 class="feedback">Your Valuable Feedback Received!</h1>
          <p class="feedback">You selected: ${selectedRating}</p>
          <p class="feedback-reaction">We genuinely appreciate your input and will use it to enhance our services.</p>
        `;
      }
    });
  
    function resetActive() {
      document.querySelectorAll(".ratings").forEach((rating) => {
        rating.classList.remove("active");
      });
    }
  });