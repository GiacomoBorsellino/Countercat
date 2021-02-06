"Use Strict"

// Start    
let count = 0;

// Button minus
let minus = document.body.getElementsByClassName("button")[0].lastElementChild.firstElementChild;

// The World     document.body.getElementsByClassName("world")[0]
let world = 1;

// Script remove unit to counter
function counterMinus() {
    --count;
    // Script changes text
    document.body.getElementsByClassName("counter")[0].innerText = `COUNTER: ${count}`;

     // Beyond the World
     if (count > 0 && count < 10) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 0`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor1.png");
    } else if (count > 10 && count < 20) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 1`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor2.png");
    } else if (count > 20 && count < 30) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 2`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor3.png");
    } else if (count > 30 && count < 40) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 3`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor4.png");
    } else if (count > 40 && count < 50) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 4`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor5.png");
    } else if (count > 50 && count < 60) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 5`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor6.png");
    } else if (count > 60 && count < 70) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 6`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor7.png");
    } else if (count > 70 && count < 80) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 7`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor8.png");
    } else if (count > 80 && count < 90) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 8`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor9.png");
    } else if (count > 90 && count < 99) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 9`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor10.png");
    } else if (count > 100 && count < Infinity) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 10`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor11.png");

    } else if (count < 0 && count > -10) {
        document.body.getElementsByClassName("world")[0].innerText = `SURRENDER`;
    } else if (count < -10 && count > -20) {
        document.body.getElementsByClassName("world")[0].innerText = `SURRENDER`;

        setTimeout(function(){ document.body.getElementsByClassName("floor")[0].style.display = "none"; }, 200);
        setTimeout(function(){ document.body.getElementsByClassName("counter")[0].style.display = "none"; }, 300);
        setTimeout(function(){ document.body.getElementsByClassName("timer")[0].style.display = "none"; }, 400);
        setTimeout(function(){ document.body.getElementsByClassName("button")[0].lastElementChild.firstElementChild.style.display = "none"; }, 500);
        setTimeout(function(){ document.body.getElementsByClassName("button")[0].lastElementChild.lastElementChild.style.display = "none"; }, 600);
        setTimeout(function(){ document.body.getElementsByClassName("reset")[0].style.display = "none"; }, 700);
        setTimeout(function(){ document.body.getElementsByClassName("coins")[0].style.display = "none"; }, 800);
        setTimeout(function(){ document.body.getElementsByClassName("theme")[0].style.display = "none"; }, 900);
        setTimeout(function(){ document.body.getElementsByClassName("audioBut")[0].style.display = "none"; }, 1000);

        setTimeout(function(){window.location.href = "../pages/scrollBad.html";}, 1100);
    }
}

// Event plus
minus.onclick = counterMinus;

// Button plus
let plus = document.body.getElementsByClassName("button")[0].lastElementChild.lastElementChild;

// Script add unit to counter
function counterPlus() {
    ++count;
    // Script changes text
    document.body.getElementsByClassName("counter")[0].innerText = `COUNTER: ${count}`;

    // Over the World
    if (count > 0 && count < 10) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 0`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor1.png");
    } else if (count > 10 && count < 20) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 1`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor2.png");
    } else if (count > 20 && count < 30) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 2`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor3.png");
    } else if (count > 30 && count < 40) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 3`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor4.png");
    } else if (count > 40 && count < 50) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 4`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor5.png");
    } else if (count > 50 && count < 60) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 5`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor6.png");
    } else if (count > 60 && count < 70) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 6`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor7.png");
    } else if (count > 70 && count < 80) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 7`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor8.png");
    } else if (count > 80 && count < 90) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 8`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor9.png");
    } else if (count > 90 && count < 98) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 9`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor10.png");
    } else if (count > 99 && count < Infinity) {
        document.body.getElementsByClassName("world")[0].innerText = `STEPS: 10`;
        document.body.getElementsByClassName("floor")[0].firstElementChild.setAttribute("src", "../images/floor11.png");

        setTimeout(function(){ document.body.getElementsByClassName("floor")[0].style.display = "none"; }, 200);
        setTimeout(function(){ document.body.getElementsByClassName("counter")[0].style.display = "none"; }, 300);
        setTimeout(function(){ document.body.getElementsByClassName("timer")[0].style.display = "none"; }, 400);
        setTimeout(function(){ document.body.getElementsByClassName("button")[0].lastElementChild.firstElementChild.style.display = "none"; }, 500);
        setTimeout(function(){ document.body.getElementsByClassName("button")[0].lastElementChild.lastElementChild.style.display = "none"; }, 600);
        setTimeout(function(){ document.body.getElementsByClassName("reset")[0].style.display = "none"; }, 700);
        setTimeout(function(){ document.body.getElementsByClassName("coins")[0].style.display = "none"; }, 800);
        setTimeout(function(){ document.body.getElementsByClassName("theme")[0].style.display = "none"; }, 900);
        setTimeout(function(){ document.body.getElementsByClassName("audioBut")[0].style.display = "none"; }, 1000);

        setTimeout(function(){window.location.href = "../pages/scrollGood.html";}, 1100);

    } else if (count < 0 && count > -10) {
        document.body.getElementsByClassName("world")[0].innerText = `SURRENDER`;
    } else if (count < -10 && count > -20) {
        document.body.getElementsByClassName("world")[0].innerText = `SURRENDER`;

        setTimeout(function(){ document.body.getElementsByClassName("floor")[0].style.display = "none"; }, 200);
        setTimeout(function(){ document.body.getElementsByClassName("counter")[0].style.display = "none"; }, 300);
        setTimeout(function(){ document.body.getElementsByClassName("timer")[0].style.display = "none"; }, 400);
        setTimeout(function(){ document.body.getElementsByClassName("button")[0].lastElementChild.firstElementChild.style.display = "none"; }, 500);
        setTimeout(function(){ document.body.getElementsByClassName("button")[0].lastElementChild.lastElementChild.style.display = "none"; }, 600);
        setTimeout(function(){ document.body.getElementsByClassName("reset")[0].style.display = "none"; }, 700);
        setTimeout(function(){ document.body.getElementsByClassName("coins")[0].style.display = "none"; }, 800);
        setTimeout(function(){ document.body.getElementsByClassName("theme")[0].style.display = "none"; }, 900);
        setTimeout(function(){ document.body.getElementsByClassName("audioBut")[0].style.display = "none"; }, 1000);

        setTimeout(function(){window.location.href = "../pages/scrollBad.html";}, 1100);
    }
}

// Event minus
plus.onclick = counterPlus;

























/*
// script add unit to counter
function counterPlus() {
    return ++count;

    // Injection text
    document.body.getElementsByClassName("counter")[0].innerText = `COUNTER: ${count}`;
}

// Event plus
let plus = document.body.getElementsByClassName("button")[0].lastElementChild.lastElementChild;

plus.onclick = counterPlus;
*/
