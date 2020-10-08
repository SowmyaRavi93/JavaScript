const  accordion = document.querySelectorAll(".panel");
accordion.forEach(function(ele){
    ele.addEventListener("click", toggleEle);  
})

function toggleEle(e){
    console.log(e.target.parentElement);
    // to keep one body open at a time 
    accordion.forEach(function(ele){
        if(e.target.parentElement===ele){
            ele.classList.toggle('active');
        }
        else {
            ele.classList.remove('active');
        }
    })
}