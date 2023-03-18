import { decodeToken } from '../utils/decodeToken.js'
import { buildGreetings } from './userActionsView.js';

export function userActionController(userActionsElement){
    const token = localStorage.getItem('token')

    if (token) {
        const loginLinkElement = userActionsElement.querySelector('#loginLink');
        const signupLinkElement = userActionsElement.querySelector('#signupLink');
        loginLinkElement.remove();
        signupLinkElement.remove();

        const payload = decodeToken(token);
        userActionsElement.appendChild(buildGreetings(payload.username));
    } else {
        const createAdLinkElement = userActionsElement.querySelector('#createAdLink');
        createAdLinkElement.remove()
        //TODO: boton logout 

    }
}