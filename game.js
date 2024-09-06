const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "When did Panipat War take place?",
    choice1: "April 21, 1526",
    choice2: "June 17, 1532",
    choice3: "5th October, 1523 ",
    choice4: "8th July, 1524",
    answer: 1
  },
  {
    question:
      "Which state has the longest coastline in India?",
    choice1: "Kerala",
    choice2: "Tamil Nadu",
    choice3: "Gujarat",
    choice4: "West Bengal",
    answer: 3
  },
  {
    question: "Where is Meenakshi Temple?",
    choice1: "Haldwani, Uttarakhand",
    choice2: "Kolkata, West Bengal",
    choice3: "Thiruvananthapuram, Kerala",
    choice4: "Madurai, Tamil Nadu",
    answer: 4
  },
  {
    question: "Arthashastra is written by:",
    choice1: "Kautilya",
    choice2: "Patanjali",
    choice3: "Panini",
    choice4: "Charaka",
    answer: 1
  },
  {
    question: "What is popular as the ‘Gibraltar of India?",
    choice1: "Mysore Palace",
    choice2: "Gwalior Fort",
    choice3: "Red Fort",
    choice4: "Jaisalmer Fort",
    answer: 2
  },
  {
    question: "The famous Ajanta and Ellora Caves are located in",
    choice1: "Karnataka",
    choice2: "Andhra Pradesh",
    choice3: "Gujarat",
    choice4: "Maharastra",
    answer: 4
  },
  {
    question: "Tansen, a great musician of his time, was in the court of –",
    choice1: "Akbar",
    choice2: "Bahadur Shah",
    choice3: "Shah Jahan",
    choice4: "Aurangzeb",
    answer: 1
  },
  {
    question: "Kathakali is traditional dance form of which ",
    choice1: "Origami",
    choice2: "Sumi-e",
    choice3: "Ikebana",
    choice4: "Ukiyo-e",
    answer: 1
  },
  {
    question: "WThe cultural and architectural heritage of the Alhambra is associated with which historical period and culture?",
    choice1: "Medieval European",
    choice2: "Ottoman Turkish",
    choice3: "Moorish Spain",
    choice4: "Byzantine Greek",
    answer: 3
  },
  {
    question: "Which of the following is NOT a site included in the UNESCO World Heritage designation for the Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe?",
    choice1: "The Białowieża Forest",
    choice2: " The Hohe Tauern National Park",
    choice3: "The Hainich National Park",
    choice4: "The Schwarzwald",
    answer: 4
  },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();