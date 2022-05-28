function randomColor(){
    let color = "#";
    let values = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    for(let i = 0; i < 6; i++){
        color += values[Math.floor(Math.random()*values.length)]
    }
    return color
}

function randomDegree(){
    return Math.floor(Math.random()*360)
}

function solidColor(color){
    body.style = `background: ${color}`;
}

function linearGradient(deg,firstColor, secondColor) {
    body.style = `background: linear-gradient(${deg}deg,${firstColor}, ${secondColor})`;
}

const body = document.querySelector('body');
const randomBtn = document.querySelector("#random-background");
const choiceBtn = document.querySelector("#choice-background");
const randomContainer = document.querySelector(".random-container");
const randomSolid = document.querySelector("#random-solid");
const randomLinear = document.querySelector("#random-linear");

const backgroundText = document.querySelector("#background-text");

const choiceContainer = document.querySelector(".choice-container");
const userSolid = document.querySelector("#user-solid");
const userLinear = document.querySelector("#user-linear");
const choiceSolid = document.querySelector(".choice-solid");
const choiceLinear = document.querySelector(".choice-linear");

const changeLinear = document.querySelector("#change-linear-btn");
const changeSolid = document.querySelector("#change-solid-btn");

randomBtn.addEventListener("click",function(){
    choiceContainer.classList.remove("show");
    randomContainer.classList.add("show");
})

randomSolid.addEventListener("click", function(){
    let color = randomColor();
    backgroundText.innerText = `background: ${color}`;
    solidColor(color)
} );

randomLinear.addEventListener("click", function(){
    let firstColor = randomColor();
    let secondColor = randomColor();
    let deg = randomDegree();
    backgroundText.innerText = `background: linear-gradient(${deg}deg,${firstColor},${secondColor})`;
    linearGradient(deg, firstColor,secondColor);
} );

choiceBtn.addEventListener("click",function(){
    randomContainer.classList.remove("show");
    choiceContainer.classList.add("show");
});

userSolid.addEventListener("click",function(){
    choiceSolid.classList.add("show");
    choiceLinear.classList.remove("show");

});

userLinear.addEventListener("click",function(){
    choiceLinear.classList.add("show");
    choiceSolid.classList.remove("show");

});

changeSolid.addEventListener("click", function(){
    let color = document.querySelector("#user-color").value;
    backgroundText.innerText = `background: ${color}`;
    solidColor(color);
}); 

changeLinear.addEventListener("click", function(){
    let firstColor =  document.querySelector("#first-color").value;
    let secondColor =  document.querySelector("#second-color").value;
    let deg = document.querySelector("#degree").value;
    backgroundText.innerText = `background: linear-gradient(${deg} deg, ${firstColor},${secondColor})`;
    linearGradient(deg, firstColor,secondColor);
}); 

