const quizForm = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit-button");

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
