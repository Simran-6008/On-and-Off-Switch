var comp = 0
let button = document.querySelector(".clickButton")
button.addEventListener("click",() => {
    if(comp===0){
        button.textContent="Turn On"
        button.style.backgroundColor = "green"
        let image = document.querySelector(".bulbImage")
        image.setAttribute("src" , "/On-and-Off-Switch/bulb-on.png")
        //  document.getElementsByClassName(".bulbImage")
        //  .src="/On-and-Off-Switch/bulb-off.png"
        comp = 1
    }else{
        button.textContent="Turn Off"
        button.style.backgroundColor = "white"
        let image = document.querySelector(".bulbImage")
        image.setAttribute("src" , "/On-and-Off-Switch/bulb-off.png")
        comp = 0
    }
})


