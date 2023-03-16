import { isEmailValid } from "../utils/isEmailValid.js";

export function loginController(loginElement){

    loginElement.addEventListener('submit', (event)=> {
        event.preventDefault();

        const emailElement = loginElement.querySelector('#username');


        if (!isEmailValid(emailElement.value)) {
            alert('Wrong email')
        }

    })
}