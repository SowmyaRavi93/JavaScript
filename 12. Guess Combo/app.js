const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let score = 0;
let gamePlay = false;
button.addEventListener("click", function(){
    if(!gamePlay){
        gamePlay = true;
        score = 0;
        gameArea.innerHTML="";
        maker(5);
        message.innerHTML="Guess the combo";
        button.innerText = "Check Combo";
    }else{
        //console.log("checker");
        score++;
        message.innerHTML ="Guesses: " +score;
        const numbers = document.querySelectorAll(".numb");
        let winCondition = 0;
        for (let i=0;i<numbers.length;i++){
//            console.log(numbers[i].value);
            console.log(numbers[i].correct);
            if(numbers[i].value== numbers[i].correct){
                console.log("Match");
                numbers[i].style.backgroundColor="green";
                numbers[i].style.color ="white";
                console.log("Match");
                winCondition++;
                
            }else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor=color;
                numbers[i].style.color = "black";
                console.log("No Match");
            }
            if (winCondition == numbers.length){
                console.log("Game Over");
                gameEnd();
                
            }
        }
    }
})

function gameEnd(){
    message.innerHTML = " You solved the combo in " +score+ " guesses";
    gamePlay=false;
    button.innerHTML = "Restart Game";
    
}
function maker(num){
    for(let x=0;x<num;x++){
        let el = document.createElement("input");
        el.setAttribute("type","number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width ="50px";
        el.style.padding = "5px";
        el.classList.add("numb");
        // to set default value as 0. el.value=0;
        el.order = x;
        el.correct = Math.floor(Math.random()*10);
        el.value =0;
        console.log(el);
        gameArea.appendChild(el);
 }
}


 