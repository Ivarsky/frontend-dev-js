import { notificationController } from "../notifications/notificationController.js";
import { loginController } from "./loginController.js";

const loginElement = document.querySelector('#logUser')
const notificationsElement = document.querySelector('.notifications')

loginController(loginElement)
notificationController(notificationsElement)