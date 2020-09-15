const wording = ["Do you like ice cream as much as I do?","Can you see a monkey on the tree?", "What time is the next bus?"," We can plan an outing very soon!"]
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
let startTime,endTime;
button.addEventListener("click", function(){
    console.log(this.innerText);
    if(this.innerText == "Start"){
        playText.disabled = false;
        playGame();
        }
    else if (this.innerText =="Done"){
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
        }
    })
    
function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);// in seconds
    console.log(totalTime+"seconds");
    let str = playText.value;
    let wordCount = wordCounter(str);
    console.log("word Count"+wordCount);
    let speed = Math.round((wordCount/totalTime)*60);
    console.log(speed);//no. of words per minute
    let finalMessage = "You typed at "+speed+" words per minute.";   
    finalMessage += "<br>" +compareWords(message.innerText,str);
    message.innerHTML = finalMessage;
    }
        
function wordCounter(strWords){
    let response = strWords.split(" ").length;
    console.log(response);
    return response;
    }
        
function compareWords(str1,str2){
    let words1 =str1.split(" ");
    let words2 =str2.split(" ");
    let cnt =0;
    words1.forEach(function(item,index){
        console.log(item);
        if(item == words2[index]){
            cnt++;
            }
    })
        return(cnt+" correct out of " +words1.length +" words");
    }
        
function playGame(){
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    console.log(date);
    startTime =date.getTime();
    console.log(startTime);
    button.innerText = "Done";
    console.log(randomNum);
    console.log(wording.length);
    }