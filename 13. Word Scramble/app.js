const button =document.querySelector("button");
const message =document.querySelector(".message");
const guess =document.querySelector("input");
const myArray = ["WELCOME", "GARDEN", "SWIMMING", "AUSTRALIA"];
let inPlay = false;
let scramble ="";
let scrambled ="";
let score = 0;
button.addEventListener("click", function(){
//    console.log("Button clicked");
    if(!inPlay){
        inPlay = true;
        score =0;
        button.innerHTML ="Guess";
//        guess.style.display ="none";
        guess.classList.toggle("hidden");
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;     
    }else{
        let tempGuess = guess.value;
        score++;
        if(tempGuess=== scramble){
            console.log("correct");
            // to start again
            inPlay = false;
            message.innerHTML = "Correct it was! "+scramble + ". It took " +score+ " guesses";
            button.innerHTML = "Start";
            guess.classList.toggle("hidden");
            
        }else {
            console.log(" Start again");
            message.innerHTML ="Wrong " +scrambled;
        }
    }
})

function createWord(){
    let randomIndex = Math.floor(Math.random()* myArray.length);
    console.log("R.Index"+randomIndex);
    // to select the string from the array at random
    let tempWord = myArray[randomIndex];
//    let rand = randomArray(tempWord.split(""));
   
    return tempWord;
}

// to scramble the alphabets in the word
function randomArray(arr){
    for (let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()* (i+1));
        console.log("temp"+temp);
        console.log("i"+i);
        console.log("j"+j);
        arr[i]=arr[j];
        arr[j] = temp;
    }
    return arr;
}

// string into array and then randomise the word in the array 