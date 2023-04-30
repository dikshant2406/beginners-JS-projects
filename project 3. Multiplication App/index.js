const num1 = Math.ceil(Math.random()*10) ;
const num2 = Math.ceil(Math.random()*10) ;

const quesEl = document.getElementById("question") ;
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

quesEl.innerText = `What is ${num1} multiply by ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score")) ;
if(!score) {
    score = 0 ;
}
scoreEl.innerText = `Score: ${score}` ;
const correctAns = num1 * num2 ;

formEl.addEventListener('submit', () => {
    const userResponse = +inputEl.value ;
    console.log(typeof userResponse, typeof correctAns);

    if(userResponse === correctAns) {
        score++ ;
        updateScore() ;
    }else {
        score-- ;
        updateScore() ;
    }
})

function updateScore() {
    localStorage.setItem("score", JSON.stringify(score));
    
}