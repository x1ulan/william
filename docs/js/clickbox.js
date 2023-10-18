function onh(mode){
    var box = document.getElementsByClassName("box")
    if (box[0].style.opacity == 0){
    box[0].style.opacity = 100;} else if (box[0].style.opacity == 100){box[0].style.opacity = 0;}
}
function onh_del(){
    var box = document.getElementsByClassName("box")
    box[0].style.opacity = 0
}
