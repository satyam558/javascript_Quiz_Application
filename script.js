const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin" ,"Madrid" ,"Paris" ,"Rome"],
      answer: "Paris",
    },
    {
      question: "Who wrote Romeo and Juliet?",
      options: ["Charles Dickens" , "Jane Austen" , "William Shakespeare" ,"Mark Twain"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth" , "Mars" , "Jupiter" , "Venus"],
      answer: "Jupiter",
    },
    {
      question: "What year did World War II end?",
      options: ["1945" , "1918" , "1978" , "1963"],
      answer: "1945",
    },
  ];
  
  
  let index = 0,
    score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("opitions");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    let q = questions[index]; 
  
    questionEl.textContent = q.question;
  
    optionsEl.innerHTML = "";
  
    nextBtn.disabled = true;
  
    q.options.forEach((opt) => {
      let btn = document.createElement("button");
      btn.innerHTML = opt; 
      btn.className = "option";
      btn.onclick = () => checkAnswer(btn, opt);
      optionsEl.appendChild(btn); 
    });
  }
 
  function checkAnswer(btn, selected) {
    let correct = questions[index].answer;
  
    btn.classList.add(selected === correct ? "bg-success" : "bg-danger");
  
    if (selected === correct) {
      score++;
    }

    if(selected){
      nextBtn.style.display="block";
    }
  
    document.querySelectorAll(".option").forEach((b) => (b.disabled = true));
  
    nextBtn.disabled = false;
  }
  
  nextBtn.onclick = () => {
    index++; 
  
    if (index < questions.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Completed";
      optionsEl.innerHTML = ""; 
      nextBtn.style.display = "none"; 
      scoreEl.textContent = `Your Score : ${score}/${questions.length}`; 
      scoreEl.classList.remove("d-none");
    }
  };

loadQuestion();