import { pubSub } from "../pubSub.js";
import { createUser } from "./signup.js";
export function signupController(signupElement) {

    signupElement.addEventListener('submit', async (event) => {
        event.preventDefault();

        const emailElement = signupElement.querySelector('#username');
        const passwordElement = signupElement.querySelector('#password');
        const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

        if (isEmailValid(emailElement.value) && arePasswordsValid(passwordElement.value, passwordConfirmElement.value)) {
            try {
                await createUser(emailElement.value, passwordElement.value)
                signupElement.reset();
                //alert('User created succesfully');
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'User created succesfully')
                window.location = '/'
            } catch (error) {
                //alert(error.message)
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            }
        }
    })


    function arePasswordsValid(password, passwordConfirmation) {
        if (password !== passwordConfirmation) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Passwords not matching!')

            return false
        }
        return true
    }

    function isEmailValid(email) {
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!mailRegExp.test(email)) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Email format not supported!')
            return false
        }
        return true
    }

}
