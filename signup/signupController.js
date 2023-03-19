
import { pubSub } from "../utils/pubSub.js";
import { isEmailValid, arePasswordsValid } from "../utils/accountInfoVerification.js";
import { createUser } from "./signup.js";
import { buildSpinnerView } from "./signupView.js";

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
                signupElement.innerHTML = buildSpinnerView();
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Creating new account')
                setTimeout(() => {
                    window.location = '/'
                }, 500)
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            }
        }
    })

}
