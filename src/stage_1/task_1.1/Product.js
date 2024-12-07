/**
 * A constructor function that creates Product objects. 
 * Product objects contain information about an individual product.
 * Internal fields date, reviews, images are created when the function is called.
 * data - product creation date
 * reviews - array containing customer reviews
 * images - array containing a product photo
 * @param {string} id - product id. must be a unique value
 * @param {string} name - product name
 * @param {string} description - product description
 * @param {number} price - product price
 * @param {string} brand - product brand
 * @param {string} activeSize - available product sizes
 * @param {number} quantity - available quantity of product
 */
export function Product(id, name, description, price, brand, activeSize, quantity) {
    this.ID = typeof id === "string" ? id : null;
    this.name = typeof name === "string" ? name : null;
    this.description = typeof description === "string" ? description : null;
    this.price = typeof price === "number" ? price : 0;
    this.brand = typeof brand === "string" ? brand : null;

    this.sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    this.activeSize = typeof activeSize === "string" ? activeSize : null;
    this.quantity = typeof quantity === "number" ? quantity : 0;

    this.date = new Date;

    this.reviews = [];

    this.images = [];

    this.getId = function () {
        return this.ID;
    }

    this.setId = function (id) {
        if (this.ID === null && this.ID === undefined) {
            this.ID = id;
        } else {
            console.log("This object already has an ID. ID is " + this.ID);
        }
    }

    this.getName = function () {
        return this.name;
    }

    this.setName = function (newName) {
        switch (typeof newName) {
            case "string": this.name = newName;
                break;
            default: console.log("Name has not bee change");
        }
    }


    this.getDescription = function () {
        return this.description;
    }

    this.setDescription = function (newDescripton) {
        switch (typeof newDescripton) {
            case "string": this.description = newDescripton;
                break;
            default: console.log("Description has not bee change");
        }
    }

    this.getPrice = function () {
        return this.price;
    }

    this.setPrice = function (newPrice) {
        switch (typeof newPrice) {
            case "number": this.price = newPrice;
                break;
            default: console.log("Price has not bee change");
        }
    }

    this.getBrand = function () {
        return this.brand;
    }

    this.setBrand = function (newBrand) {
        switch (typeof newBrand) {
            case "string": this.brand = newBrand;
                break;
            default: console.log("Brand has not bee change");
        }
    }

    this.getSizes = function () {
        return this.sizes;
    }

    this.setSize = function (newSize) {
        switch (typeof newSize) {
            case "string": this.sizes.push(newSize);
                break;
            default: console.log("New size not added");
        }
    }

    this.getActiveSize = function () {
        return this.activeSize;
    }

    this.setActiveSize = function (newActiveSize) {
        switch (typeof newActiveSize) {
            case "string": this.activeSize = newActiveSize;
        }
    }

    this.getQuantity = function () {
        return this.quantity;
    }

    this.setQuantity = function (newQuantity) {
        switch (typeof newQuantity) {
            case "number": this.quantity = newQuantity;
                break;
            default: console.log("Quantity has not bee change");
        }
    }

    this.getDate = function () {
        return this.date;
    }

    this.setDate = function () {
        this.date = new Date;
    }

    this.getReviews = function () {
        return this.reviews;
    }

    this.setReview = function (newReview) {
        if (newReview instanceof Review) {
            this.reviews.push(newReview);
        } else {
            console.log("No review added.");
        }
    }

    this.getImages = function () {
        return this.images;
    }

    this.setImage = function (image) {
        switch (typeof image) {
            case "string": this.images.push(image);
                break;
            default: console.log("No image added.")
        }
    }
}

function Review(id, author, coment, rating) {
    this.ID = typeof id === "string" ? id : null;
    this.author = typeof author === "string" ? author : "unknown author";

    this.date = new Date;
    this.coment = typeof coment === "string" ? coment : "...";
}

