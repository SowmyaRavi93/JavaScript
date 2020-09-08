const myArray = ["cougar","dog","lion"];
document.addEventListener("DOMContentLoaded",init);
function init(){
    myArray.forEach(function(item){
        console.log(item);
        let div = document.createElement("div");
        div.setAttribute("class","animal "+item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click",function(){
        playIt(item);    
        })
        document.body.appendChild(div);    
    })
}

    function playIt(name){
        let activeEle = document.querySelector("."+name);
        let sound1 = new Audio("sound/"+name+".mp3");
        sound1.play();
//      console.log(activeEle);
        activeEle.classList.add("active");
        setTimeout(function(){
        activeEle.classList.remove("active");
        },500)
     }              




//const animals = document.querySelectorAll(".animal");
////console.log(animals)
//
//for(let i=0;i<animals.length;i++){
//    animals[i].addEventListener("click",function(){
//        let animal =this.innerHTML;
//        let lowerAnimal = animal.toLowerCase(); //makeSound(lowerAnimal);
//        //addStyle(lowerAnimal);
//        playIt(lowerAnimal);
//       
//    })
//}


//function addStyle(name){
//    console.log(name);
//    let activeEle = document.querySelector("."+name);
//    console.log(activeEle);
//    activeEle.classList.add("active");
//    setTimeout(function(){
//        activeEle.classList.remove("active");
//        
//    },500)
//}
//
//function makeSound(name){
//    //console.log(name);
//    switch (name){
//        case "lion":
//        let sound1 = new Audio("./sound/lion.mp3");
//        sound1.play();
//        break;
//            
//        case "cougar":
//        let sound2 = new Audio('./sound/cougar.mp3');
//        sound2.play();
//        break;
//            
//        case "dog":
//        let sound3 = new Audio('./sound/bark.mp3');
//        sound3.play();
//        break;
//    }
//}