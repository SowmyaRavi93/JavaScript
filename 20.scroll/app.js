const button = document.querySelector("button");
const cElement = document.getElementById("cElement");
const sElement = document.getElementById("sElement");
const speed = document.querySelector("input");
const output = document.querySelector(".output");
let scroller =true;
const content = "<p> Media production and delivery technology may potentially enhance the value of content by formatting, filtering, and combining original sources of content for new audiences with new contexts. The greatest value for a given source of content for a specific audience is often found through such electronic reworking of content as dynamic and real-time as the trends that fuel its interest. Less emphasis on value from content stored for possible use in its original form, and more emphasis on rapid re-purposing, reuse, and redeployment has led many publishers and media producers to view their primary function less as originators and more as transformers of content. Thus, one finds out that institutions, that used to focus on publishing printed materials, are now publishing both databases and software to combine content from various sources for a wider variety of audiences.";

window.onload = setUpScroll;
button.addEventListener("click",function(){
    
console.log("clicked");
    scroller ^= true;//^= is to toggle the bool value
    button.innerText = !scroller ? "Start" : "Stop";
    
})

cElement.addEventListener("mouseenter", scrollSpeed);
cElement.addEventListener("mouseleave", scrollSpeed);

function scrollSpeed(e){
    console.log(e.type);
    // when mouse is on the cElement, scrolling stops (set to false) 
    scroller= (e.type =="mouseenter") ? false:true;
    output.innerHTML="Mouse stopper";
    
}

function setUpScroll(){
    sElement.innerHTML=content;
    let temp = sElement.getBoundingClientRect();
//    console.log(temp);
    cElement.style.height = temp.height+"px";
    sElement.style.top = temp.height+"px";
    scrollInt = setInterval(scrollingEle,50);
}
function scrollingEle(){
    let scrollSpeed = speed.value;
    if(scroller){
    let posY = parseInt(sElement.style.top);
    if(posY+sElement.clientHeight>0){
    
    sElement.style.top=posY - scrollSpeed+"px";// to go  up
    }else{
        sElement.style.top=cElement.clientHeight+"px";
    }
    output.innerHTML="Scroll speed "+scrollSpeed +" Y position "+posY;
    }
}