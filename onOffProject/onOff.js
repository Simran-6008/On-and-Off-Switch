var comp = 0
let button = document.querySelector(".click")
button.addEventListener("click",() => {
    button.textContent="Turn Off";
    if(comp===0){
        button.textContent="Turn Off"
        comp = 1
    }else{
        button.textContent="Turn On"
        comp = 0
    }
})


