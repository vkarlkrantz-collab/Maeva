document.addEventListener("DOMContentLoaded", () => {
    fetch("Header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      });
  });

  