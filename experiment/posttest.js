
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
      question: "Which type of mix design gives the lean concrete mix?",
      answers: {
        a: "Nominal Mix",
        b: "Design mix",
        c: "Standard mix",
        d: "None of the above"
      },
      correctAnswer: "b"
    },

    {
      question: "The volume of coarse aggregate can be reduced by pumping the concrete.  ",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },

    {
      question: "The addition of super plasticizers reduces the water quantity requirement.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Select the correct one. <br>Addition of plasticizers to the concrete<br>1) Increases the cement content<br>2) Reduces the water content<br>3) Increases the degree of workability<br>",
      answers: {
        a: "1 and 2",
        b: "1,2 and 3",
        c: "2 and 3",
        d: "1 and 3"
      },
      correctAnswer: "c"
    },
    {
      question: "In mix design for every 25mm (above 50mm) variation in slump, the water content increases by",
      answers: {
        a: "1%",
        b: "2%",
        c: "3%",
        d: "5%"
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
