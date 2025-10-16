document.addEventListener("DOMContentLoaded", () => {
  fetch("Header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      const hamburger = document.querySelector(".hamburger");
      const meny = document.querySelector(".meny");

      if (hamburger && meny) {
        hamburger.addEventListener("click", () => {
          meny.classList.toggle("open");
        });
      }
    });
});
