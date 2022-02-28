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



// abrir y cerrar login

// variables 

let openLogIn = document.querySelector("#login")

let openRegister = document.querySelector("#register")

let loginPopUp = document.querySelector("#login-back")

// abrir

openLogIn.onclick = function(){
    loginPopUp.style.display = "flex"
}

openRegister.onclick = function(){
    loginPopUp.style.display = "flex"
}

// cerrar


loginPopUp.onclick = function (){
    loginPopUp.style.display = "none";
}


// redirección login
document.querySelector("#login-logo").onclick = function (){
    open("#")
}
