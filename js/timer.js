"Use Strict"

//Timer
let time = 0;

setInterval(function() 
    { document.body.getElementsByClassName("timer")[0].innerText = `TIME: ${++time}`;
    }, 1000);
