// const question = [
//     "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
//     "現在の日本の総理大臣は次の内どれ？",
//     "世界で一番高い山は次の内どれ？"
// ];
// const answers = [[
//     "スーパーファミコン",
//     "プレイステーション",
//     "ニンテンドースイッチ",
//     "ニンテンドーDS"
// ],
// [
//     "スーパーファミコン",
//     "岸田総理",
//     "ニンテンドースイッチ",
//     "ニンテンドーDS"
// ],
// [
//     "スーパーファミコン",
//     "エベレスト",
//     "ニンテンドースイッチ",
//     "ニンテンドーDS"
// ]
// ];
// const correctAnswer = [
//     "ニンテンドースイッチ",
//     "岸田総理",
//     "エベレスト"
// ];



// const $question = document.getElementById("question");
// const $answerButtons = document.getElementsByClassName("answer")

// console.log($question);

// const WaitTillAnswer = (qindex) => {
//     return new Promise((resolve) => {
//         $question.textContent = question[qindex];

//         for (let index = 0; index < answers[qindex].length; index++) {
//             //Assign answers to each button 
//             $answerButtons[index].textContent = answers[qindex][index];

//             //Assign eventListner to each answer 
//             $answerButtons[index].addEventListener("click", (e) => {
//                 console.log(e);
//                 if (e.currentTarget.textContent === correctAnswer[qindex]) {
//                     alert("Correct!");
//                     resolve();
//                 } else {
//                     alert("Wrong!");
//                     resolve();
//                 }
//             });
//         }

//     })
// }

// (async () => {
//     for(qindex = 0; qindex < question.length; qindex++){
//         await WaitTillAnswer(qindex);
//     }
// })();

const quiz = [
        {
            question: "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
            answers: ["スーパーファミコン", "プレイステーション", "ニンテンドースイッチ", "ニンテンドーDS"],
            correctAnswer: "ニンテンドーDS"
        },
        {
            question: "日本で一番高い山は？",
            answers: ["富士山", "高尾山", "鳥取砂丘", "近くの公園"],
            correctAnswer: "富士山"
        },
        {
            question: "日本で一番長い川は？",
            answers: ["利根川", "川１", "川２", "信濃川"],
            correctAnswer: "信濃川"
        }
];

const $question = document.getElementById("question");
const $buttons = document.getElementsByClassName("button");
const buttonLength = $buttons.length;

let quizIndex = 0;
let score = 0;

//Set up questions
const Setup = () => {
    $question.textContent = quiz[quizIndex].question;

    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
        $buttons[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

// Configure how to respond when clicked
const clickHandler = (e) => {
    if (e.currentTarget.textContent === quiz[quizIndex].correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }

    quizIndex++;

    if (quizIndex < quiz.length) {

    } else {
        alert(`Quiz completed! Your score is ${score} / ${quiz.length}.`);
    }
};

//Implement quiz setup and eventListner
Setup();
let index = 0;
while (index < buttonLength) {
    $buttons[index].addEventListener("click", (e) => {
        clickHandler(e);
        Setup();
    });
    index++;
}

