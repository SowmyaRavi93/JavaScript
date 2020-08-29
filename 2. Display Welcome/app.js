const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", showMessage);
function showMessage(){
    //output.textContent = `Welcome ${input.value}`;
    output.innerHTML = ` <h1> Welcome, ${input.value} </h1> `;
}