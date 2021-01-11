const message =document.querySelector(".message");
const score =document.querySelector(".score");
const button =document.querySelectorAll("button");
const gamePlay = document.querySelector(".gamePlay");
const inst =document.querySelector(".Insts");
let curCardValue = 0;
let scoreValue =0;
let deck =[];
const ranks =[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suits =["hearts","diams","clubs","spades"];

for(let i=0;i<button.length;i++){
 
    button[i].addEventListener("click", playGame);
}
function toggleButtons(){
    for(let i=0;i<button.length;i++){
        button[i].classList.toggle("hideButton");
        inst.style= "display: none";
    }}
function playGame(e){
   // console.log(e.target);
    let temp = e.target.innerText;
    let myCard = drawCard();
   // let win = false;
   // console.log(temp);
    if(temp=="Start"){
        //console.log("you clicked Start");
        message.innerHTML = "Higher or Lower";
        gamePlay.innerHTML ="";//clear out 
        makeCard(myCard);
        toggleButtons();
        return;
    }
    
    console.log(myCard);// this holds the value of next card
    if(myCard.value == curCardValue){
       // win = "draw";
        message.innerHTML ="Draw";
        message.style.color ="blue";
    }else{
        if((temp=="Higher" && (myCard.value>curCardValue)) || (temp == "Lower" && (myCard.value < curCardValue))){
           scoreValue++;
        score.innerHTML=scoreValue;
        message.innerHTML ="Correct, Next?";
        message.style.color ="green";
    }else
    {
        message.innerHTML ="Wrong! Game Over";
        message.style.color ="red";
        toggleButtons();
    }
    }
    makeCard(myCard);
}


// to draw new cards
function drawCard(){
    if(deck.length>0){
        let randIndex = Math.floor(Math.random()*deck.length);
        let card = deck.splice(randIndex,1)[0];
        //console.log(card);
        
        return card;
    }else{
        makeDeck();
        return drawCard();
    }
    
}
//build deck of cards
function makeDeck(){
    deck=[];//emptying the cards if there are any
    for(let i=0;i<suits.length;i++){
        for(let j=0;j<ranks.length;j++){
            let card ={};
            card.suit =suits[i];
            card.rank =ranks[j];
            card.value=(j+1);
            deck.push(card);
        }
    }
    console.log(deck);
}
function makeCard(card){
    let html1 = card.rank+"<br>&"+card.suit+";";
    let html2 = card.rank +"&"+card.suit+";";
    let curCards = document.querySelectorAll(".card");
    
    let div = document.createElement("div");
    div.setAttribute("class","card");
    div.style.left =(curCards.length*25)+"px";
    curCardValue=card.value;
    if(card.suit ==="hearts"|| card.suit==="diams"){
        div.classList.add("red");
    }
    let span1 = document.createElement("span");
    span1.setAttribute("class","tiny");
    span1.innerHTML=html2;
    div.appendChild(span1);
    
    let span2 = document.createElement("span");
    span2.setAttribute("class","big");
    span2.innerHTML=html1;
    div.appendChild(span2);
    
    gamePlay.appendChild(div);
    
}
