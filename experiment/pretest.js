
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "For ensuring quality of concrete, use  ",
      answers: {
        a: "Flaky aggregates",
        b: "Coarse aggregates",
        c: "Graded aggregates",
        d: "Single sized aggregates"
      },
      correctAnswer: "c"
    },

    {
      question: "Which of the following is correct?<br>Proper proportioning of concrete, ensures<br>1. Water tightness of the structure<br>2. Desired durability<br>3.Resistance to water",
      answers: {
        a: "1,2 and 3",
        b: "1 and 3",
        c: "2 and 3",
        d: "1 and 2 "
      },
      correctAnswer: "a"
    },

    {
      question: "The grade of concrete not recommended by I.S. : 456, is",
      answers: {
        a: "M300",
        b: "M500",
        c: "M200",
        d: "M400"
      },
      correctAnswer: "b"
    },
    {
        question: "The risk of segregation is more for",
        answers: {
          a: "Larger sized aggregates",
          b: "Wetter mix",
          c: "Coarser mix",
          d: "All the above"
        },
        correctAnswer: "d"
      },
    {
        question: "The maximum amount of dust which may be permitted in aggregates is",
    answers: {
          a: "5% of the total aggregates for low workability with a coarse grading",
          b: "20% of the total aggregates for a mix having high workability with fine grading",
          c: "10% of the total aggregates for low workability with a fine grading",
          d: "All the above"
        },
        correctAnswer: "d"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
