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
        if (this.ID === null || this.ID === undefined) {
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

    this.setSizes = function (newSizes) {
        if (newSizes instanceof Array) {
            this.sizes = newSizes
        }
    }

    this.getActiveSize = function () {
        return this.activeSize;
    }

    this.setActiveSize = function (newActiveSize) {
        switch (typeof newActiveSize) {
            case "string": this.activeSize = newActiveSize;
                break;
            default: console.log("New active size not added");
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

    this.setReviews = function (newReviews) {
        if (newReviews instanceof Array) {
            this.reviews = newReviews;
        }
    }

    this.getImages = function () {
        return this.images;
    }

    this.setImage = function (newImages) {
        if (newImages instanceof Array) {
            this.images = newImages;
        }
    }
    /**
     * Searches for a response based on the input parameter and returns it if found
     * @param {string} id 
     * @returns - review from a review array
     */
    this.getReviewById = function (id) {
        if (typeof id !== "string") {
            return null;
        }
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID === id) {
                return this.reviews[i];
            }
        }
        return null;
    }

    /**
     * Returns "image" from the images field
     * @param {string} - param 
     * @returns  - if the parameter is specified when the function is called it will return the corresponding image,
     *             if no corresponding image is found it will return the first image
     *           - if no parameter is specified when calling the function, it returns the first "image" from the array
     * if the array is empty returns undefined :(
     */
    this.getImage = function (param) {
        if (param !== undefined) {
            for (let i = 0; i < this.images.length; i++) {
                if (this.images[i] === param) {
                    return this.images[i];
                } else {
                    return this.images[0];
                }
            }
        }
        return this.image[0];
    }

    /**
     * The method adds a new dimension to the dimensions array.
     * @param {string} newSize
     */
    this.addSize = function (newSize) {
        switch (typeof newSize) {
            case "string": this.sizes.push(newSize);
                break;
            default: console.log("New size not added");
        }
    }

    /**
     * The method removes values ​​from an array of dimensions.
     * @param {string} size - size value to be deleted
     */
    this.deleteSize = function (size) {
        if (typeof size !== "string") {
            return;
        }
        for (let i = 0; i < this.sizes.length; i++) {
            if (this.sizes[i] === size) {
                this.sizes.splice(i, 1);
            }
        }
    }

    /**
     * The method adds a new review to the reviews array.
     * @param {Review} newReview
     */
    this.addReview = function (newReview) {
        if (newReview instanceof Review) {
            this.reviews.push(newReview);
        } else {
            console.log("New rewiew not added");
        }
    }
    /**
     * The method deletes the review by its ID.
     * @param {string} id - the id of the review to be deleted
     */
    this.deleteReview = function (id) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID === id) {
                this.reviews.splice(i, 1);
            }
        }
    }


}

/**
 * The function searches for Product objects in an array. 
 * The search is performed in the fields with the description and name.
 * @param {Array} products - an array of Product objects in which you want to find elements that match the search key
 * @param {String} search - search key
 * @returns - an array of objects whose description or name contains the search key
 */
export function searchProducts(products, search) {
    let result = [];
    if (!(products instanceof Array) || typeof search !== "string") {
        return result;
    }

    let regExp = new RegExp(search.replace("*", ".*"), "i");

    result = products.filter(product => regExp.test(product.name) || regExp.test(product.description));

    return result;
}

/**
 * The function sorts an array of Product objects using the array method sort().
 * The sort() method is passed an arrow function that works with the method arguments
 *  and sorts the array depending on the sortRule parameter.
 * @param {Array} products - array of objects Product
 * @param {string} search - field of the Product object by which the array is sorted (ID, name, price)
 * @returns sorted array, if the input parameters are invalid, an empty array will be returned
 */
export function sortProducts(products, sortRule) {
    let result = [];
    if (!(products instanceof Array) || typeof sortRule !== "string") {
        return result;
    }

    result = products.sort((a, b) => {
        if (sortRule === "price") {
            return a[sortRule] - b[sortRule];
        } else if (sortRule === "ID" || sortRule === "name") {
            return a[sortRule].localeCompare(b[sortRule]);
        } else {
            return 0;
        }
    });
    return result;
}
