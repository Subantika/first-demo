const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correct: 0
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Jane Austen"],
    correct: 1
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: 1
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: 2
  },
  {
    question: "Which country invented pizza?",
    answers: ["France", "Italy", "USA", "Greece"],
    correct: 1
  },
  {
    question: "What is the capital city of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    answers: ["Central Processing Unit", "Computer Power Unit", "Central Power Utility", "Core Processing Unit"],
    correct: 0
  },
  {
    question: "How many continents are there in the world?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Osmium", "Ozone", "Oxide"],
    correct: 0
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correct: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    correct: 1
  },
  {
    question: "Which language has the most native speakers?",
    answers: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    correct: 1
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: ["90°C", "100°C", "120°C", "80°C"],
    correct: 1
  },
  {
    question: "What is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correct: 2
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: ["India", "Australia", "South Africa", "New Zealand"],
    correct: 1
  }
];


const questionElement = document.getElementById("qs");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("nxt-btn");

let currentQuestion = 0;
let score = 0;



function showQuestion(index) {
  resetState();
  const q = questions[index];

//   questionElement.textContent = q.question;
// questionElement.textContent = `Question ${index + 1} of ${questions.length}: ${q.question}`;
    questionElement.textContent = `${index + 1}. ${q.question}`;
    answerButtons.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.onclick = () => selectAnswer(i);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  answerButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.style.backgroundColor = "#27ae60";
    } else if (i === selected) {
      btn.style.backgroundColor = "#e74c3c";
    }
  });
  if (selected === correct) score++;
  nextButton.style.display = "block";
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.forEach((btn) => {
    btn.disabled = false;
    btn.style.backgroundColor = "#9b59b6";
  });
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showScore();
  }
});

function showScore() {
  questionElement.textContent = `🎉 You scored ${score} out of ${questions.length}`;
   document.querySelector(".ans-btn").style.display = "none";
  nextButton.textContent = "Restart";
  nextButton.style.display = "block";
  nextButton.onclick = () => location.reload();
}

// Start quiz
showQuestion(currentQuestion);

