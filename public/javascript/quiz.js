let currentQuestionIndex = 0;
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var feedbackEl = document.getElementById("feedback");
  var startBtn = document.getElementById("start");
  var timerEl = document.getElementById("timer");
  var time = 20;
  var timerId;
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
    let isAnswerCorrect = false;
    if (answer !== quizQuestions[currentQuestionIndex].answer) {
      //displays right or wrong answer
      feedbackEl.textContent = "Wrong";
    } else {
      feedbackEl.textContent = "Correct";
      isAnswerCorrect = true;
    } 


    saveProgress(quizQuestions[currentQuestionIndex].id, isAnswerCorrect)
  
    feedbackEl.removeAttribute("class");

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === quizQuestions.length) {
      quizEnd();
      //alert("Quiz is over");
    } else {
      getQuestion(quizQuestions);
      return isAnswerCorrect;
    }
    //store correct answers
    
  }
  async function saveProgress(question_id, isAnswerCorrect) {
      
    // const user_id = req.session.user_id;
     fetch ('/api/progress', {
      method: 'POST',
      body: JSON.stringify({
          user_id:3,
          level_id:1,
          question_id,
          isAnswerCorrect
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then((response) => {
    if(response.ok) {
      fetch("/api/progress/check").then((response) => {
        response.json().then((progressResponse) => {
          const progressArr = progressResponse;
          let count = 0;
          for(let i = 0; i < progressArr.length; i++) {
            if(progressArr[i].isAnswerCorrect ){
              count++;
            } if (count >= 3){
              alert("you pass!")
              break;
            }
          }
         
        })
        
      })
    }
  })
}

  function countDownTimer() {
    time --;
    timerEl.textContent= "Time: " + time;
    // console.log(time);

    if(time <= 0) {
      quizEnd();
    }
  };

  function quizEnd() {
    //clear screen
clearInterval(timerId);
//hide present question
var questionsEl = document.getElementById("quizScreen");
questionsEl.setAttribute("class", "hide");
};