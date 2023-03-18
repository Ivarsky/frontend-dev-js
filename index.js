import { advertListController } from './advert-list/advertListController.js'
import { notificationController } from './notifications/notificationController.js'
import { userActionController } from './user-actions/userActionsController.js'

//const bodyElement = document.querySelector('body')
const advertListElement = document.querySelector('.advert-list')
const notificationsElement = document.querySelector('.notifications')
const userActionElement = document.querySelector('.user-actions')

userActionController(userActionElement)

notificationController(notificationsElement)

advertListController(advertListElement)
