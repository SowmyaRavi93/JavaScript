const playArea ={};
const player = {};
let gameObj;
playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));//Array.form to convert to a new array
playArea.page = Array.from(document.querySelectorAll(".page"));
console.log(playArea);
document.addEventListener("DOMContentLoaded",getData);


playArea.btns.forEach(function(item){
    item.addEventListener("click", handleBtn);
})

function getData(){
    playArea.main.classList.add("visible");
    fetch ("http://discoveryvip.com/shared/json.php?f=game").then(function(rep){
        return rep.json();
    }).then(function(data){
        console.log(data);
        gameObj = data.data;
        console.log(gameObj);
        buildBoard();
    })
}
//to update score
function updateScore(){
    playArea.scorer.innerHTML= "Score: "+player.score+" Lives: "+player.items;
    
}

function buildBoard(){
    playArea.scorer = document.createElement("span");
    playArea.scorer.innerHTML ="Press Button to Start";
    //playArea.scorer.style.margin ="10px";
    playArea.stats.appendChild(playArea.scorer);
    let rows =4;
    let cols = 4;
    let cnt = 0;// how many elements are going to be there
    playArea.game.style.width = cols * 100 + (cols * 2);
    playArea.game.style.margin = "auto";// to keep it in the middle
    // to build cells
    for(let y =0;y<rows;y++){
        let divMain = document.createElement("div");
        divMain.setAttribute("class","row");
        divMain.style.width = cols * 100 + (cols * 2);
        for(let x =0;x<cols;x++){
            let div = document.createElement("div");
            div.setAttribute("class", "pop");
            cnt++;
            div.innerHTML = cnt;
            div.cnt = cnt;
            divMain.appendChild(div);
        
        }
        playArea.game.appendChild(divMain);
    }
}

function handleBtn(e){
    if(e.target.classList.contains("newGame")){
        console.log("yes");
        
        startGame();
        
    }
    
}

function startGame(){
    player.score =0;
    player.items = 3;
    playArea.main.classList.remove("visible");
    playArea.game.classList.add("visible");
    player.gameOver =false;
    startPop();
    updateScore();
    }
function randomUp(){
    const pops = document.querySelectorAll(".pop");
    // to randomly select a pop class
    const idx = Math.floor(Math.random()* pops.length);
    // to make sure we dont get the same value as the previous one
    if(pops[idx].cnt == playArea.last){
        return randomUp();
    }
    playArea.last =pops[idx].cnt;
    return pops[idx];
}

function startPop(){
    // to select one of the elements(boxes) randomly which is stored in newPop
    let newPop = randomUp();
    console.log(newPop);
    newPop.classList.add("active");
    newPop.addEventListener("click", hitPop);
    const time = Math.round(Math.random()*(1500)+750);
    const val = Math.round(Math.random()* gameObj.length);
    newPop.old = newPop.innerText;
    newPop.v = gameObj[val].value;
    newPop.innerHTML = gameObj[val].icon + "<br>"+gameObj[val].value;
    playArea.inPlay = setTimeout(function(){
        newPop.classList.remove("active");
        newPop.removeEventListener("click", hitPop);
        newPop.innerText = newPop.old;// displays the old value(ie. the number on the element )
        console.log("newPop"+newPop.v);
        //If you miss any 3 + values, life decreses by 1
        if(newPop.v>0){
            player.items--;
            updateScore();
        }
        if(player.items<=0){
            gameOver();
        }
        // to stop the game,check if false
        if(!player.gameOver){
            startPop();
        }
    },time)
}
function gameOver(){
    player.gameOver =true;
    playArea.main.classList.add("visible");
    playArea.game.classList.remove("visible");
    document.querySelector(".newGame").innerText ="Try Again";
}
function hitPop(e){
    console.log(e.target.cnt);
    console.log(e.target.v);
    let newPop = e.target;
    player.score =player.score+newPop.v;//score was set to 0, calculating the score
    updateScore();
    newPop.classList.remove("active");
        newPop.removeEventListener("click", hitPop);
        newPop.innerText = newPop.old;// displays the old value(ie. the number on the element )
    clearTimeout(playArea.inPlay);
        // to stop the game,check if false
        if(!player.gameOver){
            startPop();
        }
    
}