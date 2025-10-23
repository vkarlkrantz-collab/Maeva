
  function openAnswer(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeAnswer(id) {
    document.getElementById(id).style.display = 'none';
  }

  window.onclick = function(event) {
    const popups = document.querySelectorAll('.FAQ-popup');
    popups.forEach(popup => {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  }

