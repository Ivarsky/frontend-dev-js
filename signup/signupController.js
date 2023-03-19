import { buildSpinnerView } from "../advert-list/advertView.js";
import { pubSub } from "../utils/pubSub.js";
import { isEmailValid, arePasswordsValid } from "../utils/accountInfoVerification.js";
import { createUser } from "./signup.js";

export function signupController(signupElement) {

    signupElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        //signupElement.innerHTML = buildSpinnerView();

        const emailElement = signupElement.querySelector('#username');
        const passwordElement = signupElement.querySelector('#password');
        const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

        if (isEmailValid(emailElement.value) && arePasswordsValid(passwordElement.value, passwordConfirmElement.value)) {
            try {
                await createUser(emailElement.value, passwordElement.value)
                signupElement.reset();
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'User created succesfully')
                window.location = '/'
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            } finally{
                hideSpinner(signupElement)
            }
        }
    })

}
function hideSpinner(signupElement) {
    const spinnerElement = signupElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}
