const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log( button );
button.addEventListener("click", function(){
    
    
    const cost = document.querySelector("input");
    const tip = (cost.value *0.15).toFixed(2);
    console.log(cost.value *0.01);
   let temp =`<h1>You have to tip $${tip} on $${cost.value}</h1>`;
    
   output.innerHTML = temp;
})


output.style.padding = "10px";