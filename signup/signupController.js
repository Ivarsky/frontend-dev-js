
export function signupController(signupElement) {

    signupElement.addEventListener('submit', (event) => {
        event.preventDefault();

        if (isFormValid(signupElement)) {
            //create user
        }
    })


    function arePasswordsValid(signupElement) {
        const passwordElement = signupElement.querySelector('#password');
        const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');
        if (passwordElement.value !== passwordConfirmElement.value) {
            alert('passwords not matching!');
            return false
        }
        return true
    }

    function isEmailValid(signupElement) {
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const emailElement = signupElement.querySelector('#username');
        if (!mailRegExp.test(emailElement.value)) {
            alert('Email format not supported!');
            return false
        }
        return true
    }

    function isFormValid(signupElement) {
        return isEmailValid(signupElement) && arePasswordsValid(signupElement)
    }
}
