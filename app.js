const question = [
    "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
    "現在の日本の総理大臣は次の内どれ？",
    "世界で一番高い山は次の内どれ？"
];
const answers = [[
    "スーパーファミコン",
    "プレイステーション",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
],
[
    "スーパーファミコン",
    "岸田総理",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
],
[
    "スーパーファミコン",
    "エベレスト",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
]
];
const correctAnswer = [
    "ニンテンドースイッチ",
    "岸田総理",
    "エベレスト"
];

const $question = document.getElementById("question");
const $answerButtons = document.getElementsByClassName("answer")

const WaitTillAnswer = (qindex) => {
    return new Promise((resolve) => {
        $question.textContent = question[qindex];

        for (let index = 0; index < answers[qindex].length; index++) {
            //Assign answers to each button 
            $answerButtons[index].textContent = answers[qindex][index];
        
            //Respond to the selected answer 
            $answerButtons[index].addEventListener("click", (e) => {
                if (e.currentTarget.textContent === correctAnswer[qindex]) {
                    alert("Correct!");
                    resolve();
                } else {
                    alert("Wrong!");
                    resolve();
                }
            });
        }
        
    })
}

(async () => {
    for(qindex = 0; qindex < question.length; qindex++){
        await WaitTillAnswer(qindex);
    }    
})();


