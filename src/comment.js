//GAME STATUS
let gameProgress = "="
let keyCheck = false


//answers that show up on webpage
let answers = Array.from(document.getElementsByClassName('answer-choice'))
const ans1 = document.querySelector('.ans1')
const ans2 = document.querySelector('.ans2')
const ans3 = document.querySelector('.ans3')
const ans4 = document.querySelector('.ans4')

//RETREIVE QUESTIONS
const newQuestion = async ()  => {
  keyCheck = false

  let response = await questions.get(category.innerHTML)
  
  //Questions and Category arrays
  let showCategory = response.data.results[0].categories
  let showQuestions = response.data.results[0].questions

  //Answer Arrays
  letShowAnswer1 = response.data.results[0].answer
  letShowAnswer2 = response.data.results[1].choices
  letShowAnswer3 = response.data.results[2].choices
  letShowAnswer4 = response.data.results[3].choices

  //API
  category.innerHTML = showCategory
  question.innerHTML = showQuestions
  ans1.innerHTML = showAnswer1
  ans2.innerHTML = showAnswer2
  ans3.innerHTML = showAnswer3
  ans4.innerHTML = showAnswer4
};
  //game progress