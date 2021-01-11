const myWords=["Javascript", "Australia", "India","America","Flower"];
const button = document.querySelector("button");
const mess = document.querySelector(".message");
const game = document.querySelector(".game");
let cur =0;
let startTime;

button.addEventListener("click", start);

function start(){
    cur =0;
    startTime = Date.parse(new Date());
    button.style.display ="none";
    let tempArr = myWords.slice(0);//copy of the whole array
    tempArr.sort(function(a,b){
        return 0.5-Math.random();// to randomly re-arrange tempArr
    });
    tempArr.forEach(function(item){
        let temp =item.split("");//to convert each letter into a string
        temp.sort(function(a,b){
        return 0.5-Math.random();// to randomly re-arrange tempArr)
    });
    let temp1 = temp.join("");
    console.log(temp1);//scrambled
//     console.log(item);//original
        let div = document.createElement("div");
        div.innerHTML ="Select";
        div.classList.add("box");
        div.style.backgroundColor="red";
        div.word =item;
        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor ="white";
            div.innerHTML =temp1;
        })
        div.addEventListener("mouseleave", function(){
            div.style.backgroundColor ="red";
            div.innerHTML ="Select";
        })
        div.addEventListener("click",function(){
            if(div.word === myWords[cur]){
            //console.log(this.word);
                console.log("right");
                this.classList.add("hidden");
            cur++;
            nextWord();
            }else{
                
                console.log("wrong");
            }
        })
        game.appendChild(div);
        
    })
    
   // console.log(myWords);
    nextWord();
    
}
// to output the next word
function nextWord(){
    if(cur >= myWords.length){
        let endTime = Date.parse(new Date());
        let duration = (endTime-startTime)/1000;//seconds
        game.innerHTML ="";// to clear the area after the game is complete
        button.style.display="block";
        
        message("Game Over! It took "+duration+ " seconds");
        mess.style.color ="orange";
    }else{
        
    
    console.log(cur);
     message("Select this word "+myWords[cur]);
    }
}
function message(output){
    mess.innerHTML=output;
}