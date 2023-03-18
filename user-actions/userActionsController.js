import { decodeToken } from '../utils/decodeToken.js'
import { buildGreetings } from './userActionsView.js';

export function userActionController(userActionsElement){
    const token = localStorage.getItem('token')
    const logoutSessionElement = userActionsElement.querySelector('#logoutSession');
    
    if (token) {
        const loginLinkElement = userActionsElement.querySelector('#loginLink');
        const signupLinkElement = userActionsElement.querySelector('#signupLink');
        loginLinkElement.remove();
        signupLinkElement.remove();
        
        const payload = decodeToken(token);
        userActionsElement.appendChild(buildGreetings(payload.username));
        logoutSessionElement.addEventListener('click', () => {
            localStorage.removeItem('token')
            window.location.reload()
        })
    } else {
        const createAdLinkElement = userActionsElement.querySelector('#createAdLink');
        createAdLinkElement.remove()
        logoutSessionElement.remove()

    }
}