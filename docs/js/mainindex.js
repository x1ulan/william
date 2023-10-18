setTimeout(()=>{
    var warboxs = document.getElementsByClassName("warblock");
    for (var i=0;i<warboxs.length; i++){
        warboxs[i].style.animation = "intro-all 1s forwards";
        warboxs[i].style.opacity = 100;
    }
}, 100)
setTimeout(()=>{
    var warboxs = document.getElementsByClassName("warblock");
    for (var i=0;i<warboxs.length; i++){
        warboxs[i].style.animation = "";
    }
}, 1100)