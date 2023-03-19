import { notificationController } from "../notifications/notificationController.js"
import { adDetailController } from "./adDetailController.js"
import { spinnerController } from "../spinner/spinnerController.js";

const params = new URLSearchParams(window.location.search)
const adId = params.get('adId')
const notificationsElement = document.querySelector('.notifications')
const spinnerElement = document.querySelector('#spinner')

if (!adId) {
    window.location = '/'
} else {
    const adDetailElement = document.querySelector('.advert-detail')
    spinnerController(spinnerElement)
    adDetailController(adDetailElement, adId)
    notificationController(notificationsElement)
}