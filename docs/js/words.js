function intro(i, warboxs){
    warboxs[i].style.animation = `intro-all ${1+i*0.2}s forwards`;
    warboxs[i].style.opacity = 100;
}

setTimeout(()=>{
    var warboxs = document.getElementsByClassName("warblock");
    for (var i=0;i<warboxs.length; i++){intro(i, warboxs)}
}, 100)