const questions = [
    {
      question: "Var vill du ha växten?",
      answers: [
        { text: "Inomhus", type: "Monstera" },
        { text: "Utomhus", type: "Rosor" }
      ]
    },
    {
      question: "Hur mycket vill du sköta om den?",
      answers: [
        { text: "Lite", type: "Basilika" },
        { text: "Medel", type: "Tomater" },
        { text: "Mycket", type: "Pioner" }
      ]
    },
    {
      question: "Vill du ha något dekorativt stora blad eller blommor?",
      answers: [
        { text: "Stora blad", type: "Elefantöra" },
        { text: "Blommor", type: "Rosor" }
      ]
    }
  ];
  
  let currentQuestion = 0;
  let selections = [];
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function showQuestion() {
    answersEl.innerHTML = "";
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
  
    q.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.addEventListener("click", () => selectAnswer(answer.type));
      answersEl.appendChild(button);
    });
  }
  
  function selectAnswer(type) {
    selections.push(type);
    currentQuestion++;
    if(currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.classList.add("hidden");
    answersEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
  
    // Enkel räkning av mest valda typ
    const counts = {};
    selections.forEach(x => counts[x] = (counts[x] || 0) + 1);
    const winner = Object.keys(counts).reduce((a,b) => counts[a] > counts[b] ? a : b);
  
    resultEl.innerText = `Den växt som passar dig bäst är: ${winner}!`;
    resultEl.classList.remove("hidden");
  }
  
  showQuestion();
  