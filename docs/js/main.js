function show(index){
    var tcontents = document.getElementsByClassName("tcontent");
    var warboxs = document.getElementsByClassName("warblock")
    if (tcontents[index].style.visibility == "visible"){
        tcontents[index].style.animation = "sd-fadeout 0.2s forwards";
        setTimeout(()=>{tcontents[index].innerHTML = "";
        tcontents[index].style.visibility = "collapse";
        warboxs[index].style.animation = "showdetail-r 0.5s forwards";}, 200)
    } else {
        warboxs[index].style.animation = "showdetail 0.5s forwards";
        setTimeout(()=>{tcontents[index].style.visibility = "visible";
        tcontents[index].innerHTML = infos[index];
        tcontents[index].style.animation = "sd-fadein 0.2s forwards";}, 500)
    }
}
function intro(i, warboxs){
    warboxs[i].style.animation = `intro-all ${1+i*0.2}s forwards`;
    warboxs[i].style.opacity = 100;
}

setTimeout(()=>{
    var warboxs = document.getElementsByClassName("warblock");
    for (var i=0;i<warboxs.length; i++){intro(i, warboxs)}
}, 100)