import { buildSpinnerView } from "../advert-list/advertView.js";
import { pubSub } from "../pubSub.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { loginUser } from "./login.js";

export function loginController(loginElement){

    loginElement.addEventListener('submit', (event)=> {
        event.preventDefault();

        const emailElement = loginElement.querySelector('#username');


        if (!isEmailValid(emailElement.value)) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Wrong email format!')
        }else{
            logUser(loginElement)
        }
    })

    async function logUser(loginElement){
        const formData = new FormData(loginElement);
        const username = formData.get('username');
        const password = formData.get('password');

            try {
                const jwt = await loginUser(username, password);
                localStorage.setItem('token', jwt);
                window.location = '/';
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            }
    }
}
function hideSpinner(loginElement) {
    const spinnerElement = loginElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}