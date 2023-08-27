const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

const validateName = (fullName) => {
    const nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    return nameRegex.test(fullName);
};

export const validateUserData = (email, password, name, isSignInForm) => {

    const response = {
        isValid: false,
        message: null
    };

    if (!validateEmail(email)) {
        response.message = "Invalid Email Address!";
        return response;
    }

    if (!validatePassword(password)) {
        response.message = "Invalid Password!";
        return response;
    }

    if (!isSignInForm) {
        if (!validateName(name)) {
            response.message = "Invalid Name!";
            return response;
        }
    }

    response.isValid = true;
    return response;
};
