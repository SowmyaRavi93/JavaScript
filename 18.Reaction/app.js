let inPlay =false;
let playArea ={};

const message = document.querySelector(".message");
messager("Click start button");
const button = document.querySelector("button");
const gameArea = document.querySelector(".gameArea");
button.addEventListener("click", function(){
    if(!inPlay){
        inPlay=true;
        button.style.display ="none";
        messager("Click the circles as soon as you see them");
        playArea.timer =setTimeout(myBox,rand(2000));
    }            
})

function myBox(){
    let el = document.createElement("div");
    el.style.position= "relative";
    el.style.borderRadius = "50%";
    el.style.background= getColor();
    el.style.width= rand(30) + 70 +"px";
    el.style.height=rand(30) + 70 +"px";
     el.style.top=rand(150)+"px";
    el.style.left =rand(50)+"px";
    el.addEventListener("click", hit);
    el.start =new Date().getTime();//starting time in milliseconds
    gameArea.appendChild(el);    
}
function hit(e){
    
    console.log(e.target);
    let end = new Date().getTime();
    let start = e.target.start;
    let duration = (end-start)/1000;//to get in seconds
    messager("It took "+duration+" seconds to click");
    clearTimeout(playArea.timer);// to clear the timer
    gameArea.children[0].remove();// to remove the first child(element) ie, the circle
    
    playArea.timer = setTimeout(myBox,rand(2000));
}
function getColor(){
    function col(){
        //colors are from 0-255 in hex
        let hex = rand(255).toString(16);//base 16 number
        return("0" +String(hex)).substr(-2);// if it is a 1 charac then prefix 0
    }
    return "#"+col()+col()+col();
}
   
function rand(num){
    let temp =Math.floor(Math.random()*num);
    return temp;
}
function messager(mes){
    message.innerHTML=mes;
}