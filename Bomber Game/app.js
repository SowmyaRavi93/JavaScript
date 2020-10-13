const score = document.querySelector(".score");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);
document.addEventListener("click", start);
let player = {
    score: 0
    , speed: 2
    , inplay: false
};
let keys = {
    space: false;
}
function start(){
    gameMessage.classList.add("hide");
    if(!player.inplay){
        gameArea.innerHTML="";
        player.level = 10;
        makeEnemy();
        player.inplay = true;
        player.score =2000;
        player.totalBomb =6;
        player.ready= true;
        player.activeBomb =0 ;
        player.bombScore =0;
        player.plane = document.createElement("div");
        player.plane.setAttribute("class", "plane");
        gameArea.appendChild(player.plane);
        window.requestAnimationFrame(playGame);
        player.x = player.plane.offsetLeft;
        player.y = player.plane.offsetTop;
    }
}

function endGame(){
    player.inplay= false;
    gameMessage.classList.remove("hide");
}
function makeEnemy(){
    player.level--;
    if(player.level < 0){
        endGame();
    }
    else{
        player.base = document.createElement("div");
        player.base.setAttribute("class", "base");
        player.base.style.width = Math.floor(Math.random() * 200) + 10 + "px";
        player.base.style.height = Math.floor(Math.random() * 100) + 100 + "px";
        player.base.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 200)) + 100 + "px";
        gameArea.appendChild(player.base);
    }
}

