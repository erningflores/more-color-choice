const select = document.querySelector("select");
const html = document.querySelector("html");
const reset = document.getElementById("reset");

select.addEventListener("change", setColor);

function setColor(){
    const choice = select.value;

    if(choice !== "psychedelic" && html.classList.contains("psychedelic-color")){
        html.classList.remove("psychedelic-color");
    }

    switch(choice){
        case "white":
            update(choice, "black");
            break;
        case "black":
            update(choice, "white");
            break;
        case "purple":
            update(choice, "yellow");
            break;
        case "yellow":
            update(choice, "purple");
            break;
        case "psychedelic":
            update(psychedelicColor(), "yellow");
            break;
        default:
            break;
    }
}
    
function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
function psychedelicColor(){
    html.classList.add("psychedelic-color");
}

reset.addEventListener("click", function(){
    window.location.reload();
});