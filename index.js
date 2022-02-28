document.getElementById("redirect-btn").onclick = function (){
    open("#")
}
document.getElementById("logo").onclick = function (){
    open("#")
}

// Hide Scroller

let scrollPrevio = window.scrollY;
window.onscroll = function () {
    let scrollActual = window.scrollY;
    if (scrollPrevio > scrollActual) {
        document.getElementById("container-header").style.top = "0";
    } else {
        document.getElementById("container-header").style.top = "-20%"
    }
    scrollPrevio = scrollActual;
}


// redirección del cuarto artículo

document.querySelector("#container-fourth-article").onclick = function (){
    open("#")
}


// redirección login
document.querySelector("#login-logo").onclick = function (){
    open("#")
}
