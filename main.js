const quizContainer = document.querySelector(".quiz");
const form = document.querySelector(".quiz-form");
const title = document.querySelector(".intro h2");
const showQuestionButton = document.querySelector(".show-quiz");

// correct answers
const correctAnswers = ["A", "A", "A", "B", "A", "B", "A", "B", "D", "C"];

// show quiz
showQuestionButton.addEventListener("click", (e) => {
  quizContainer.classList.remove("d-none");
  title.classList.remove("text-secondary");
  title.classList.add("text-primary");
  e.target.classList.add("d-none");
});

// event listener
form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();

    const userAnswers = [
      form.q1.value,
      form.q2.value,
      form.q3.value,
      form.q4.value,
      form.q5.value,
      form.q6.value,
      form.q7.value,
      form.q8.value,
      form.q9.value,
      form.q10.value,
    ];

    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score += 10;
      }
    });

    const result = document.querySelector(".result");
    result.classList.remove("d-none");

    const resultSpan = result.querySelector("span");

    scrollTo(0, 0);

    let output = 0;

    const timer = setInterval(() => {
      resultSpan.innerText = `${output}%`;
      if (output === score) {
        clearInterval(timer);
      } else {
        output++;
      }
    });
  },
  3000
);
