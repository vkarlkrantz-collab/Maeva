let plats = "";
let svår = "";
let sol = "";
let odla = "";

// fråga för plats och svårighetsgrad
function väljPlats(val) {
  plats = val;

  const frågaEl = document.getElementById("fråga");
  const svarEl = document.getElementById("svar");

  if (plats === "inomhus") {
    frågaEl.innerText = "Vilken svårighetsgrad vill du ha?";
    svarEl.innerHTML = `
      <button onclick="väljSvår('lättskött')">Lättskött</button>
      <button onclick="väljSvår('medelsvår')">Medelsvår</button>
      <button onclick="väljSvår('svårskött')">Svårskött</button>
    `;
  } else if (plats === "utomhus") {
    frågaEl.innerText = "Vill du odla ätbart eller ha dekorativa växter?";
    svarEl.innerHTML = `
      <button onclick="väljOdla('ätbart')">Ätbart</button>
      <button onclick="väljOdla('vanliga')">Dekorativa växter</button>
    `;
  }
}

// fråga för solmängd
function väljSvår(val) {
  svår = val;
  const frågaEl = document.getElementById("fråga");
  const svarEl = document.getElementById("svar");

  frågaEl.innerText = "Hur mycket sol får platsen?";
  svarEl.innerHTML = `
    <button onclick="väljSol('mycket')">Mycket sol</button>
    <button onclick="väljSol('mellan')">Sol till halvskugga</button>
    <button onclick="väljSol('lite')">Lite sol</button>
  `;
}

function väljSol(val) {
  sol = val;
  visaResultat();
}

// fråga för odla, utomhus
function väljOdla(val) {
  odla = val;
  const frågaEl = document.getElementById("fråga");
  const svarEl = document.getElementById("svar");

  frågaEl.innerText = "Vilken svårighetsgrad vill du ha?";
  svarEl.innerHTML = `
    <button onclick="väljSvårUtomhus('lättskött')">Lättskött</button>
    <button onclick="väljSvårUtomhus('medelsvår')">Medelsvår</button>
    <button onclick="väljSvårUtomhus('svårskött')">Svårskött</button>
  `;
}

// svårighet utomhus
function väljSvårUtomhus(val) {
  svår = val;
  visaResultat();
}

// Visa resultat baserat på val
function visaResultat() {
  const quizEl = document.getElementById("quiz");
  const resultatEl = document.getElementById("resultat");

  quizEl.classList.add("gömd");
  resultatEl.classList.remove("gömd");

  let växt = "";
  let bild = "";

  // inomhusväxter
  if (plats === "inomhus") {
    if (svår === "lättskött" && sol === "lite") {
      växt = "Elefantöra";
      bild = "växt1.jpg";
    } else if (svår === "lättskött" && sol === "mycket") {
      växt = "Monstera";
      bild = "växt2.jpg";
    } else if (svår === "medelsvår" && sol === "mellan") {
      växt = "Hortensia";
      bild = "växt3.jpg";
    } else if (svår === "svårskött" && sol === "mycket") {
      växt = "Orkidé";
      bild = "växt4.jpg";
    } else {
      växt = "Fredskalla";
      bild = "växt5.jpg";
    }
  }

  // utomhusväxter
  else if (plats === "utomhus") {
    if (odla === "ätbart" && svår === "lättskött") {
      växt = "Tomater";
      bild = "växt6.jpg";
    } else if (odla === "ätbart" && svår === "medelsvår") {
      växt = "Paprika";
      bild = "växt7.jpg";
    } else if (odla === "vanliga" && svår === "lättskött") {
      växt = "Ljung";
      bild = "växt8.jpg";
    } else if (odla === "vanliga" && svår === "svårskött") {
      växt = "Rosor";
      bild = "växt9.jpg";
    } else {
      växt = "Lavendel";
      bild = "växt10.jpg";
    }
  }

  // === Visa resultat ===
  resultatEl.innerHTML = `
    <div class="resultat-box">
      <img src="${bild}" alt="${växt}" class="resultatBild">

      <h3> En ${växt} passar dig perfekt</h3>
      <button onclick="window.location.reload()">Börja om</button>
    </div>
  `;
}