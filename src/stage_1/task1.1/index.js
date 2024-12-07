import { Product } from "./Product.js";

let prod = new Product("1", "sviter", "zelenyi sviter", 200, "abibas", "S", 100);

let prodId = prod.getId();
let prodName = prod.getName();
let prodDesccription = prod.getDescription();
let prodPrice = prod.getPrice();
let prodBrand = prod.getBrand();
let prodSizes = prod.getSizes();
let prodActiveSize = prod.getActiveSize();
let prodQuantity = prod.getQuantity();
let prodDate = prod.getDate();
let prodReviev = prod.getReviews();
let prodImages = prod.getImages();


console.log(prodId);
console.log(prodName);
console.log(prodDesccription);
console.log(prodPrice);
console.log(prodBrand);
console.log(prodSizes);
console.log(prodActiveSize);
console.log(prodQuantity);
console.log(prodDate);
console.log(prodReviev);
console.log(prodImages);

let newDesc = ";lahjgfd;lajkdsjflk;akwuefro[piauweoihapgiyiuiIIII[FIHGASg";
prod.setDescription(newDesc);

prodDesccription = prod.getDescription();
console.log(prodDesccription);

prodDate = prod.getDate();
console.log(prodDate);