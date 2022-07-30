// let arrCompanies = []

// const localStorageUser = JSON.parse(localStorage.getItem("Usuario")).user

// class Company {

//     static currentID = 1

//     constructor(
//         name,
//         userPfP = "",
//         background = "",
//         description = "Todavía no tiene descripción",
//         totalFund = 0,
//         socialMedia = [],
//         tags = [],
//         lastFunding = `Todavía nadie financió :(. ¡${localStorageUser}, Sé el primero en dar el paso!`) {

//         this.ID = Company.currentID;
//         this.name = name;
//         this.userPfP = `url(${userPfP})`;
//         this.background = `url(${background})`;
//         this.description = description;
//         this.totalFund = totalFund;
//         this.socialMedia = [socialMedia];
//         this.tags = [tags]
//         this.lastFunding = lastFunding

//         // Subir id al crear objeto
//         Company.currentID++;

//         // Meter empresa en array de objetos
//         arrCompanies.push(Company)
//     }

//     // Actualizar url de foto de perfil de empresa
//     updateUserPfP = (newUserPfP) => this.userPfP = newUserPfP

//     // Actualizar url de background de perfil de empresa
//     updateBackground = (newBackground) => this.background = newBackground

//     // Actualizar descripción
//     updateDescription = (newDescription) => this.description = String(newDescription)

//     // Actualizar monto total de donación
//     addFunding = (funding) => {
//         this.totalFund += funding || 0
//         this.lastFunding = `La última persona en financiar esta empresa fue ${localStorageUser}!`
//     }

//     // Actualizar redes
//     updateSocialMedia = (newSocialMedia) => this.socialMedia = [newSocialMedia]

//     // Actualizar tags
//     updateTags = (newTags) => this.tags = [newTags]
// }

// const Fosforito = new Company(
//     "Fosforito",
//     "fosforo.png",
//     "bg.png",
//     "Somos una empresa multimillonaria miamiiii",
//     150000,
//     ["fosforo.com", "twitter.com/fosforo"],
//     ["Madera", "Arquitectura", "Cuarzo"],
//     "Juancito"
// )
// console.table(Fosforito)

// console.log(arrCompanies)


// export { arrCompanies, localStorage, Company } from "./classes.js"