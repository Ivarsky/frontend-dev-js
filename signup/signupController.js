
export function signupController(signupElement) {

    signupElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailElement = signupElement.querySelector('#username');
        const passwordElement = signupElement.querySelector('#password');
        const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

        if (isEmailValid(emailElement.value) && arePasswordsValid(passwordElement.value, passwordConfirmElement.value)) {
            createUser(emailElement.value, passwordElement.value)
        }
    })


    function arePasswordsValid(password, passwordConfirmation) {
        if (password !== passwordConfirmation) {
            alert('passwords not matching!');
            return false
        }
        return true
    }

    function isEmailValid(email) {
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!mailRegExp.test(email)) {
            alert('Email format not supported!');
            return false
        }
        return true
    }

    function createUser(email, password) {
        const user = {
            username: email,
            password: password
        }


    }
}
