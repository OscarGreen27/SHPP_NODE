/**
 * Constructor function that creates objects Review
 * @param {string} id - Object ID (can be used as a title for the review)
 * @param {string} author - reviewer's name
 * @param {string} coment - review content
 * !!! The parameters below are required for the Rating constructor function
 * @param {number} serviseRait - service rating
 * @param {number} priceRait - price rating
 * @param {number} valueRait - cost rating
 * @param {number} qualityRait - quality rating
 */
export function Review(id, author, coment, serviseRait, priceRait, valueRait, qualityRait) {
    this.ID = typeof id === "string" ? id : null;
    this.author = typeof author === "string" ? author : "unknown author";

    this.date = new Date;
    this.coment = typeof coment === "string" ? coment : "...";

    this.rating = new Rating(serviseRait, priceRait, valueRait, qualityRait)


    /**
     * The function creates a Rating object that is responsible for evaluating various product characteristics.
     * @param {number} serviseRait - service rating
     * @param {number} priceRait - price rating
     * @param {number} valueRait - cost rating
     * @param {number} qualityRait - quality rating
     */
    function Rating(serviseRait, priceRait, valueRait, qualityRait) {
        this.servise = typeof serviseRait === "number" ? checkRatingNumber(serviseRait) : null;
        this.price = typeof priceRait === "number" ? checkRatingNumber(priceRait) : null;
        this.value = typeof valueRait === "number" ? checkRatingNumber(valueRait) : null;
        this.quality = typeof qualityRait === "number" ? checkRatingNumber(qualityRait) : null;

        /**
         * The function checks whether the input number meets the evaluation parameters. 
         * The rating range should be from 1 to 5.
         * @param {number} number - the number to check
         * @returns - 1 if the number is less than the smallest allowable score value
         *          - 5 if the number is greater than the maximum allowed value
         *          - parameter number if the number matches the evaluation range
         */
        function checkRatingNumber(number) {
            if (number < 1) {
                return 1;
            } else if (number > 5) {
                return 5;
            } else {
                return number;
            }
        }
    }
}