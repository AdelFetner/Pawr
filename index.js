// Hide Scroller
const header = document.getElementById("container-header");

let scrollPrevio = window.scrollY;
window.addEventListener("scroll", () => {
    const scrollActual = window.scrollY;
    if (scrollPrevio > scrollActual) {
        header.classList.remove("header-off");
    } else {
        header.classList.add("header-off");
    }
    scrollPrevio = scrollActual;
});

// function de renderizar

const render = (evento) => {

    // function para no repetir document.createElement y hacer más entendible el código 

    const crearElemento = (elemento) => document.createElement(elemento);

    const body = document.body;

    const divBackground = crearElemento("div");
    divBackground.setAttribute("id", "background-card");
    body.appendChild(divBackground);
    // render de la card inicial de login/register


    divBackground.innerHTML = `
        <article id="card-login">
            <div id="card-login-top">
                <img src="assets/logo.svg" alt="Imagen del Logo Pawr!" id="card-logo" draggable="false">
                <div id="container-login-span">
                    <span href="" class="login-span" id="top-login">Iniciar Sesión</span>
                    <span href="" class="login-span login-span-selected" id="top-register">Registrarse</span>
            </div>
        </div>

        <form action="" id="card-login-info">
            <label for="user" class="card-login-label">Nombre de Usuario o Email</label>
            <input type="text" name="user" class="card-login-input card-login-input-color" id="user">
            <label for="password" class="card-login-label">Contraseña</label>
            <input type="password" name="password" class="card-login-input card-login-input-color card-password" id="password">

            <label for="password-verify" class="card-login-label" id="password-verify-label">Confirmá la Contraseña</label>
            <input type="password" name="password-verify" class="card-login-input card-login-input-color card-password" id="password-verify-input">

            <button type="submit" id="card-login-btn">Registrate</button>

            <p id="card-login-paragraph">Al registrarte, aceptás nuestros <a href="" class="card-login-norm">Terminos y Condiciones</a> y nuestra <a href="" class="card-login-norm">Política de Privacidad</a>.</p>
        </form>
        </article>
    `;

    // render del login

    // elementos

    const passwordVerifyInput = document.getElementById("password-verify-input");
    const passwordVerifyLabel = document.getElementById("password-verify-label");
    const cardParagraph = document.getElementById("card-login-paragraph");
    const cardBtn = document.getElementById("card-login-btn")
    // login / register spans de la card 

    const topLogin = document.getElementById("top-login")
    const topRegister = document.getElementById("top-register")


    const renderCardLogIn = () => {
        passwordVerifyInput.remove()
        cardParagraph.remove()

        cardBtn.textContent = "Ingresá"

        const forgetPassword = crearElemento("a");
        forgetPassword.setAttribute("id", "forget-password");

        passwordVerifyLabel.replaceWith(forgetPassword);
        forgetPassword.textContent = "¿Olvidaste tu contraseña?";

        topRegister.classList.remove("login-span-selected")
        topLogin.classList.add("login-span-selected")
    }
    const renderCardRegister = () => {
        const forgetPassword = document.getElementById("forget-password")

        forgetPassword.replaceWith(passwordVerifyLabel)
        passwordVerifyLabel.after(passwordVerifyInput)

        cardBtn.after(cardParagraph)

        cardBtn.textContent = "Registrate"

        topLogin.classList.remove("login-span-selected")
        topRegister.classList.add("login-span-selected")
    }

    if (evento.target == logInBtn) {
        renderCardLogIn()
    }


    topLogin.addEventListener("click", renderCardLogIn)
    topRegister.addEventListener("click", renderCardRegister)
    // Para evitar que el remove del divBackground se propague a los elementos hijos 

    const cardLogin = document.getElementById("card-login");
    cardLogin.addEventListener("click", (evento) => {
        evento.stopPropagation();
    });

    // Borrar Card al clickear background

    divBackground.addEventListener("click", () => {
        divBackground.remove();
    });

    // Borrar Card al clickear logo
    const cardLogo = document.getElementById("card-logo")
    cardLogo.addEventListener("click", () => divBackground.remove())


    // Register user 

    const form = document.getElementById("card-login-info")

    const passwordInput = document.getElementById("password")
    const verifyPasswordInput = document.getElementById("password-verify-input")

    // validación de mail regex 

    const span = document.createElement("span")
    span.classList.add("card-login-span")


    // validación para mostrar aviso en el input
    const inputError = (evento) => {
        // variable para que se lea mejor
        const elemento = evento.target
        if (elemento.tagName.toLowerCase() == "input" && elemento.value == "" || !evento.target) {
            elemento.classList.remove("card-login-input-color")
            elemento.classList.add("bad-try")

            // Agregar aviso de campo incorrecto
            span.textContent = "Te faltó llenar este campo"
            // Insertar span siguiente al target del event listener
            elemento.after(span)
        } else if (elemento.tagName.toLowerCase() == "input") {
            elemento.classList.add("card-login-input-color")
            elemento.classList.remove("bad-try")
            // conditional para borrar solo el span correspondiente al campo actual
            if (elemento.nextSibling == span && !elemento.value) {
                elemento.nextSibling.remove()
            }
        }
    }

    // validación de password

    const passwordVerify = () => {
        const password = document.getElementsByClassName("card-password")

        for (let elemento of password) {

            elemento.after(span)

            // rango de digitos
            if (elemento.value.length <= 6 || elemento.value.length >= 24) {
                span.textContent = "Por favor, ingresá una contraseña mayor que 6 digitos y menor que 24"
                return false
            }
            // una letra
            if (elemento.value.search(/[a-z]/i) < 0) {
                span.textContent = "Tu contraseña tiene que tener al menos una letra"
                return false
            }
            // una Mayuscula 
            if (elemento.value.search(/[A-Z]/) < 0) {
                span.textContent = "Tu contraseña tiene que tener al menos una mayuscula"
                return false
            }
            // un numero
            if (elemento.value.search(/[0-9]/) < 0) {
                span.textContent = "Tu contraseña tiene que tener al menos un número"
                return false
            }
            if (passwordInput.value != verifyPasswordInput.value) {
                span.textContent = "Las contraseñas ingresadas no son idénticas"
                return false
            }
            span.textContent = "Contraseña valida"
            return true
        }
    }

    passwordInput.addEventListener("focusout", passwordVerify)
    verifyPasswordInput.addEventListener("focusout", passwordVerify)

    // verificación de usuario 
    const userVerify = () => {
        let user = document.getElementById("user")

        span.textContent = ""
        user.after(span)

        user = user.value

        // Checkear si está vacio o no existe
        if (!user || !user.trim()) {
            span.textContent = "Por favor ingresá un usuario"
            return false
        }
        // rango de digitos
        if (user.length <= 4 || user.length >= 30) {
            span.textContent = "Por favor, ingresá un usuario mayor que 4 digitos y menor que 30"
            return false
        }
        span.textContent = "Usuario valido"
        return true
    }

    const userInput = document.getElementById("user")

    userInput.addEventListener("focusout", userVerify)

    form.addEventListener("focusout", inputError)

    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        if (passwordVerify() && userVerify()) {
            const userData = [...evento.target.elements]
                // filter para filtrar todos los elementos que no sean tipo submit (el único siendo button)
                .filter(elemento => elemento.type != "submit")
                // reduce para transformar los names de los elementos del form en key objects con los values como keyvalues
                .reduce((acumulador, elemento) => {
                    acumulador[elemento.getAttribute("name")] = elemento.value
                    return acumulador
                }, {})
            localStorage.setItem("Usuario", JSON.stringify(userData))
            location.reload()
        }
    })

};




// elementos

const logo = document.getElementById("logo");
logo.addEventListener("click", () => window.scrollTo(0, 0));
const footerLogo = document.getElementById("footer-logo")
footerLogo.addEventListener("click", () => window.scrollTo(0, 0));

// redirección login y register
const logInBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const fourthArticle = document.getElementById("container-fourth-article");
const btnMainRegister = document.getElementById("redirect-btn");


logInBtn.addEventListener("click", render)
registerBtn.addEventListener("click", render)
fourthArticle.addEventListener("click", render)
btnMainRegister.addEventListener("click", render)

// menú mobile

if (window.innerWidth < 600) {
    const nav = document.getElementById("container-nav")
    const mobileMenu = document.createElement("div")
    mobileMenu.setAttribute("id", "mobile-menu")
    nav.appendChild(mobileMenu)
    mobileMenu.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `

    const mobileCard = document.createElement("section")
    mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active")
        if (mobileMenu.classList.contains("active")) {
            mobileCard.setAttribute("id", "mobile-card")
            nav.appendChild(mobileCard)
            mobileCard.innerHTML = `
                <ul id="mobile-card-text">
                    <li><a class="mobile-card-anchor">¿Quienes somos?</a></li>
                    <li><a class="mobile-card-anchor">Sobre Pawr!+</a></li>
                    <li><a class="mobile-card-anchor">Preguntas Frecuentes</a></li>
                    <li><a class="mobile-card-anchor">Blog</a></li>
                </ul>
                <button type="button" id="mobile-card-register">Registrate</button>
            `

            const mobileRegister = document.getElementById("mobile-card-register")
            mobileRegister.addEventListener('click', () => {
                render()
                mobileCard.remove()
                mobileMenu.classList.toggle("active")
            })
        } else {
            mobileCard.remove()
        }
    })
}

const userLoadedIn = () => {

}

// evento load 
window.addEventListener("DOMContentLoaded", () => {
    if ("Usuario" in localStorage) {
        console.log("Está usuario en local")
        location.replace("/home.html")
        return false
    }
    if (!"Usuario" in localStorage) {
        console.log("No está usuario en local")
        return true
    }
})