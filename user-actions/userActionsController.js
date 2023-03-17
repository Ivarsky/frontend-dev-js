export function userActionController(userActionsElement){
    const token = localStorage.getItem('token')

    if (token) {
        const loginLinkElement = userActionsElement.querySelector('#loginLink');
        const signupLinkElement = userActionsElement.querySelector('#signupLink');
        loginLinkElement.remove();
        signupLinkElement.remove()
    } else {
        const createAdLinkElement = userActionsElement.querySelector('#createAdLink');
        createAdLinkElement.remove()

    }
}