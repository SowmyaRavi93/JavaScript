const answerArray= ["May be"," I'm not sure","Umm! thats a good question.","Let me think about it"];
const message= document.querySelector(".message");
const question =document.querySelector("input");
const button =document.querySelector("button");
button.addEventListener("click",function(){
    let res = Math.floor(Math.random()*answerArray.length);
//    console.log(answerArray[res]);   
    message.innerText = question.value
        + "?  "+ answerArray[res];
    question.value="";
})