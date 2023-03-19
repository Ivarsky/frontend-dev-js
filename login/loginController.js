import { buildSpinnerView} from "./loginViews.js"; //TODO: spinner
import { pubSub } from "../utils/pubSub.js";
import { isEmailValid } from "../utils/accountInfoVerification.js";
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
                loginElement.innerHTML = buildSpinnerView();
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `Login in`);
                const jwt = await loginUser(username, password);
                localStorage.setItem('token', jwt);
                setTimeout(() => {
                    window.location = '/'
                }, 500)
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            }
    }
}
