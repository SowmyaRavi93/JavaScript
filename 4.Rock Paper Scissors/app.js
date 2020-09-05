const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner =[0,0];

for (let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",  playGame);
}
function playGame(e){
    console.log("Player Selected: " +e.target.innerText);
    let playerSelection = e.target.innerText;
    let comptuerSelection = Math.random();
    if (comptuerSelection <0.34){
        computerSelection ="Rock";
    }else if(comptuerSelection <= 0.67){
          computerSelection ="Paper";
    }else {
          computerSelection ="Scissors";
    }
    console.log("Computer Selected: " +computerSelection );

    let result = checkWinner(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    console.log(result);
    if (result == "Player"){
         result += " wins";
         winner[0]++;
    }else if (result =="Computer"){
         result += " wins";
         winner[1]++;
    }else {
         result += " results in a tie";
    }
         score.innerHTML = "Player ["+winner[0]+"] Computer  ["+winner[1]+"]";
         messager(playerSelection + " vs " +computerSelection+ "<br><br>" + result+ "<br>");
    }

function messager(mes){
    message.innerHTML = mes;
}
function checkWinner(pl,co){
    if(pl===co)
    {
        return "Draw,";
    }
    if(pl==="Rock"){
        if(co==="Paper"){
            return "Computer";
        }else {
            return "Player";
        }
    }
    if(pl==="Paper"){
        if(co==="Scissors"){
            return "Computer";
    }else{
        return "Player";
        }
    }
    
    if(pl==="Scissors"){
        if(co==="Rock"){
            return "Computer";
        }else{
        return "Player";
        }
    }

}
        
       
        
 
     
