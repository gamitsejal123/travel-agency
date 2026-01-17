// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
}); 

//slide-btn
   const wrapper = document.querySelector(".card-wrapper");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  // ✅ Initial state: RIGHT button active
  rightBtn.classList.add("active");
  leftBtn.classList.remove("active");

  function getScrollAmount() {
    const card = wrapper.querySelector(".card");
    return card.offsetWidth + 30;
  }

  rightBtn.addEventListener("click", () => {
    wrapper.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth"
    });

    rightBtn.classList.add("active");
    leftBtn.classList.remove("active");
  });

  leftBtn.addEventListener("click", () => {
    wrapper.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth"
    });

    leftBtn.classList.add("active");
    rightBtn.classList.remove("active");
  });





