const gameColors =[ "red", "blue", "green", "orange"];
const message = document.querySelector(".message");
const gameArea = document.querySelector(".gameArea");
const button = document.querySelector("button");

let gameClicks = [];
let userClicks =[];
let inPlay = false;// to enable and disable the play
let playNum = 5;// number of color that keeps increasing so that the game gets harder on every correct answer.
window.addEventListener("load",setup);
button.addEventListener("click", function(){

    if(!inPlay){ //inPlay = true;
        player();
    }
})

// start button can be clicked only once, later it is disabled.
function player(){
    button.disabled = true; 
    button.style.display = "none";
    messages("Click the correct pattern");
    // clear the 2 sequences
    gameClicks=[];
    userClicks = [];
    runSequence(playNum);
}

function runSequence(num){
    let squares = document.querySelectorAll(".box");
    num--;
    if(num<0){
       inPlay = true;
        return;     
    }
    let randomNum = Math.floor(Math.random()*gameColors.length);
    gameClicks.push(gameColors[randomNum]);
    console.log(gameClicks);
    squares[randomNum].style.opacity = "1";// the color comp selected at random
    setTimeout(function(){
         squares[randomNum].style.opacity = "0.5";
        setTimeout(function(){
            runSequence(num);// will break out of the loop when num<0
        },100)
    },500)
    
}


function setup(){
    console.log("page loaded");
    // to create 4 div s inside the gameArea div
    for (let x=0; x<gameColors.length;x++){
        let div = eleFactory("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        div.style.opacity = "0.5";
        div.myColor = gameColors[x];//myColor is the hidden color
        div.addEventListener("click", checkAnswer);
        gameArea.appendChild(div);
    }

}
// when user clicks the div(color box)
function checkAnswer(e){
   
    if(inPlay){ // when start is clicked, inPlay =true, else false
    let el =e.target;
   console.log(el.myColor);// the color that was clicked
        userClicks.push(el.myColor);
        el.style.opacity = "1";
        setTimeout(function(){
            el.style.opacity="0.5";
        },500);
        // to end the game 
        if(userClicks.length == gameClicks.length){
            inPlay = false;
            endGame();
        }
    }
    console.log(userClicks);
}

function messages(mes){
    message.innerHTML = mes;
}
function endGame(){
    console.log("game over");
    button.disabled = false;
    button.style.display= "block";
    //toString : to convert array into string
    if(userClicks.toString() == gameClicks.toString()){
        playNum
        messages("Correct");
        
    }else{
       messages("Wrong");
    }
}
function eleFactory(elType){
    let ele =document.createElement(elType);
    return ele;
}