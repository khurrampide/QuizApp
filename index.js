let QuizDB = [
    {
        question: "Q1:  2 + 3 = ",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans:'ans1'
    },
    {
        question: "Q2:  12 - 3 = ",
        a: "5",
        b: "9",
        c: "7",
        d: "8",
        ans: 'ans2'
    },
    {
        question: "Q3:  2 * 3 = ",
        a: "5",
        b: "6",
        c: "12",
        d: "8",
        ans: "ans3"
    }
]

let score = 0;
let questionNumber = 0;
let question = document.querySelector('.question');
const options1 = document.querySelector('#options1');
const options2 = document.querySelector('#options2');
const options3 = document.querySelector('#options3');
const options4 = document.querySelector('#options4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const loadQuestion = () => 
{
    question.innerHTML = QuizDB[questionNumber].question;
    options1.innerHTML = QuizDB[questionNumber].a;
    options2.innerHTML = QuizDB[questionNumber].b;
    options3.innerHTML = QuizDB[questionNumber].c;
    options4.innerHTML = QuizDB[questionNumber].d;


}

loadQuestion();
submit.addEventListener('click', getAnswer);

function getAnswer() {
    let ans;
    if (answers[0].checked)
        ans = answers[0].id;
    else if (answers[1].checked)
        ans = answers[1].id;
    else if (answers[2].checked)
        ans = answers[2].id;
    else if (answers[3].checked)
        ans = answers[3].id;

    if (ans === QuizDB[questionNumber].ans)
        score++;

    console.log(score);
    
    questionNumber++;
    if (questionNumber < QuizDB.length)
        {
            answers[0].checked = false;
            answers[1].checked = false;
            answers[2].checked = false;
            answers[3].checked = false;
            loadQuestion();
        }
    else
        {
            alert(`Total Score: ${score}/${QuizDB.length}`);
            submit.disabled = true;
        }

}
