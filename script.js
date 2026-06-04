document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("news-cards");
  const prevButton = document.querySelector('[data-direction="prev"]');
  const nextButton = document.querySelector('[data-direction="next"]');
  const cardsPerPage = 3;

  if (!slider || !prevButton || !nextButton) {
    return;
  }

  const getSlideWidth = () => {
    return slider.clientWidth || 0;
  };

  const scrollSlider = (direction) => {
    slider.scrollBy({
      left: direction * getSlideWidth(),
      behavior: "smooth",
    });
  };

  prevButton.addEventListener("click", () => scrollSlider(-1));
  nextButton.addEventListener("click", () => scrollSlider(1));
});
