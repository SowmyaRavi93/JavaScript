const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");
for(let x=0;x< stars.length; x++){
    stars[x].starValue =(x+1);
    ["mouseover", "mouseout", "click"].forEach(function (e){
        stars[x].addEventListener(e, starRate);
    })
}

function startRate(e){
    let t = e.type;
    let starValue = this.starValue;
    if (t === "click"){
        if (starValue > 1){
            output.innerHTML = "you rated this " +starValue + " stars";
        }
    }
    stars.foreach(function(ele, ind){
        if (t === "click"){
            if(ind < starValue){
                ele.classList.add("orange");
            }
        }
        if (t==="mouseover"){
            if(ind < starValue){
                ele.classList.add("yellow");
                
            }else {
                ele.classList.remove("yellow");
                
            }
        }
        if (t === "mouseout"){
            ele.classList.remove("yellow");
        }
    })
}