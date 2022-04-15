
const question = document.querySelector("#question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is JavaScript?",
        choice1: "A Web Browser",
        choice2: "A Programming/Scripting Language",
        choice3: "A Game",
        choice4: "An App",
        answer: 2,
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "The <title> tag",
        choice2: "The <body> section",
        choice3: "The <head> section",
        choice4: "Both the <head> section and the <body> section are correct",
        answer: 4,
      },
      {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choice1: '<source = "xxx.js">',
        choice2: '<script href="xxx.js">',
        choice3: '<script name="xxx.js">',
        choice4: '<script src="xxx.js">',
        answer: 4,
      },
      {
        question: "Who created JavaScript and in what year?",
        choice1: "Brendan Eich, 1985",
        choice2: "Guido van Rossum, 1991",
        choice3: "Brendan Eich, 1995",
        choice4: "Guido van Rossum, 1995",
        answer: 3,
      },
      {
        question: "JavaScript is the same as Java.",
        choice1: "True",
        choice2: "False",
        choice3: "Maybe",
        choice4: "All of the above",
        answer: 2,
      },
      {
        question: "JavaScript is case-sensitive.",
        choice1: "True",
        choice2: "False",
        choice3: "Maybe",
        choice4: "Sometimes",
        answer: 1,
      },
      {
        question: "What does this code do? console.log('Hello')",
        choice1: "Deletes 'Hello' on a webpage",
        choice2: "Deletes 'Hello' from a sentence",
        choice3: "Prints 'Hello' on a webpage",
        choice4: "Prints 'Hello' to the console",
        answer: 4,
      },
      {
        question: "When a phrase like 'blue bag' is written as 'blueBag' when used as a variable name, this is called.....",
        choice1: "Donkey's Bag",
        choice2: "Donkey's Tail",
        choice3: "Camel Case",
        choice4: "Camel Tail",
        answer: 3,
      },
      {
        question: "The external JavaScript file must contain the <script> tag.",
        choice1: "True",
        choice2: "False",
        choice3: "Maybe",
        choice4: "Sometimes",
        answer: 2,
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<js>",
        choice3: "<javascript>",
        choice4: "<scripting>",
        answer: 1,
      },
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    setNextQuestion();
};

setNextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      //go to the end page
      return window.location.assign("/end.html");
    }
      questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      setNextQuestion();
    }, 1000);
  });
});

startGame();