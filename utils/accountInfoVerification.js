import { pubSub } from "./pubSub.js";

export function isEmailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!mailRegExp.test(email)) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Email format not supported!')
            return false
        }
        return true
    }


export function arePasswordsValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Passwords not matching!')

        return false
    }
    return true
}