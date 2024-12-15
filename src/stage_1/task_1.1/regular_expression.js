/**
 * The object contains fields that store regular expressions.
 */
let reguralExpression = {

    //Regular expression for email validation
    emailValidator: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9.+-]{1,19}@[a-zA-Z0-9.!$%&'*+/=?^_-]{1,15}\\.[a-z]{1,5}$"),

    //Regular expression for phone number validation
    phoneValidator: new RegExp("^(\\+38\\s?)?(\\(\\d{3}\\)|\\d{3})[\\s-]?(\\d{3})[\\s-]?(\\d{2})[\\s-]?(\\d{2})$"),

    //Regular expression for passvord validation
    passwordValidator: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d_]{8,}$"),
}