function AbstractProduct(id, name, description, price, brand, quantity) {
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

AbstractProduct.prototype.getId = function () {
    return this.ID;
}
AbstractProduct.prototype.setId = function (newId) {
    if (this.ID === null || this.ID === undefined) {
        this.ID = newId;
    } else {
        console.log("This object already has an ID. ID is " + this.ID);
    }
}

AbstractProduct.prototype.getName = function () {
    return this.name
}
AbstractProduct.prototype.setName = function (newName) {
    switch (typeof newName) {
        case "string": this.name = newName;
            break;
        default: console.log("Name has not bee change");
    }
}

AbstractProduct.prototype.getDescription = function () {
    return this.description;
}
AbstractProduct.prototype.setDescription = function (newDescripton) {
    switch (typeof newDescripton) {
        case "string": this.description = newDescripton;
            break;
        default: console.log("Description has not bee change");
    }
}

AbstractProduct.prototype.getPrice = function () {
    return this.price;
}
AbstractProduct.prototype.setPrice = function (newPrice) {
    switch (typeof newPrice) {
        case "number": this.price = newPrice;
            break;
        default: console.log("Description has not bee change");
    }
}

AbstractProduct.prototype.getBrand = function () {
    return this.brand;
}
AbstractProduct.prototype.setBrand = function (newBrand) {
    switch (typeof newBrand) {
        case "string": this.brand = newBrand;
            break;
        default: console.log("Brand has not bee change");
    }
}

AbstractProduct.prototype.getQuantity = function () {
    return this.quantity;
}
AbstractProduct.prototype.setQuantity = function (newQuantity) {
    switch (typeof newQuantity) {
        case "number": this.quantity = newQuantity;
            break;
        default: console.log("Quantity has not bee change");
    }
}

AbstractProduct.prototype.getDate = function () {
    return this.Date;
}
AbstractProduct.prototype.setDate = function () {
    this.date = new Date;
}

AbstractProduct.prototype.getReviews = function () {
    return this.reviews;
}
AbstractProduct.prototype.setReviews = function (newRewiews) {
    if (newRewiews instanceof Array) {
        this.reviews = newRewiews;
    }
}
AbstractProduct.prototype.getImages = function () {
    return this.images;
}
AbstractProduct.prototype.swtImages = function (newImages) {
    if (newImages instanceof Array) {
        this.images = newImages;
    }
}

AbstractProduct.prototype.getFullInformation = function () {
    return `ID: ${this.ID}\nName: ${this.name}\nDescription: ${this.description}\nPrice: ${this.price}\n
        Quantity: ${this.quantity}\nBrand ${this.brand}\nQuantity: ${this.quantity}\nDate: ${this.date}\n
        Reviews: ${this.reviews.join(", ")}\nImages: ${this.images.join(", ")}`;
}

AbstractProduct.prototype.getPriceForQuantity = function (number) {
    return `$${this.price * number}`;
}

AbstractProduct.prototype.getteOrSetter = function (action, field, value) {
    if (action === "get") {
        return this[field]
    } else if (action === "set") {
        this[field] = value;
    }
}


function Clothes(id, name, description, price, quantity, material, color) {
    AbstractProduct.call(this, id, name, description, price, quantity);

    this.material = typeof material === "string" ? material : null;
    this.color = typeof color === "string" ? color : null;
}

Clothes.prototype = Object.create(AbstaractProduct.prototype);

Clothes.prototype.getFullInformation = function () {
    return AbstractProduct.prototype.getFullInformation.call(this) + `Material: ${this.material}\nColor: ${this.color}`;
}

Clothes.prototype.getMaterial = function () {
    return this.material;
}
Clothes.prototype.setMaterial = function (newMaterial) {
    switch (typeof newMaterial) {
        case "string": this.material = newMaterial;
            break;
        default: console.log("Material has not bee changes")
    }
}

Clothes.prototype.getColor = function () {
    return this.color;
}
Clothes.prototype.setColor = function (newColor) {
    switch (typeof newColor) {
        case "string": this.color = newColor;
            break;
        default: console.log("Colot has not bee changes")
    }
}



function Electronics(id, name, description, price, quantity, warranty, power) {
    AbstractProduct.call(this, id, name, description, price, quantity);

    this.warranty = typeof warranty === "number" ? warranty : null;
    this.power = typeof power === "number" ? power : null;
}
Electronics.prototype = Object.create(AbstaractProduct.prototype);

Electronics.prototype.getFullInformation = function () {
    return AbstractProduct.prototype.getFullInformation.call(this) + `Warranty: ${this.warranty}\nPower: ${this.power}`;
}

Electronics.prototype.getWarranty = function () {
    return this.warranty;
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

