"Use Strict"

// Element
let reset = document.body.getElementsByClassName("reset")[0];

// Event
reset.onclick = function() {
// Counter
count = 0;
document.body.getElementsByClassName("counter")[0].innerText = `COUNTER: ${count}`;  
// Timer
time = 0;
document.body.getElementsByClassName("timer")[0].innerText = `TIME: ${time}`; 
// World
world = 0;
document.body.getElementsByClassName("world")[0].innerText = `STEPS: ${world}`
// Floor
document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor1.png");
}



