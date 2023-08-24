// we will be building array of object which will consist of question and options
console.log("sdfjkl");
const questions = [
  {
    question:
      "Which control is used when the input from the user may extend to several lines?",
    a: "multiline text area",
    b: " check box",
    c: "password control",
    d: "menu control",
    correct: "a",
  },
  {
    question: "The item present within the angled brackets in an HTML tag is",
    a: "identifier",
    b: "data",
    c: "tags",
    d: "text",
    correct: "a",
  },
  {
    question: "Ordered lists are",

    a: "not similar to the bullets created in MS Word",

    b: "not similar to the numbered lists created MS Word",

    c: "similar to the numbered lists created MS Word",

    d: "similar to the bullets created in MS word",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Markup Language",
    c: "Hyper Tabular Markup Language",
    d: "None of these",
    correct: "a",
  },
];
let right = 0;
let wrong = 0;
let index = 0;
let total = questions.length;
const quesBox = document.getElementById("questionBox");
let optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
  if (index == total) {
    return finall();
  }
  let data = questions[index];
  quesBox.innerText = `${index + 1})  ${data.question}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  // if(index<size)
  reset();
  let data = questions[index];
  let ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index = index + 1;
  loadQuestion();
  return;
};

//take answer input from the input provided in the options
//get the ans from the options optionimputs me jo answers aye hai usee hmtrack krenge
function getAnswer() {
  optionInputs.forEach((input) => {
    if (input.checked) {
      return input.value;
    }
  });
}
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
  return;
};
function finall() {
  let store = document.getElementById("box");
  store.innerHTML = `<h2 margin-left=3rem >Thank you for playing the quize</h2>
  <h1>${right} out of ${total} are correct </h1>`;
}
//initial call
loadQuestion();
