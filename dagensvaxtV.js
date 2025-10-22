const plantCards = [
  {
    href: "chili.html",
    img: "växtkort (1).png",
    title: "Chili",
    description: ""
  },
  {
    href: "tomatV.html",
    img: "växtkort (2).png",
    title: "Tomat",
    description: ""
  },
  {
    href: "aloeveraV.html",
    img: "växtkort (3).png",
    title: "Aloe Vera",
    description: ""
  },
  {
    href: "elefantöraV.html",
    img: "växtkort (4).png",
    title: "Elefantöra",
    description: ""
  },

 {
  href: "oreganoV.html",
  img: "växtkort (5).png",
  title: "Oregano",
  description: ""
},

{
  href: "pelargonV.html",
  img: "växtkort (6).png",
  title: "Pelargon",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (7).png",
  title: "Vårtkaktus",
  description: ""
},

{
  href: "ovrigavaxterV.html",
  img: "växtkort (8).png",
  title: "Amaryllys",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (9).png",
  title: "Bonsai",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (10).png",
  title: "Fönsterfikus",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (11).png",
  title: "Citronmeliss",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (12).png",
  title: "Gurka",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (13).png",
  title: "Cylindertrattkaktus",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (14).png",
  title: "Agave",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (15).png",
  title: "Hibiskus",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (16).png",
  title: "Duvala",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (17).png",
  title: "Guldkaktus",
  description: ""
},
{
  href: "ovrigavaxterV.html",
  img: "växtkort (18).png",
  title: "Monstera",
  description: ""
}


  // ... fler växter ...
];

function getRandomPlantCard() {
  const randomIndex = Math.floor(Math.random() * plantCards.length);
  return plantCards[randomIndex];
}

function createCard(plant) {
  const container = document.createElement("div");
  container.className = "plant-card";

  const cardContent = document.createElement("div");
  cardContent.className = "card-link";

  const img = document.createElement("img");
  img.src = plant.img;
  img.alt = plant.title;
  img.className = "article-img";

  const h2 = document.createElement("h2");
  h2.textContent = "Dagens växt";

  const h3 = document.createElement("h3");
  h3.textContent = plant.title;

  const p = document.createElement("p");
  p.textContent = plant.description;

  cardContent.appendChild(img);
  cardContent.appendChild(h2);
  cardContent.appendChild(h3);
  cardContent.appendChild(p);

  container.appendChild(cardContent);

  // Klick öppnar modal
  cardContent.addEventListener("click", () => {
    openModal(plant);
  });

  return container;
}

function openModal(plant) {
  const modal = document.getElementById("modal");
  const modalContentDiv = document.getElementById("modal-plant-content");

  modalContentDiv.innerHTML = "<p>Laddar innehåll...</p>";

  fetch(plant.href)
    .then(response => {
      if (!response.ok) throw new Error("Misslyckades med att ladda innehåll");
      return response.text();
    })
    .then(htmlText => {
      modalContentDiv.innerHTML = htmlText;
    })
    .catch(err => {
      modalContentDiv.innerHTML = "<p>Misslyckades med att ladda innehåll.</p>";
      console.error(err);
    });

  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const plant = getRandomPlantCard();
  const card = createCard(plant);
  document.getElementById("random-plant-container").appendChild(card);

  document.querySelector("#modal .close-btn").addEventListener("click", closeModal);

  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  });
});
