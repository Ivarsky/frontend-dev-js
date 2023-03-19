import { createAdController } from "./createAdController.js";
import { notificationController } from "../notifications/notificationController.js";

const token = localStorage.getItem('token')

if (!token) {
    window.location = '/'
} else{
    const createAdFormElement = document.querySelector('#createAdFrom');
    const notificationsElement = document.querySelector('.notifications');
    createAdController(createAdFormElement);
    notificationController(notificationsElement)
}