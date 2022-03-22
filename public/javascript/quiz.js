let currentQuestionIndex = 0;
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var feedbackEl = document.getElementById("feedback");
  var startBtn = document.getElementById("start");

  function getQuestion(questions) {
    let currentQuestion = questions[currentQuestionIndex];

    let questionTitleElement = document.querySelector("#question-title");

    questionTitleElement.textContent = currentQuestion.question;

    // clear out any old question choices
    choicesEl.textContent = "";
    // choicesEl.innerHTML = "";

    currentQuestion.choices.forEach((element, index) => {
      //console.log("element", element);
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      //choiceNode.setAttribute("value", element);
      choiceNode.textContent = index + 1 + ". " + element;

      choiceNode.addEventListener("click", function () {
        questionClick(questions, element);
      });

      choicesEl.appendChild(choiceNode);
      //console.log("choiceNode", choiceNode)
    });
  }

  function questionClick(quizQuestions, answer) {
    if (answer !== quizQuestions[currentQuestionIndex].answer) {
      //displays right or wrong answer
      feedbackEl.textContent = "Wrong";
    } else {
      feedbackEl.textContent = "Correct";
    }

    feedbackEl.removeAttribute("class");

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === quizQuestions.length) {
      quizEnd();
      //alert("Quiz is over");
    } else {
      getQuestion(quizQuestions);
    }
    //store correct answers
    
  }

  // function quizEnd() {
  //   alert("QUIZ IS DONE");
  // }