const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let player ={speed:5,score:0};
startScreen.addEventListener("click", start);
//to get any key press
document.addEventListener("keydown",pressOn);//when key pressed
document.addEventListener("keyup",pressOff);// when finger lifted from the key
let keys ={ ArrowUp:false, ArrowDow:false, ArrowRight:false, ArrowLeft:false};

//to move the lines
function moveLines(){
    let lines = document.querySelectorAll(".line");
    lines.forEach(function(item){
        if(item.y > 1500){
            item.y -=1500;
        }
        item.y += player.speed;
        item.style.top = item.y+"px";
    })
}
function isCollide(a,b){
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return!(
    (aRect.bottom < bRect.top) ||
    (aRect.top > bRect.bottom) ||
    (aRect.right < bRect.left) ||
    (aRect.left > bRect.right) 
    )
}

//to move the enemy cars
function moveEnemy(car){
    let ele = document.querySelectorAll(".enemy");
    ele.forEach(function(item){
        if(isCollide(car, item)){
            console.log("HIT");
            endGame();
        }
        if(item.y > 1500){
            item.y =- 600;
            item.style.left = Math.floor(Math.random()*150)+"px";
            item.style.backgroundColor=randonColor();
        }
        item.y += player.speed;
        item.style.top = item.y+"px";
    })
}

function playGame(){
    let car = document.querySelector(".car");
    moveLines();
    moveEnemy(car);
    let road=gameArea.getBoundingClientRect();
    if(player.start){
        if( keys.ArrowUp && player.y > road.top){
            //x and y co-ordinates
            player.y -= player.speed;
        }
        if(keys.ArrowDown && player.y < road.bottom){player.y +=player.speed;}
        if(keys.ArrowLeft && player.x > 0){player.x -=player.speed;}
        if(keys.ArrowRight && player.x < (road.width-50)){player.x +=player.speed;}
        car.style.left = player.x +'px';
        car.style.top = player.y +'px';
        window.requestAnimationFrame(playGame);
        player.score++;
        score.innerText = "Score: "+player.score;
    }
}
function pressOn(e){
    e.preventDefault();
    keys[e.key]=true;//when key pressed= true else false;
}

function pressOff(e){
    e.preventDefault();
    keys[e.key]=false;
}

function endGame(){
    player.start = false;//to end the game. stop looping
    score.innerHTML = "Game Over <br> Score was "+player.score;
    startScreen.classList.remove("hide");
}
function start(){
    startScreen.classList.add("hide");
    gameArea.innerHTML="";//clear out everything to reset or start a new game.
    player.start = true;
    player.score=0;
    // to create 15 white lines on the road
    for (let x=0;x<15;x++){
        let div = document.createElement("div");
        div.classList.add("line");
        div.y = x*150;
        div.style.top = (x*150)+"px";
        gameArea.appendChild(div);
    }
    window.requestAnimationFrame(playGame);
    //to generate car
    let car= document.createElement("div");
    car.innerText="Car";
    car.classList.add("car")
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    
    //create enemy cars
    for (let x=0;x<3;x++){
        let enemy = document.createElement("div");
        enemy.classList.add("enemy");
        enemy.y = ((x+1)*600)*-1;//-1, negative value to hide it intially
        enemy.style.top = enemy.y+"px";
        enemy.style.left = Math.floor(Math.random()*150)+"px";
        enemy.style.backgroundColor=randonColor();
        gameArea.appendChild(enemy);
}}

function randonColor(){
    function c(){
        let hex = Math.floor(Math.random()*256).toString(16);
        return("0"+String(hex)).substr(-2)
    }
    return "#"+c()+c()+c();
}