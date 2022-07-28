class Empresa{
    constructor(name, userPic, background = "", description, totalFund = 0, redes, tags, topDonation){
        this.name = name,
        this.userPic = userPic,
        this.background = background,
        this.description = description,
        this.totalFund = totalFund,
        this.redes = [redes],
        this.tags = [tags],
        this.topDonation = {topDonation}
    }
}

const Fosforito = new Empresa(
    "Fosforito",
    ["fosforo.com","twitter.com/fosforo"],
    "Somos una empresa multimillonaria miamiiii",
    ["Madera","Arquitectura","Cuarzo"],
    150000,
    "asd"
)
console.log(Fosforito)
// class Product {
// 	static currentID = 1;

// 	constructor({ price, stock = 0, name, description, image }) {
// 		this.ID = Product.currentID;
// 		this.price = price;
// 		this.stock = stock;
// 		this.name = name;
// 		this.description = description;
// 		this.image = image;

// 		Product.currentID++;
// 	}
