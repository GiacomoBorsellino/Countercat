
setTimeout(function(){
    document.body.getElementsByClassName("scroll1")[0].style.display = "block";
    document.body.getElementsByClassName("scroll2")[0].style.display = "none";
    document.body.getElementsByClassName("scroll3")[0].style.display = "none";

    document.body.getElementsByClassName("arrow")[0].style.display = "none";
}, 0);

setTimeout(function(){
    document.body.getElementsByClassName("scroll1")[0].style.display = "none";
    document.body.getElementsByClassName("scroll3")[0].style.display = "none";
    document.body.getElementsByClassName("scroll2")[0].style.display = "block";
},5000);

setTimeout(function(){
    document.body.getElementsByClassName("scroll1")[0].style.display = "none";
    document.body.getElementsByClassName("scroll2")[0].style.display = "none";
    document.body.getElementsByClassName("scroll3")[0].style.display = "block";
},10000)

setTimeout(function(){
    document.body.getElementsByClassName("arrow")[0].style.display = "block";
},13000)