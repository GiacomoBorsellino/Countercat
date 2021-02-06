"Use Strict"

// Funzione Crepuscolo
function crepuscolo() {
    let r = 157;
    let g = 157;
    let b = 255;

    // Intervallo 1
    let alfa = setInterval(function() 
    {
        document.body.style.backgroundColor = 'rgb(' + --r + ',' + --g + ',' + --b + ')';
    },  50); 


    //Blocco intervallo 1
    setTimeout(function() {clearInterval(alfa);}, 15000); 
}

// Funzione Aurora
function aurora() {
    let r = -155;
    let g = -155;
    let b = 0;

    // Intervallo 1
    let beta = setInterval(function() 
    {
        document.body.style.backgroundColor = 'rgb(' + ++r + ',' + ++g + ',' + ++b + ')';
    },  50); 


    // Blocco intervallo 1
    setTimeout(function() {clearInterval(beta);}, 15000); 
}


crepuscolo();
setTimeout(function(){ aurora(); }, 15001);

setInterval(function() 
{
    crepuscolo();

    setTimeout(function(){ aurora(); }, 15001);

},  30002); 