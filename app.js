const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// TODO: finish
// TODO: maybe create different types or animations (css class) and pass it to the observer function

// Our team slide effect indicators
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("our-team-slider");
  const indicators = document.querySelectorAll(".our-team .indicator");

  carousel.addEventListener("scroll", () => {
    const scrollLeft = carousel.scrollLeft;
    const totalWidth = carousel.scrollWidth - carousel.clientWidth;
    const index = Math.round(
      (scrollLeft / totalWidth) * (indicators.length - 1)
    );

    indicators.forEach((indicator, i) =>
      indicator.classList.toggle("active", i === index)
    );
  });
});
