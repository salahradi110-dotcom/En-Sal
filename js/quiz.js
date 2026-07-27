const quizData = [
    
{
    question: "Apple",
    options: ["كتاب","تفاحة","سيارة"],
    answer: "تفاحة"
},
{
    question: "Book",
    options: ["باب","كتاب","ماء"],
    answer: "كتاب"
},
{
    question: "House",
    options: ["منزل","نافذة","مدرسة"],
    answer: "منزل"
},
{
    question: "Teacher",
    options: ["طالب","معلم","صديق"],
    answer: "معلم"
},
{
    question: "Water",
    options: ["ماء","طعام","كرسي"],
    answer: "ماء"
}
];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(quizData);
let current = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score");

function loadQuestion(){

    if(current >= quizData.length){

        question.innerHTML = "انتهى الاختبار 🎉";

        answers.innerHTML = "";

        nextBtn.style.display = "none";

        scoreText.innerHTML =
        `نتيجتك: ${score} / ${quizData.length}`;

        return;
    }

    const q = quizData[current];

    question.innerHTML = q.question;

    answers.innerHTML = "";

    scoreText.innerHTML = "";

    nextBtn.style.display = "none";

    q.options.forEach(option=>{

        const btn = document.createElement("button");

        btn.innerHTML = option;

        btn.className = "answer-btn";

        btn.onclick = ()=>{

            if(option===q.answer){

                btn.style.background="green";

                score++;

            }else{

                btn.style.background="crimson";

            }

            document.querySelectorAll(".answer-btn")
            .forEach(b=>b.disabled=true);

            nextBtn.style.display="block";

        };

        answers.appendChild(btn);

    });

}

nextBtn.onclick=()=>{

    current++;

    loadQuestion();

};

window.addEventListener("load",loadQuestion);
