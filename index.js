import { advertListController } from './advert-list/advertListController.js'
import { notificationController } from './notifications/notificationController.js'

const advertListElement = document.querySelector('.advert-list')
const notificationsElement = document.querySelector('.notifications')

const showMessage = notificationController(notificationsElement)
advertListController(advertListElement)

advertListElement.addEventListener('newNotification', (event) => {
    console.log('Event received!', event.detail.message);
    showMessage(event.detail.message)
})
