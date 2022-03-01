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


// abrir y cerrar login

// variables 

let openLogIn = document.querySelector("#login");

let openRegister = document.querySelector("#register");

let logInPopUp = document.querySelector("#login-back");

let registerPopUp = document.querySelector("#register-back");

let btnMainRegister = document.querySelector("#redirect-btn");

let fourthArticle = document.querySelector("#container-fourth-article")

let registerRedirect = document.querySelector("#redirect-register-popup")

let logInRedirect = document.querySelector("#redirect-login-popup")

// abrir

openLogIn.onclick = function abrirLogIn(){
    logInPopUp.style.display = "flex"
}

openRegister.onclick = function abrirRegister(){
    registerPopUp.style.display = "flex"
}

btnMainRegister.onclick = function abrirRegister(){
    registerPopUp.style.display = "flex"
}

fourthArticle.onclick = function abrirRegister(){
    registerPopUp.style.display = "flex"
}

registerRedirect.onclick = function abrirRegister(){
    registerPopUp.style.display = "flex"
    logInPopUp.style.display = "none"
}

logInRedirect.onclick = function abrirLogIn(){
    logInPopUp.style.display = "flex"
    registerPopUp.style.display = "none"
}

// cerrar


// loginPopUp.onclick = function (){
//     loginPopUp.style.display = "none";
// }

logInPopUp.onclick = function (evento) {
    if (evento.target === logInPopUp) {
    logInPopUp.style.display = "none";
    }
}

registerPopUp.onclick = function (evento) {
    if (evento.target === registerPopUp) {
    registerPopUp.style.display = "none";
    }
}

// redirección login y register
document.querySelector("#login-logo").onclick = function (){
    open("#")
}
document.querySelector("#register-logo").onclick = function (){
    open("#")
}



// abrir y cerrar menú mobile

let menuClose = document.querySelector("#menu-open");

let menuIconHeader = document.querySelector("#menu-header");

let menuIcon = document.querySelector("#menu-mobile");

// abrir

menuIconHeader.onclick = function openMenu(){
    menuClose.style.display = "flex"
}

// cerrar
menuIcon.onclick = function closeMenu(){
    menuClose.style.display = "none";
}



