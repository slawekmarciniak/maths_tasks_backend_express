const questionContainer = document.querySelector(".question");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const pointsContainer = document.querySelector(".points");

function fillQuestion(data) {
  pointsContainer.textContent = data.points;
  questionContainer.textContent = data.currentQuestion.question;
  answer1.textContent = data.currentQuestion.answers[0];
  answer2.textContent = data.currentQuestion.answers[1];
  answer3.textContent = data.currentQuestion.answers[2];
  answer4.textContent = data.currentQuestion.answers[3];
}

function showNextQuestion() {
  fetch("/question", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      fillQuestion(data);
    });
}

function winGame() {
  window.alert("You won! Congratulations");
  showNextQuestion();
}

function endGame() {
  window.alert("You lose :( try again :)");
  showNextQuestion();
}

function handleData(data) {
  console.log(data.winner);
  pointsContainer.textContent = data.points;
  if (data.winner) {
    winGame();
  }

  if (!data.correct) {
    endGame();
  }

  showNextQuestion();
}

function sendAnswer(answer) {
  fetch(`/answer/${answer}`, {
    method: "POST",
  })
    .then((r) => r.json())
    .then((data) => handleData(data));
}

answer1.addEventListener("click", () => {
  let answer = "0";
  sendAnswer(answer);
});
answer2.addEventListener("click", () => {
  let answer = "1";
  sendAnswer(answer);
});
answer3.addEventListener("click", () => {
  let answer = "2";
  sendAnswer(answer);
});
answer4.addEventListener("click", () => {
  let answer = "3";
  sendAnswer(answer);
});

showNextQuestion();
