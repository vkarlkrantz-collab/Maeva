const frågor = [
  {
    fråga: "Var vill du ha växten?",
    svar: [
      { text: "Inomhus", type: "Monstera" },
      { text: "Utomhus", type: "Rosor" }
    ]
  },
  {
    fråga: "Hur mycket vill du sköta om den?",
    svar: [
      { text: "Lite", type: "Basilika" },
      { text: "Medel", type: "Tomater" },
      { text: "Mycket", type: "Pioner" }
    ]
  },
  {
    fråga: "Vill du ha något dekorativt – stora blad eller blommor?",
    svar: [
      { text: "Stora blad", type: "Elefantöra" },
      { text: "Blommor", type: "Rosor" }
    ]
  }
];

let nuvarandeFråga = 0;
let valdaSvar = [];

// Matcha ID-namn med HTML
const frågaEl = document.getElementById("fråga");
const svarEl = document.getElementById("svar");
const nästaKnapp = document.getElementById("nästaFråga");
const resultatEl = document.getElementById("resultat");

function visaFråga() {
  svarEl.innerHTML = "";
  const q = frågor[nuvarandeFråga];
  frågaEl.innerText = q.fråga;

  q.svar.forEach(alternativ => {
    const knapp = document.createElement("button");
    knapp.innerText = alternativ.text;
    knapp.addEventListener("click", () => väljSvar(alternativ.type));
    svarEl.appendChild(knapp);
  });
}

function väljSvar(type) {
  valdaSvar.push(type);
  nuvarandeFråga++;
  if (nuvarandeFråga < frågor.length) {
    visaFråga();
  } else {
    visaResultat();
  }
}

function visaResultat() {
  frågaEl.classList.add("gömd");
  svarEl.classList.add("gömd");
  nästaKnapp.classList.add("gömd");

  const counts = {};
  valdaSvar.forEach(x => counts[x] = (counts[x] || 0) + 1);
  const vinnare = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  resultatEl.innerText = `Den växt som passar dig bäst är: ${vinnare}! 🌱`;
  resultatEl.classList.remove("gömd");
}

// Starta quizet
visaFråga();
