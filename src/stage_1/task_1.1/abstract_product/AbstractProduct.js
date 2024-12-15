/**
 * The AbstractProduct constructor function is used to assign values ​​to the base fields of objects that are considered products. 
 * AbstractProduct cannot create instances of AbstractProduct and is only used for inheritance.
 * @param {string} id - product id. must be a unique value
 * @param {string} name - product name
 * @param {string} description - product description
 * @param {number} price - product price
 * @param {string} brand - product brand
 * @param {number} quantity - available quantity of product
 */
function AbstractProduct(id, name, description, price, brand, quantity) {
    if (new.target === AbstractProduct) {
        console.log("Cannot create an instance of AbstractProduct");
    }
    this.ID = typeof id === "string" ? id : null;
    this.name = typeof name === "string" ? name : null;
    this.description = typeof description === "string" ? description : null;
    this.price = typeof price === "number" ? price : 0;
    this.brand = typeof brand === "string" ? brand : null;
    this.quantity = typeof quantity === "number" ? quantity : 0;

    this.date = new Date();

    this.reviews = [];

    this.images = [];
}
/***
 * @returns function returns the object ID
 */
AbstractProduct.prototype.getId = function () {
    return this.ID;
}
/**
 * The function sets a new ID value if the previous one is null or undefined.
 * @param {string} newId - new value of ID
 */
AbstractProduct.prototype.setId = function (newId) {
    if (this.ID === null || this.ID === undefined) {
        this.ID = newId;
    } else {
        console.log("This object already has an ID. ID is " + this.ID);
    }
}
/**
 * @returns function returns the value of the name field.
 */
AbstractProduct.prototype.getName = function () {
    return this.name
}
/**
 * The function sets the new value of the name field.
 * @param {string} newName - new value of the name field
 */
AbstractProduct.prototype.setName = function (newName) {
    switch (typeof newName) {
        case "string": this.name = newName;
            break;
        default: console.log("Name has not bee change");
    }
}
/**
 * @returns function returns the value of the description field.
 */
AbstractProduct.prototype.getDescription = function () {
    return this.description;
}
/**
 * The function sets the new value of the description field.
 * @param {string} newDescripton - new value of the description field
 */
AbstractProduct.prototype.setDescription = function (newDescripton) {
    switch (typeof newDescripton) {
        case "string": this.description = newDescripton;
            break;
        default: console.log("Description has not bee change");
    }
}
/**
 * @returns function returns the value of the price field
 */
AbstractProduct.prototype.getPrice = function () {
    return `$${this.price}`;
}
/**
 * The function sets the new value of the price field
 * @param {number} newPrice - new value of the price field
 */
AbstractProduct.prototype.setPrice = function (newPrice) {
    switch (typeof newPrice) {
        case "number": this.price = newPrice;
            break;
        default: console.log("Description has not bee change");
    }
}
/**
 * @returns - function returns the value of the brand field
 */
AbstractProduct.prototype.getBrand = function () {
    return this.brand;
}
/**
 * The function sets the new value of the brand field
 * @param {string} newBrand - new value of the brand field
 */
AbstractProduct.prototype.setBrand = function (newBrand) {
    switch (typeof newBrand) {
        case "string": this.brand = newBrand;
            break;
        default: console.log("Brand has not bee change");
    }
}
/**
 * @returns - function returns the value of the quantity field
 */
AbstractProduct.prototype.getQuantity = function () {
    return this.quantity;
}
/**
 * The function sets the new value of the quantity field
 * @param {number} newQuantity - new value of the quantity field
 */
AbstractProduct.prototype.setQuantity = function (newQuantity) {
    switch (typeof newQuantity) {
        case "number": this.quantity = newQuantity;
            break;
        default: console.log("Quantity has not bee change");
    }
}
/**
 * 
 * @returns function returns the value of the data field
 */
AbstractProduct.prototype.getDate = function () {
    return this.date;
}
/**
 * The function sets new value of the date field
 */
AbstractProduct.prototype.setDate = function () {
    this.date = new Date;
}

/**
 * @returns function returns the value of the reviews field
 */
AbstractProduct.prototype.getReviews = function () {
    return this.reviews;
}
/**
 * The function sets new value of the reviews field
 * @param {Array} newRewiews - new value of the review field
 */
AbstractProduct.prototype.setReviews = function (newRewiews) {
    if (newRewiews instanceof Array) {
        this.reviews = newRewiews;
    }
}
/** 
 * @returns function returns the value of the images field 
 */
AbstractProduct.prototype.getImages = function () {
    return this.images;
}
/**
 * The function sets new value of the images field
 * @param {Array} newImages - new value of the images fied
 */
AbstractProduct.prototype.setImages = function (newImages) {
    if (newImages instanceof Array) {
        this.images = newImages;
    }
}
/**
 * @returns function returns value of all field in object
 */
AbstractProduct.prototype.getFullInformation = function () {
    return `ID: ${this.ID}\nName: ${this.name}\nDescription: ${this.description}\nPrice: $${this.price}\nQuantity: ${this.quantity}\nBrand ${this.brand}\nQuantity: ${this.quantity}\nDate: ${this.date}\nReviews: ${this.reviews.join(", ")}\nImages: ${this.images.join(", ")}`;
}
/**
 * Function to calculate how much you need to pay for n-units of a product
 * @param {number} number - quantity of goods
 * @returns price for n-units of a product
 */
AbstractProduct.prototype.getPriceForQuantity = function (number) {
    return `$${this.price * number}`;
}
/**
 * A function that can be used as a getter or setter
 * @param {string} action - "get" if you want to get the field value, "set" if you want to change the field value
 * @param {string} field - name of the field whose value you want to get or set
 * @param {string or number} value  - if the action  = "set" value = new field value passed in the field parameter
 * @returns - if the action = "get" returns the value of the object field that is passed in the "field" parameter
 */
AbstractProduct.prototype.getOrSett = function (action, field, value) {
    if (action === "get") {
        return this[field]
    } else if (action === "set" && value !== undefined) {
        this[field] = value;
    } else {
        console.log("Check the parameters");
    }
}

/**
 * A constructor function that creates Clothes objects.
 * @param {string} id - product id. must be a unique value
 * @param {string} name - product name
 * @param {string} description - product description
 * @param {number} price - product price
 * @param {string} brand - product brand
 * @param {number} quantity - available quantity of product
 * @param {string} material - the material from which clothes are made
 * @param {string} color - color of clothing
 */
function Clothes(id, name, description, price, quantity, brand, material, color) {
    AbstractProduct.call(this, id, name, description, price, brand, quantity);

    this.material = typeof material === "string" ? material : null;
    this.color = typeof color === "string" ? color : null;
}

Clothes.prototype = Object.create(AbstractProduct.prototype);

/**
 * @returns function returns value of all field in Clothes object
 */
Clothes.prototype.getFullInformation = function () {
    return AbstractProduct.prototype.getFullInformation.call(this) + `\nMaterial: ${this.material}\nColor: ${this.color}`;
}
/**
 * @returns functon return value of material field
 */
Clothes.prototype.getMaterial = function () {
    return this.material;
}
/**
 * Functon sets new value to the material field
 * @param {string} newMaterial - new value of the material field
 */
Clothes.prototype.setMaterial = function (newMaterial) {
    switch (typeof newMaterial) {
        case "string": this.material = newMaterial;
            break;
        default: console.log("Material has not bee changes")
    }
}
/**
 * @returns function return value of color field
 */
Clothes.prototype.getColor = function () {
    return this.color;
}
/**
 * Fiuncton sets new value to the color field
 * @param {*} newColor - value of the color field
 */
Clothes.prototype.setColor = function (newColor) {
    switch (typeof newColor) {
        case "string": this.color = newColor;
            break;
        default: console.log("Colot has not bee changes")
    }
}


/**
 * A constructor function that creates Electronics objects.
 * @param {string} id - product id. must be a unique value
 * @param {string} name - product name
 * @param {string} description - product description
 * @param {number} price - product price
 * @param {string} brand - product brand
 * @param {number} quantity - available quantity of product
 * @param {number} warranty - warranty period in months
 * @param {number} power - device power in watts
 */
function Electronics(id, name, description, price, brand, quantity, warranty, power) {
    AbstractProduct.call(this, id, name, description, price, brand, quantity);

    this.warranty = typeof warranty === "number" ? warranty : null;
    this.power = typeof power === "number" ? power : null;
}
Electronics.prototype = Object.create(AbstractProduct.prototype);

/**
 * @returns function returns value of all field in Clothes object
 */
Electronics.prototype.getFullInformation = function () {
    return AbstractProduct.prototype.getFullInformation.call(this) + `\nWarranty: ${this.warranty} month\nPower: ${this.power} W`;
}

/**
 * @returns value of the warranty field
 */
Electronics.prototype.getWarranty = function () {
    return `${this.warranty} month`;
}
/**
 * Function sets new value to the warranty field
 * @param {number} newWarranty - new value of warranty field
 */
Electronics.prototype.setWarranty = function (newWarranty) {
    switch (typeof newWarranty) {
        case "number": this.warranty = newWarranty;
            break;
        default: console.log("Warranty has not bee changes")
    }
}

/**
 * @returns value of the power field
 */
Electronics.prototype.getPower = function () {
    return `${this.power} W`;
}
/**
 * Function sets new value to the power field
 * @param {number} newPower - new value of the power fiedl
 */
Electronics.prototype.setPower = function (newPower) {
    switch (typeof newPower) {
        case "number": this.power = newPower;
            break;
        default: console.log("Power has not bee changes")
    }
}