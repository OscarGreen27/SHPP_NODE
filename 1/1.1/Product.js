function Product(id, name, description, price, brand, activeSize, quantity, date) {

    switch (typeof id) {
        case "string": this.ID = id;
        default: this.ID = null;
    }

    switch (typeof name) {
        case "string": this.name = name
        default: this.name = null;
    }

    switch (typeof description) {
        case "string": this.description = description;
        default: this.description = null;
    }


    switch (typeof price) {
        case "number": this.price = price;
        default: this.price = null;
    }

    switch (typeof brand) {
        case "string": this.brand = brand;
        default: this.brand = null;
    }


    this.sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    switch (typeof activeSize) {
        case "string": this.activeSize = activeSize;
        default: this.activeSize = null;
    }

    switch (typeof quantity) {
        case "number": this.quantity = quantity;
        default: this.quantity = null;
    }

    if (date instanceof Date) {
        this.date = date;
    } else {
        this.date = null;
    }

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
            default: console.log("Name has not bee change");
        }
    }


    this.getDescriptoion = function () {
        return this.description;
    }

    this.setDescription = function (newDescripton) {
        switch (typeof newDescripton) {
            case "string": this.description = newDescripton;
            default: console.log("Description has not bee change");
        }
    }

    this.getPrice = function () {
        return this.price;
    }

    this.setPrice = function (newPrice) {
        switch (typeof newPrice) {
            case "number": this.price = newPrice;
            default: console.log("Price has not bee change");
        }
    }

    this.getBrand = function () {
        return this.brand;
    }

    this.setBrand = function (newBrand) {
        switch (typeof newBrand) {
            case "string": this.brand = newBrand;
            default: console.log("Brand has not bee change");
        }
    }

    this.getSizes = function () {
        return this.sizes;
    }

    this.setSize = function (newSize) {
        switch (typeof newSize) {
            case "string": this.sizes.push(newSize);
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
            case "string": this.quantity = newQuantity;
            default: console.log("Quantity has not bee change");
        }
    }

    this.getDate = function () {
        return this.date;
    }

    this.setDate = function (newDate) {
        if (newDate instanceof Date) {
            this.date = newDate;
        } else {
            console.log("Date has not bee change");
        }
    }

    this.getReviews = function () {
        return this.reviews;
    }

    this.setReview = function (Review) {
        if (review instanceof Review) {
            this.reviews.push(Review);
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
            default: console.log("No image added.")
        }
    }
}

function Review(ID, author, date, coment, rating) {

}

