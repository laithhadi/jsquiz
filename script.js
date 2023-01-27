const questions = [{
    question: "What is the most popular breed of domestic cat?",
    choices: ["Siamese", "Persian", "Maine Coon", "British Shorthair"],
    correctAnswer: "Persian"
  },
  {
    question: "What is the average lifespan of a domestic cat?",
    choices: ["10 years", "15 years", "20 years", "25 years"],
    correctAnswer: "15 years"
  },
  {
    question: "What is a group of cats called?",
    choices: ["Pack", "Pride", "Clowder", "Herd"],
    correctAnswer: "Clowder"
  },
  {
    question: "What is the term for a female cat?",
    choices: ["Tom", "Queen", "Sire", "Dam"],
    correctAnswer: "Queen"
  },
  {
    question: "What is the term for a neutered male cat?",
    choices: ["Tom", "Queen", "Gib", "Stud"],
    correctAnswer: "Gib"
  },
  {
    question: "What is the term for a spayed female cat?",
    choices: ["Tom", "Molly", "Hen", "Dam"],
    correctAnswer: "Molly"
  },
  {
    question: "What is the most common eye color for cats?",
    choices: ["Blue", "Green", "Yellow", "Orange"],
    correctAnswer: "Yellow"
  },
  {
    question: "How many nipples do cats have on average?",
    choices: ["4", "6", "8", "10"],
    correctAnswer: "8"
  },
  {
    question: "What is the term for a cat that has extra toes?",
    choices: ["Polydactyl", "Hemodactyl", "Polypod", "Hemopod"],
    correctAnswer: "Polydactyl"
  },
  {
    question: "What is the name of the cat breed that is known for its extremely short muzzle?",
    choices: ["Siamese", "Persian", "Munchkin", "British Shorthair"],
    correctAnswer: "Munchkin"
  }
];

// variables to keep track of quiz state
let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

function startQuiz() {
  // show question form and hide start button
  $(".progress").show();
  updateProgressBar();
  $("#question-form").show();
  $("#start-quiz").hide();
  displayCurrentQuestion();
}

function updateProgressBar() {
  let progressBar = document.getElementById("progress-bar");
  progressBar.setAttribute("aria-valuenow", currentQuestion);
  progressBar.style.width = (currentQuestion / totalQuestions) * 100 + "%";
}

// function to display current question and choices
function displayCurrentQuestion() {
  $("#question").text(questions[currentQuestion].question);
  $(".choice-container").empty();

  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let choice = $("<div>")
      .addClass("form-check form-check-inline")
      .append(
        $("<input>")
        .attr("type", "radio")
        .attr("name", "choice")
        .attr("value", questions[currentQuestion].choices[i])
        .addClass("form-check-input")
      )
      .append(
        $("<label>")
        .addClass("form-check-label")
        .text(questions[currentQuestion].choices[i])
      );

    $(".choice-container").append(choice);
  }
}

function nextQuestion(e) {
  e.preventDefault();
  // check if user has selected an answer
  let selected = $("input[name='choice']:checked").val();
  if (!selected) {
    displayErrorMessage("Please select an answer.");
    return;
  }
  // check if answer is correct
  if (selected === questions[currentQuestion].correctAnswer) {
    score++;
  }
  // move to next question
  currentQuestion++;
  updateProgressBar();
  if (currentQuestion === questions.length) {
    // show result
    $("#question-form").hide();
    $("#result-container").show();
    $("#restart-quiz").show();
    $("#result").text("You scored " + score + " out of " + questions.length);
    return;
  }
  displayCurrentQuestion();
};

function previousQuestion(event) {
  event.preventDefault();
  currentQuestion--;
  updateProgressBar();
  if (currentQuestion < 0) {
    currentQuestion = 0;
  }
  displayCurrentQuestion();
}

function displayErrorMessage(msg) {
  var errorToast = document.getElementById("error-toast");
  errorToast.innerHTML = msg;
  errorToast.style.display = "block";
  setTimeout(function () {
    errorToast.style.display = "none";
  }, 3000);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  $("#start-quiz").show();
  $(".progress").hide();
  $("#restart-quiz").hide();
  $("#result-container").hide();
  $("#question-form").hide();
};