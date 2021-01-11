const endDate = document.querySelector("input[name ='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
// to not stop the clock on refresh
const savedValue = localStorage.getItem("countdown");
if(savedValue){
    startClock(savedValue);
    let inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue;
    //valueAsDate  is used to convert Date object(type = date) into usable format 
}
endDate.addEventListener("change",function(e){
    e.preventDefault();
//    console.log(endDate.value);
    clearInterval(timeInterval);
   const temp = new Date(endDate.value);
    localStorage.setItem("countdown",temp);
//    console.log(temp);
   startClock(temp);
    timeStop = true;
})


// to calculate end time between cur time to input time
function startClock(d){
    function updateCounter(){
        let tl = (timeLeft(d));
        if(tl.total<=0){
            timeStop = false;
        }
        console.log(tl.days);
        for(let pro in tl){
        // property(pro) in object(tl)
        
         console.log(pro,tl[pro]);
         let el = document.querySelector("."+pro);
         if(el){
                console.log(el);
                el.innerHTML = tl[pro];
            }
        }
    //.parse returns a string representation of Date in miliseconds since Jan 1 1970
    
}
updateCounter();
    if (timeStop){
        timeInterval = setInterval(updateCounter,1000);
        }else{
        clearInterval(timeInterval);
    }
}

function timeLeft(d){
    let currentDate = new Date();
    console.log(Date.parse(d));
    console.log(currentDate);
    console.log(Date.parse(currentDate));
    let t = Date.parse(d) - Date.parse(currentDate);
    console.log(t);
    
    let seconds = Math.floor((t/1000) % 60);
    let minutes = Math.floor((t/1000 / 60) % 60);
    let hours  = Math.floor((t/(1000*60*60))%24);
    let days  = Math.floor(t/(1000*60*60*24));
    return { "total":t,
           "days":days,
           "hours":hours,
           "minutes":minutes,
           "seconds":seconds
           };
}