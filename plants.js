document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".plantaBild");
    const button = document.getElementById("bytplanta");
    let currentIndex = 0;
  
 
images[currentIndex].classList.add("active");
button.addEventListener("click", () => {
images[currentIndex].classList.remove("active");
currentIndex = (currentIndex + 1) % images.length;
images[currentIndex].classList.add("active");
});});
  