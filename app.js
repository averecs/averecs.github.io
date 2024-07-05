const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  // Carousel indicators
  const carouselWhy = document.getElementById("why-slider");
  const whyIndicators = document.querySelectorAll(".why .indicator");
  const whyBubbles = document.querySelectorAll(".why .bubble");
  const carouselOurTeam = document.getElementById("our-team-slider");
  const ourTeamIndicators = document.querySelectorAll(".our-team .indicator");
  const ourTeamCards = document.querySelectorAll(".our-team .card");

  carouselWhy.addEventListener("scroll", () => {
    const scrollLeft = carouselWhy.scrollLeft;
    const totalWidth = carouselWhy.scrollWidth - carouselWhy.clientWidth;
    const index = Math.round(
      (scrollLeft / totalWidth) * (whyIndicators.length - 1)
    );

    whyIndicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
      whyBubbles[i].classList.toggle("active", i === index);
    });
  });

  carouselOurTeam.addEventListener("scroll", () => {
    const scrollLeft = carouselOurTeam.scrollLeft;
    const totalWidth =
      carouselOurTeam.scrollWidth - carouselOurTeam.clientWidth;
    const index = Math.round(
      (scrollLeft / totalWidth) * (ourTeamIndicators.length - 1)
    );

    ourTeamIndicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
      ourTeamCards[i].classList.toggle("active", i === index);
    });
  });

  // Get remaining days
  const targetDate = "2024-12-15";

  const target = new Date(targetDate);
  const today = new Date();

  const difference = target.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = days;
});
