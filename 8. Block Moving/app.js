const Inst = document.querySelector(".Inst");
let myBlock; 
let myFunctionList;
let funList = [];
const movementArray = ["right", "left", "up","down"];
document.addEventListener("DOMContentLoaded",function(){
    //console.log("ready");
    myBlock = document.createElement("div");
    myBlock.textContent ="Move Me Around";
    myBlock.style.width ="200px";
    myBlock.style.height= "100px";
    myBlock.style.backgroundColor= "salmon";
    myBlock.style.color= "white";
    myBlock.style.lineHeight ="100px";
    myBlock.style.textAlign ="center";
    myBlock.style.position ="absolute";
    myBlock.style.top="200px";
    myBlock.style.left ="150px";
    document.body.appendChild(myBlock);
    //console.log(myBlock);
    myFunctionList = document.createElement("div");
    document.body.appendChild( myFunctionList);
})

document.addEventListener("keydown",function(e){
    e.preventDefault();
    Inst.style.display ="none";
    console.log(e);
    let keyC = e.keyCode;
    if(keyC===37)addFun("left");
    else if (keyC===39)addFun("right");
    else if (keyC===38)addFun("up");
    else if (keyC===40)addFun("down");
    else if(keyC===67)myBlock.style.backgroundColor = randomColor();
    // for key press enter and space
    else if(keyC===13 || keyC ===32){
        mover();
    }
    console.log(e.key + "=" +e.keyCode);
})

function mover(){
    if (funList.length>0){
        let cur = myBlock.getBoundingClientRect();//gives the current position of the block
        let el =funList.shift();//shift will remove first item from the list
        
        //to get the conytent of the element
        let item = el.textContent.replace("+","");
        myFunctionList.removeChild(el);
        myBlock.innerHTML="Move:"+item;
       console.log(item);
        if(item ==="left"){
            myBlock.style.left = cur.left - 50+"px";
        }
        if(item ==="right"){
            myBlock.style.left = cur.left + 50+"px";
        }
        if(item ==="up"){
            myBlock.style.top = cur.top - 50+"px";
        }
        if(item ==="down"){
            myBlock.style.top = cur.top + 50+"px";
        }
        setTimeout(mover,300);
    console.log(el+ "el");
    }
    else {
        myBlock.innerHTML = "Set Path"
    }
}

function addFun(val){
    //funList.push(val);
    let span = document.createElement("span");
    span.textContent ="+"+val;
    span.style.padding="10px";
    span.style.border = "1px solid red";
    span.style.margin ="2px";
    span.addEventListener("mouseover", function(){
        this.style.backgroundColor ="red";
        this.style.color ="white";
    })
    span.addEventListener("mouseout", function(){
        this.style.backgroundColor ="white";
        this.style.color ="black";
    })
    
    // to delete an item on click
    span.addEventListener("click", function(){
        let curIndex = funList.indexOf(this);
        console.log(curIndex);
        let tempRemove = funList.splice(curIndex,1);
        console.log(tempRemove);
        myFunctionList.removeChild(this);
    })
    myFunctionList.appendChild(span);
    funList.push(span);
    console.log(funList);
}

// to generate a randon hexadecimal number
function randomColor(){
    return "#"+Math.random().toString(16).substr(-6);
}
function goLeft(){
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp+"px";
}
function goRight(){
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp+"px";
}
function goUp(){
    let temp = myBlock.offsetTop;
    temp = temp-50;
    myBlock.style.top = temp+"px";
}
function goDown(){
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp+"px";
}