function AbstaractProduct(id, name, description, price, quantity) {
    this.ID = typeof id === "string" ? id : null;
    this.name = typeof name === "string" ? name : null;
    this.description = typeof description === "string" ? description : null;
    this.price = typeof price === "number" ? price : 0;
    this.brand = typeof brand === "string" ? brand : null;
    this.quantity = typeof quantity === "number" ? quantity : 0;

    this.date = new Date;

    this.reviews = [];

    this.images = [];
}

AbstaractProduct.prototype.getId = function () {
    return this.ID;
}
AbstaractProduct.prototype.setId = function (newId) {
    if (this.ID === null || this.ID === undefined) {
        this.ID = newId;
    } else {
        console.log("This object already has an ID. ID is " + this.ID);
    }
}

AbstaractProduct.prototype.getName = function () {
    return this.name
}
AbstaractProduct.prototype.setName = function (newName) {
    switch (typeof newName) {
        case "string": this.name = newName;
            break;
        default: console.log("Name has not bee change");
    }
}

AbstaractProduct.prototype.getDescription = function () {
    return this.description;
}
AbstaractProduct.prototype.setDescription = function (newDescripton) {
    switch (typeof newDescripton) {
        case "string": this.description = newDescripton;
            break;
        default: console.log("Description has not bee change");
    }
}

AbstaractProduct.prototype.getPrice = function () {
    return this.price;
}
AbstaractProduct.prototype.setPrice = function (newPrice) {
    switch (typeof newPrice) {
        case "string": this.price = newPrice;
            break;
        default: console.log("Description has not bee change");
    }
}

AbstaractProduct.prototype.getBrand = function () {
    return this.brand;
}
AbstaractProduct.prototype.setBrand = function (newBrand) {
    switch (typeof newBrand) {
        case "string": this.brand = newBrand;
            break;
        default: console.log("Brand has not bee change");
    }
}

AbstaractProduct.prototype.getQuantity = function () {
    return this.quantity;
}
AbstaractProduct.prototype.setQuantity = function (newQuantity) {
    switch (typeof newQuantity) {
        case "number": this.quantity = newQuantity;
            break;
        default: console.log("Quantity has not bee change");
    }
}

AbstaractProduct.prototype.getDate = function () {
    return this.Date;
}
AbstaractProduct.prototype.setDate = function () {
    this.date = new Date;
}

AbstaractProduct.prototype.getReviews = function () {
    return this.reviews;
}
AbstaractProduct.prototype.setReviews = function (newRewiews) {
    if (newRewiews instanceof Array) {
        this.images = newRewiews;
    }
}
AbstaractProduct.prototype.getImages = function () {
    return this.images;
}
AbstaractProduct.prototype.swtImages = function (newImages) {
    if (newImages instanceof Array) {
        this.images = newImages;
    }
}

AbstaractProduct.prototype.getFullInformation = function () {
    return `ID: ${this.IDx}\nName: ${this.name}\nDescription: ${this.description}\nPrice: ${this.price}\n
        Quantity: ${this.quantity}\nBrand ${this.brand}\nQuantity: ${this.quantity}\nDate: ${this.date}\n
        Reviews: ${this.reviews.join(", ")}\nImages ${this.images.join(", ")}`;
}

AbstaractProduct.prototype.getPriceForQuantity = function (number) {
    return `$${this.price * number}`;
}

AbstaractProduct.prototype.getteOrSetter = function (action, field, value) {
    if (action === "get") {
        return this[field]
    }else if(action === "set"){
        this[field] = value;
    }
}


function Clothes(id, name, description, price, quantity, material, color) {
    AbstaractProduct.call(this, id, name, description, price, quantity);

    this.material = typeof material === "string" ? material : null;
    this.color = typeof color === "string" ? color : null;
}

Clothers.prototype = Object.create(AbstaractProduct.prototype);

Clothers.prototype.getMaterial = function () {
    return this.material;
}
Clothers.prototype.setMaterial = function (newMaterial) {
    switch (typeof newMaterial) {
        case "string": this.material = newMaterial;
            break;
        default: console.log("Material has not bee changes")
    }
}

Clothers.prototype.getColor = function () {
    return this.color;
}
Clothers.prototype.setColor = function (newColor) {
    switch (typeof newColor) {
        case "string": this.color = newColor;
            break;
        default: console.log("Colot has not bee changes")
    }
}



function Electronics(id, name, description, price, quantity, warranty, power) {
    AbstaractProduct.call(this, id, name, description, price, quantity);

    this.warranty = typeof warranty === "number" ? warranty : null;
    this.power = typeof power === "number" ? power : null;
}
Electronics.prototype = Object.create(AbstaractProduct.prototype);

Electronics.prototype.getWarranty = function () {
    return this.materiall
}
Electronics.prototype.setWarranty = function (newWarranty) {
    switch (typeof newWarranty) {
        case "number": this.warranty = newWarranty;
            break;
        default: console.log("Warranty has not bee changes")
    }
}

Electronics.prototype.getPower = function () {
    return this.power;
}
Electronics.prototype.setPower = function (newPower) {
    switch (typeof newPower) {
        case "number": this.power = newPower;
            break;
        default: console.log("Power has not bee changes")
    }
}

