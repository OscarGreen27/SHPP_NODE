let reguralExpression = {
    
    emailValidator: new RegExp("^[a-zA-Z0-9]{1, 20}@[a-zA-Z0-9]{1, 15}\\.(a-z){1-5}$"),

    phoneValidator: new RedExp("^(\+38\s?)?(?\d{3}?[\s-]?)?\d{3}[\s-]?\d{2}[\s-]?\d{2}$"),

    passwordValidator: new RedExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d_]{8,}$"),
}