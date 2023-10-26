// შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const div1 = document.createElement("div");
div1.innerText = "This is a first task";
div1.setAttribute("id", "div-1");
div1.setAttribute("style", "background-color: yellow");
document.body.appendChild(div1);

const btn = document.createElement("button");
btn.setAttribute("id", "btn-1");
btn.setAttribute("style", "background-color: yellow"); //უბრალოდ გასარჩევად დავამატე
btn.innerText = "Click me!";
document.body.appendChild(btn);

const onButtonClick = () => {
  div1.style.display = "none";
};

btn.addEventListener("click", onButtonClick);

// ● შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const div2 = document.createElement("div");
div2.innerText = "This is a second task";
div2.setAttribute("id", "card");
div2.setAttribute("style", "background-color: pink"); //უბრალოდ გასარჩევად დავამატე

const h2 = document.createElement("h2");
h2.innerText = "Gandalf";
div2.appendChild(h2);

const a = document.createElement("a");
a.innerText = "Go to profile";
a.setAttribute("href", "#");
div2.appendChild(a);

document.body.appendChild(div2);

// შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე

// const quiz = document.createElement("form");
// quiz.setAttribute("id", "quiz");

let myQuestions = [
  {
    question: "What is 10/2?",
    answers: ["3", "5", "115"],
    correctAnswer: "5",
  },
  {
    question: "What is 30/3?",
    answers: ["6", "5", "10"],
    correctAnswer: "10",
  },
];

//create form with questions
const quizForm = document.querySelector(".questions-container");
const generateQuestions = (myQuestions) => {
  for (const [i, el] of myQuestions.entries()) {
    const question = document.createElement("div");
    const qSummary = document.createElement("p");
    question.appendChild(qSummary);
    qSummary.innerText = el.question;

    for (let k = 0; k < 3; k++) {
      const input = document.createElement("input");
      const label = document.createElement("label");
      label.innerHTML = el.answers[k];
      input.setAttribute("type", "radio");
      input.setAttribute("name", i);
      input.setAttribute("value", el.answers[k]);
      question.setAttribute("id", i);
      question.appendChild(input);
      question.appendChild(label);
    }

    quizForm.appendChild(question);
  }

  const inputs = document.querySelectorAll("input");
  const labels = document.querySelectorAll("label");

  for (const [i, el] of inputs.entries()) {
    el.setAttribute("id", i);
  }
  for (const [i, el] of labels.entries()) {
    el.setAttribute("for", i);
  }
};

generateQuestions(myQuestions);

//save, check and display answers

const result = document.querySelector(".result");

let answers = [];
let count = 0;
result.innerText = count;
const button = document.querySelector(".quiz-button");
const radioButtons = document.querySelectorAll("input");

button.addEventListener("click", (e) => {
  e.preventDefault();
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      answers.push(radioButton.value);
    }
  }

  for (let [i, el] of answers.entries()) {
    const radioOption = document.querySelector(
      `input[name="${i}"][value="${el}"]`
    );
    if (el === myQuestions[i].correctAnswer) {
      count++;
      if (radioOption) {
        radioOption.parentElement.style.backgroundColor = "green";
      }
    } else {
      if (radioOption) radioOption.parentElement.style.backgroundColor = "red";
    }
  }
  answers = [];
  result.innerText = `You've got ${count} correct answers`;
});
