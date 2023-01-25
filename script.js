const submitButton = document.getElementById("submit-button");
const quizForm = document.getElementById("quiz-form");
const resultDiv = document.getElementById("result");
const personalityTypeSpan = document.getElementById("personality-type");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateForm()) {
    calculateResult();
  }
});

function validateForm() {
  let isValid = true;
  // Loop through all the questions
  for (let i = 1; i <= 5; i++) {
    const question = document.getElementById(`question-${i}`);
    const selectedAnswer = question.querySelector('input[name="question-${i}"]:checked');
    // If no answer is selected, add an error class and set isValid to false
    if (!selectedAnswer) {
      question.classList.add("error");
      isValid = false;
    } else {
      question.classList.remove("error");
    }
  }
  return isValid;
}

function calculateResult() {
  let personalityType = "";

  const question1 = document.querySelector('input[name="question-1"]:checked').value;
  const question2 = document.querySelector('input[name="question-2"]:checked').value;
  const question3 = document.querySelector('input[name="question-3"]:checked').value;
  const question4 = document.querySelector('input[name="question-4"]:checked').value;
  const question5 = document.querySelector('input[name="question-5"]:checked').value;
  
  if (question1 === "blue" && question2 === "dog") {
    personalityType = "Type A";
  } else if (question1 === "red" && question2 === "cat") {
    personalityType = "Type B";
  } 
  
  personalityTypeSpan.innerHTML = personalityType;
  quizForm.style.display = "none";
  resultDiv.style.display = "block";
}