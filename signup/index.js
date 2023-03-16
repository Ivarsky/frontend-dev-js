import { notificationController } from "../notifications/notificationController.js";
import { signupController } from "./signupController.js";

const signupElement = document.querySelector('#createUser')
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)

signupController(signupElement)