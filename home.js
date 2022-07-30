window.addEventListener("DOMContentLoaded", () => {
    if ("Usuario" in localStorage) {
        renderCards()
        return false
    }
    if (!"Usuario" in localStorage) {
        location.assign("/index.html")
        return true
    }
})

// Array de empresas 
let arrCompanies = []

const localStorageUser = JSON.parse(localStorage.getItem("Usuario")).user

// Clase para las empresas

class Company {

    static currentID = 1

    constructor(
        name,
        userPfP = "",
        background = "",
        description = "Todavía no tiene descripción",
        totalFund = 0,
        tags = [],
        lastFunding = `Todavía nadie financió :(. ¡${localStorageUser}, Sé el primero en dar el paso!`) {

        this.ID = Company.currentID;
        this.name = name;
        this.userPfP = userPfP;
        this.background = background;
        this.description = description;
        this.totalFund = totalFund;
        this.tags = tags
        this.lastFunding = lastFunding

        // Subir id al crear objeto
        Company.currentID++;

        // Meter empresa en array de objetos
        arrCompanies.push(this)
    }

    // Actualizar url de foto de perfil de empresa 
    updateUserPfP = (newUserPfP) => this.userPfP = newUserPfP

    // Actualizar url de background de perfil de empresa
    updateBackground = (newBackground) => this.background = newBackground

    // Actualizar descripción 
    updateDescription = (newDescription) => this.description = String(newDescription)

    // Actualizar monto total de donación
    addFunding = (funding) => {
        this.totalFund += funding || 0
        this.lastFunding = `La última persona en financiar esta empresa fue ${localStorageUser}!`
    }

    // Actualizar redes

    // Actualizar tags
    updateTags = (newTags) => this.tags = [newTags]
}

// Empresas Ficticias

const MagiaEnMovimiento = new Company(
    "magia en movimiento",
    "./assets/Empresas Fantasmas/empresa 1/userpfp.webp",
    "./assets/Empresas Fantasmas/empresa 1/bg.webp",
    "Después de unas pizzas con cerveza, a Lucre se le ocurrió bailar...como seria posible eso, si esta en silla de ruedas? Resulta que tiene alas la muy agrandada. SI LO PENSASTE ES POSIBLE!!! Las alas se transformaron en amigues, artistas y familia que acompañaron su vuelo. a partir de este encuentro no paramos de crear... Prepárense.",
    1000,
    ["Arte", "Artesanías", "Música", "Cine y Video", "Redes Sociales"],
    "Juancito"
)

const LasAuroras = new Company(
    "Las Auroras",
    "./assets/Empresas Fantasmas/empresa 2/userpfp.webp",
    "./assets/Empresas Fantasmas/empresa 2/bg.webp",
    "Gracias por tu aporte, por mínimo que parezca, para nosotras es un montón y sumadas sus compañias nos ayudan a seguir creciendo y dando lo mejor en cada curso para ustedes!", 0,
    ["Arte", "Artesanías", "Educación", "Diseño"]
)

const PalulaTejidos = new Company(
    "Palula Tejidos",
    "./assets/Empresas Fantasmas/empresa 3/userpfp.webp",
    "./assets/Empresas Fantasmas/empresa 3/bg.webp",
    "Profe de tejido, tejediseñadora de prendas y guías de tejido en tricot y tricot circular. Aprendé a tejer a tu medida los diseños más lindos. Tejiendo Siempre", 10500,
    ["Diseño", "Artesanías", "Moda", "Comunidades", "Blog"]
)

const HaikuMultiespacio = new Company(
    "Haiku Multiespacio",
    "./assets/Empresas Fantasmas/empresa 4/user pfp.webp",
    "./assets/Empresas Fantasmas/empresa 4/bg.webp",
    "Hola! Queremos presentarnos, Somos HAIKU MULTIESPACIO, somos un centro cultural que abre sus puertas en COGHLAN, nos proponemos ser un espacio cultural de referencia dentro del barrio donde la tradición local y la vanguardia puedan complementarse. Queremos que los vecinos, niñxs y adultxs, puedan contar con un lugar de encuentro y desarrollo artístico y cultural.Buscamos transmitir valores de trabajo cooperativo, libertad de expresión, inclusión y multiplicidad de estéticas. Pronto vas a poder acercarte para hacer talleres, seminarios y charlas; tomar algo, ver espectáculos, festejar cumpleaños, tomarte algo con amigos, venir a la biblioteca y a la  juegoteca, encontrar emprendedores y artesanos, conocer artistas plásticos, narradores, músicos, actores.Podes conocer todas nuestras propuestas en las redes de Haiku y Jugando en Manada @haiku.espacio y @jugandoenmanada Queremos darte la bienvenida y que seas parte de este proyecto!", 2000,
    ["Arte", "Artesanías", "Educación", "Diseño"]
)

// Render empresas
const homeApp = document.getElementById("home-app")

const crearElemento = (elemento) => document.createElement(elemento)

const renderCards = () => {


    const homeApp = document.getElementById("home-app")

    arrCompanies.forEach(empresa => {
        const appLi = crearElemento("li")
        homeApp.append(appLi)

        const appCard = crearElemento("article")
        appCard.classList.add("app-card")
        appLi.append(appCard)


        const appCardBg = crearElemento("div")
        appCardBg.classList.add("app-card-bg")
        appCard.append(appCardBg)

        const cardBgImg = crearElemento("img")
        cardBgImg.setAttribute("src", `${empresa.background}`)
        cardBgImg.classList.add("card-bg-img")
        appCardBg.append(cardBgImg)


        const appCardUserPfP = crearElemento("div")
        appCardUserPfP.classList.add("app-card-userpfp")
        appCard.append(appCardUserPfP)

        const cardUserPfPImg = crearElemento("img")
        cardUserPfPImg.setAttribute("src", `${empresa.userPfP}`)
        cardUserPfPImg.classList.add("card-userpfp-img")
        appCardUserPfP.append(cardUserPfPImg)


        const appCardText = crearElemento("section")
        appCardText.classList.add("app-card-text")
        appCard.append(appCardText)

        const cardHeading = crearElemento("h3")
        cardHeading.classList.add("card-heading", "text")
        cardHeading.textContent = `${empresa.name}`
        appCardText.append(cardHeading)

        const appCardUl = crearElemento("ul")
        appCardUl.classList.add("app-card-ul")
        appCardText.append(appCardUl)


        const tags = empresa.tags
        tags.forEach(tag => {
            const cardTag = crearElemento("li")
            cardTag.classList.add("card-tag", "text")
            cardTag.textContent = tag
            appCardUl.append(cardTag)
        });

        const cardSpan = crearElemento("span")
        cardSpan.classList.add("card-span", "text")
        cardSpan.textContent = `$${empresa.totalFund} financiado ❤️`
        appCardText.append(cardSpan)
    });
}

const containerSearchBar = document.getElementById("container-search-bar")
const searchBar = document.getElementById("search-bar")
const searchField = crearElemento("div")

containerSearchBar.addEventListener("focusin", () => {
    searchField.setAttribute("id", "search-field")
    containerSearchBar.append(searchField)
})

containerSearchBar.addEventListener("input", () => {
    let valorSearchBar = searchBar.value.toLowerCase()

    const searchResults = arrCompanies.filter(empresa => empresa.name.toLowerCase().includes(valorSearchBar))

    searchResults.forEach(empresa => {
        const searchResult = crearElemento("li")
        searchResult.textContent = `${empresa.name}`
        searchResult.classList.add("search-result", "text")
        if (searchField.textContent.includes(searchResult.textContent)) {
            searchField.innerHTML = ""
            // searchField.textContent = ""
            searchField.append(searchResult)
        } else {

            searchField.append(searchResult)
        }
    });
})

containerSearchBar.addEventListener("pointerleave", () => {
    // searchField.remove()
})