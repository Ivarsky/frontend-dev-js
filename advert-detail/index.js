import { adDetailController } from "./adDetailController.js"

const params = new URLSearchParams(window.location.search)
const adId = params.get('adId')

if (!adId) {
    window.location = '/'
} else {
    const adDetailElement = document.querySelector('.advert-detail')
    adDetailController(adDetailElement, adId)
}